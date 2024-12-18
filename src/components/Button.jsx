import React from 'react';

function Button(props) {
    return (
        <div>
            <button>{props.nom}</button>
        </div>
    );
}

export default Button;