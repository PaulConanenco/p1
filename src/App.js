import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      isUsers: true,
      isPosts: false
    };

  }

  triggerPosts = () => {
    this.setState({
      ...this.state,
      isUsers: false,
      isPosts: true
    })
  }

  triggerUsers = () => {
    this.setState({
      ...this.state,
      isUsers: true,
      isPosts: false
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
               data = data.filter(user => user.id < 4);
       
        data.forEach(user => {
          user.isGoldClient = false;
          user.logo = 'download.jpg';
        });
        this.setState({users: data});
      });
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      data = data.filter(post => post.id < 4);
      this.setState({posts: data})
    })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
    console.log(this.state.background);
  }

  changeTextColor(event) {
    this.setState({color: event.target.value});
    console.log(this.state.color)
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(name, email, salariu, logo, isGoldClient, event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            salariu,
            logo,
            isGoldClient           
          }
        ]
      }
    });
  }

  



  deleteUser (userIdToDelete) {
    
    this.setState(prevState => {     
        const users = prevState.users.filter(user => user.id !== userIdToDelete);
        return { users };
    });
}



 
  render() {
    return(
      <div className="app" style={{background: this.state.background, color: this.state.color}}>
        <h1>Admin panel</h1>
        <UserAddForm submitAddForm={this.submitAddForm.bind(this)} />
        
        
        {this.state.isUsers && <UserList users={this.state.users} deleteUser={this.deleteUser.bind(this)} />}
        {this.state.isPosts && <PostList posts={this.state.posts} />}
      
        <button onClick={this.triggerUsers}>Afiseaza Useri</button>
        <button onClick={this.triggerPosts}>Afiseaza Postari</button>       

        <div className='change-color'>
         <input type="color" onChange={(event) => this.changeColor(event)}/>
         </div>

         <div className='change-text'>
           <input type="color" onChange={(event) => this.changeTextColor(event)}/>
          </div>
      </div>
    );
  }
}

export default App;
