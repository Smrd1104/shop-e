import React, { useEffect, useState } from 'react'

const Table = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Password</th>
                </thead>
                <tbody>
                    {data.map((d, i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.email}</td>
                        <td>{d.password}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table