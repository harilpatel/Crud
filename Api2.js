import axios from 'axios';
import './Ap.css';
import React, { useEffect, useState } from 'react'

const Api2 = () => {

    const [set, setSet] = useState([]);

    const r = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => { setSet(response.data) })
    }
    useEffect(() => {
        r();
    }, []);
    return (
        <div>
            <form>
                <h1>API Calling</h1>
                <input type="email" placeholder='Enter Email' required /> <br />
                <input type="password" placeholder='Enter Password' required />  <br />
                <input type="submit" />
                {set.map((ret) => {
                    const { id, name, phone, email, websites } = ret;
                    return (
                        <div key={id} className="e">
                            <h1>{name}</h1>
                            <h1>{phone}</h1>
                            <h1>{email}</h1>
                            <h1>{name}</h1>
                            <h1>{websites}</h1>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}

export default Api2;