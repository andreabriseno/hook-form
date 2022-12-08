import React, { useState } from 'react';

const Form = (props) => {
    const [fname, setFName] =useState("");
    const [lname, setLName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();}
        // const newForm ={ fname, lname, email, password};
        // setFName("");
        // setLName("");
        // setEmail("");
        // setPassword("");

    return(
        <div>
        <form onSubmit={onSubmitHandler}>
            <div>
                <label> First Name: </label>
                <input type='text' value={fname} onChange={ (e) => setFName(e.target.value)}/>
            </div>
            <div>
                <label> Last Name: </label>
                <input type='text' value= {lname} onChange={ (e) => setLName(e.target.value)}/>
            </div>
            <div>
                <label> Email: </label>
                <input type='text' value= {email} onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label> Password: </label>
                <input type='text' value={password} onChange={ (e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit"> Submit </button>
        </form>
            <div>
                <h3> Your Form Data </h3>
                <h3> First name: {fname} </h3>
                <h3> Last name: {lname} </h3>
                <h3> Email: {email} </h3>
                <h3> Password: {password} </h3>
            </div>

        </div>
    )
};

export default Form;