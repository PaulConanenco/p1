import React from 'react';
import './UserItem.css'

function UserItem(props) {
    const {name, email, isGoldClient, salariu, logo, deleteUser, id} = props;

    return (
        <div className="user-item">
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>{ salariu }</p>
            {/* <img src={process.env.PUBLIC_URL + '/images/' + logo} alt="Logo"/> */}
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <button  onClick={() => deleteUser(id)}>Sterge Utilizator</button>
        </div>
    );
    
}

export default UserItem;