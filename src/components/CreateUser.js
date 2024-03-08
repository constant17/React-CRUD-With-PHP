import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateUser(){
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values, [name]:value}));
    }
    const handleSumit = (event)=>{

        event.preventDefault();

        axios.post('http://localhost/api/user/save', inputs).then(function(response){
        console.log(response.data);
        navigate("/");
    });
        console.log(inputs);
    }
    return(
        <>
            <h1>Create User</h1>
            <form onSubmit={handleSumit}>
                <table>
                    <tbody>
                        
                        <tr>
                            <td>
                                <label>Name:</label>
                            </td>
                            <td>
                                <input type="text" onChange={handleChange} name="name"  />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Email:</label>
                            </td>
                            <td>
                                <input type="text" name="email" onChange={handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Mobile:</label>
                            </td>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange}/>
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