import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            email: '',
            salariu: '',
            logo: '',
            isGoldClient: false
        };
    }

    
    updateName(event) {
        
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient (event) {
        console.log(event.target.checked);
        this.setState({isGoldClient: event.target.checked});
    }

    updateSalariu(event) {
        this.setState({salariu: event.target.value});
    }

    updateLogo(event) {
        this.setState({logo: event.target.value});
    }

    render() {
        const {name, email, salariu, logo, isGoldClient} = this.state;
        const {submitAddForm} = this.props;
        
        

        return (<div>
            <form
                className="user-add-form"
                onSubmit={submitAddForm.bind(undefined, name, email, salariu, logo, isGoldClient)}
                
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />

                <label htmlFor="salariu">Salariu</label>
                <input type="text"
                       name="salariu"
                       onChange={(event) => this.updateSalariu(event)}
                />

                <label htmlFor="salariu">Logo</label>
                <input type="text"
                       name="logo"
                       onChange={(event) => this.updateLogo(event)}
                />

                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Introdu utilizatorul"/>
            </form>
           
                </div>
        )
    }
}

export default UserAddForm;