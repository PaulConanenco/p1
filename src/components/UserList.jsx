import React from 'react';
import UserItem from './UserItem';

// Observatie: Componenta UserList a redevenit o componenta declarata cu function.
function UserList(props) {
    const { users } = props;

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            { users.map((user, index) => {
                console.log('user',user)
                return <UserItem
                    // adaugam prop-ul id componentei UserItem
                    id={ user.id }
                    name={ user.name }
                    email={ user.email }
                    salariu={ user.salariu}
                    logo={user.logo}
                    isGoldClient={ user.isGoldClient }
                    key={ index }
                />
            })}
        </div>
    );
}

export default UserList;