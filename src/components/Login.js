import React from 'react'

export const Login = (props) => {
    const {setAuth} = props;
    const handelClick = () =>{
        setAuth(true)
    }
    return (
        <div>
            From Login Route
            <button onClick={handelClick}>Authenticate</button>
        </div>
    )
}
