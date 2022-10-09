import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App1 = () => {
    const [api, setapi] = useState([]); // hooks
    const [flag, setflag] = useState(true); //hooks

    const show = async () => {

        const res = await axios.get(`https://63204522e3bdd81d8ef653be.mockapi.io/test`)
        setapi(res.data)
        console.log(api);
    }
    const dele = async (id) => {

        await axios.delete(`https://63204522e3bdd81d8ef653be.mockapi.io/test/${id}`)
        setflag(!flag)
    }
    const additem = async () => {
        const value = prompt("Enter the new value")
        const titleValue = prompt("Enter the add Title value")

        const article = { "body": value, "title": titleValue }

        await axios.post(`https://63204522e3bdd81d8ef653be.mockapi.io/test`, article)
        setflag(!flag)
    }
    const udate = async (id) => {
        const data = prompt("Enter the data you wanna update")
        const title = prompt("Enter the title you wanna update")
        await axios.put(`https://63204522e3bdd81d8ef653be.mockapi.io/test/${id}`, { "body": data, "title": title })
        setflag(!flag)
    }

    useEffect(() => {
        show()
    }, [flag]);
    useEffect(() => {
        show()
        // additem()
    }, []);
    return (
        <>
            <button className='btn btn-primary mr-2' onClick={additem} >Add
            </button>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">User id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                    </tr>
                </thead>
                {api.map((val) => {
                    return (<>
                        <tbody>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.body}</td>
                                <td>{val.title}</td>

                                <td>

                                    <button className='btn btn-primary' onClick={() => udate(val.id)} >edit
                                    </button>
                                    <button className='btn btn-danger ml-2' onClick={() => dele(val.id)}>delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>
        </>
    )
}

export default App1;