//import React
import React from 'react';

// import useEffect
import { useEffect } from 'react';

//import useState
import { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function PostIndex({ posts, session }) {

    //method useEffect
    const [users, setUsers] = useState([]);

    // const getUsers = async () => {
    //     const response = await fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/703/tanggal/2017-02-07');
    //     setUsers(response.json());
    // }

    const getUsers = fetch('https://api.banghasan.com/sholat/format/json/jadwal/kota/703/tanggal/2017-02-07')
        .then(response => response.json())
        .then(data => setUsers(data));
    
    useEffect(() => {
        getUsers();
    }, []);


    const jadwal = users.jadwal

    console.log(jadwal);

    return (
        <Layout>
            <div style={{ marginTop: '100px' }}>

                <Link href="/posts/create" className="btn btn-success btn-md mb-3">TAMBAH POST</Link>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}

                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        {/* <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">CONTENT</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => (
                                    <tr key={index}>
                                        <td>{post.title}</td>
                                        <td>{post.content}</td>
                                        <td className="text-center">
                                            <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                            <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger">DELETE</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                            <div>
                                <h1>Ini adalah halaman data dari API</h1>
                            </div>
                        </table> */}

                        <ul>
                            {
                                jadwal.data.map((user, index) => (
                                    <li key={index}>
                                        <h1>{user.tanggal}</h1>
                                        <h1>{user.shubuh}</h1>
                                        <h1>{user.dzuhur}</h1>
                                        <h1>{user.ashar}</h1>
                                        <h1>{user.maghrib}</h1>
                                        <h1>{user.isya}</h1>
                                    </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}