import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
export default function ListUser(){

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    }, []);
    function getUsers(){
        axios.get('http://localhost/api/users').then(function(response){
            setUsers(response.data);
            //console.log(response.data);
        });
    }

    const deleteUser = (id)=>{
        axios.delete(`http://localhost/api/user/${id}/delete`).then((response)=>{
            console.log(response.data);
            getUsers();
        });
    }
    
    return(
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile</td>
                    </tr>
                    
                </thead>
                <tbody>
                    {users.map((user, key)=>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight:"10px"}}> Edit </Link>
                                <button onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
    )
}