import React from 'react'

const Dashboard = (props) => {
    const {setAuth} = props;
    const hanelClick = () =>{
        setAuth(false)
    }
    return (
        <div>
            From Dashboard Route, This is a protected route
            <button onClick={hanelClick}>Logout</button>
        </div>
    )
}

export default Dashboard
