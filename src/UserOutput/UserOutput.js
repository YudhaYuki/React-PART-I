import React from 'react';

import './UserOutput.css';


const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> Username: {props.userName}</p>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, ratione! </p>
        </div>
    )
}

export default UserOutput;