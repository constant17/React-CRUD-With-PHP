import {useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getUser();
    }, {});
    function getUser(){
        axios.get(`http://localhost/api/user/${id}`).then(function(response){
            setInputs(response.data[0]);
            //console.log(response.data);
        });
    }
    
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values, [name]:value}));
    }
    const handleSumit = (event)=>{

        event.preventDefault();
        console.log(inputs);
        axios.put(`http://localhost/api/user/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate("/");
        });
        
    }
    return(
        <>
            <h1>Edit User {inputs.name}</h1>
            <form onSubmit={handleSumit}>
                <table>
                    <tbody>
                        
                        <tr>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <input defaultValue={inputs.name} type="text" onChange={handleChange}  name="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input  defaultValue={inputs.email} type="text" name="email" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Mobile:</label>
                            </td>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} defaultValue={inputs.mobile}/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="right">
                                <button type="submit" >Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                
            </form>
        </>
    )
}