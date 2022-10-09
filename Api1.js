import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api1 = () => {

    const [post, setPost] = useState([]);

    const r = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => { setPost(res.data) })
    }
    useEffect(() => {
        r();
    }, []);
    return (
        <div>
            <h1>Haril . S . Patel</h1>
            {post.map((r) => {
                let { id, name, email, phone } = r;
                return (<div className='card' key={id}>
                    <h1>{id}</h1>
                    <h1>{email}</h1>
                    <h1>{name}</h1>
                    <h1>{phone}</h1>
                    <h1>address</h1>
                </div>
                )
            })}
        </div>
    )
}

export default Api1;