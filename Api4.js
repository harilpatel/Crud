import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const Api4 = () => {

    const [ot, setRot] = useState([]);

    const t = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => { setRot(res.data); });
    }

    useEffect(() => {
        t();
    }, []);
    return (
        <div>
            <h1>React.JS</h1>
            {ot.map((r) => {
                const { id, name, email } = r;
                return (
                    <div key={id}>
                        <h1>{id}</h1>
                        <h1>{name}</h1>
                        <h1>{email}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Api4;