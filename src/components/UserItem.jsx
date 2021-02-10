import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, salariu, logo} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>{ salariu }</p>
            <img src={logo} alt="Logo"/>
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            <button>Sterge Utilizator</button>
        </div>
    );
}

export default UserItem;