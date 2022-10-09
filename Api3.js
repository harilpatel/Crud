import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Ap.css';

const Api3 = () => {

    const [net, setNet] = useState([]);

    const t = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => { setNet(res.data) })
    }

    useEffect(() => {
        t();
    }, [])
    return (
        <div>
            <h2 className='e'> Haril Patel</h2>
            {
                net.map((e) => {
                    const { id, name, email, phone } = e;
                    return (
                        <div key={id}>
                            <h1>{name}</h1>
                            <h1>{email}</h1>
                            <h1>{phone}</h1>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Api3;