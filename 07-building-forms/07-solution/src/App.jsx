import React, { useState } from 'react';

function CreateForm() {
    const [name, setName] = useState()

    function handleChange(event) {
        setName(event.target.value);
    }
    
    function handleSubmit(event) {
        alert(`Hello, ${name}!`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label onChange={handleChange}>
                Enter your name:
                <input type="text" value={name}/>
            </label>
            <input type="submit" value="Greet Me" />
        </form>
    )
}

export default CreateForm