import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [inputs,setInputs] = useState({
        email:"",
        password:"",
        name:""
    })
    const {email,password,name} = inputs;
    const handelChange = (e) =>{
        setInputs({ ...inputs, [e.target.name]:e.target.value})
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            //make the fetch request here
        } catch (error) {
            console.error(error.message)
            
        }
    }

    return (
        <div>
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit={onSubmitForm}>
                <input type="email" name="email" placeholder="email" value={email} onChange={handelChange} className="form-control my-3"/>
                <input type="password" name="password" placeholder="password" value={password} onChange={handelChange} className="form-control my-3"/>
                <input type="name" name="name" value={name} onChange={handelChange} placeholder="name" className="form-control my-3"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register
