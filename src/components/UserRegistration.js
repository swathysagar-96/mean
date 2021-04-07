import React,{useState} from 'react';
import { useHistory,useParams} from "react-router-dom";
import axios from 'axios';

export default function UserRegistraion() {
    const { id } = useParams();
    const [firstName,SetFirstName]=useState('');
    const [lastName,SetLastName]=useState('');
    const [address,SetAddress]=useState('');
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const [role,SetRole]=useState('');
    const [contactNumber,SetContactNumber]=useState('');
    const changeFirstNameHandler=(e) =>{
        SetFirstName(e.target.value);
    }
    const changeLastNameHandler=(e) =>{
        SetLastName(e.target.value);
    }
    const changeAddressHandler =(e)=>{
        SetAddress(e.target.value);
    }
    const changeEmailHandler =(e)=>{
        SetEmail(e.target.value);
    }
    const changePasswordHandler =(e)=>{
        SetPassword(e.target.value);
    }
    const changeRoleHandler =(e)=>{
        SetRole(e.target.value);
    }

    const changeContactNumberHandler =(e)=>{
        SetContactNumber(e.target.value);
       
    }
    function clearForm(){
        SetFirstName('');
        SetLastName('');
        SetContactNumber('');
        SetLastName('');
        SetAddress('');
        SetEmail('');
        SetRole('');
    }
    const handleSubmit =(e)=>{
        debugger;
        e.preventDefault();

        const headers =
        {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }

        const data ={
            "firstname":firstName,
            "lastname":lastName,
            "email":email,
            "password":password,
            "role":role,
            "active": true,
            "address":address
        }

        axios.put('http://localhost:8001/api/user', data,{
                headers:headers
        }).then(response => {
            debugger;
            if (response.status === 500) {
                console.log(response.data);
            } else if (response.status === 200 && response.data.success == true) {
                alert('Data saved succesfully');
                clearForm();
            } else if (response.status === 200 && response.data.status !== 200) {
                console.log("Error inserted new data because : "+response.data.message);
            } else {
                console.log("Server error with : "+response.data);
            }

        }).catch((err) => {
            console.log('Error occured')
        })
   
    }
    debugger;
    return (
        <div class="container py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <form>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputFirstname">First name</label>
                        <input type="text" class="form-control" value={firstName} onChange={changeFirstNameHandler} id="inputFirstname"  placeholder="First name"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputLastname">Last name</label>
                        <input type="text" class="form-control" id="inputLastname" value={lastName} onChange={changeLastNameHandler} placeholder="Last name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputAddressLine1">Address</label>
                        <input type="text" class="form-control" id="inputAddressLine1" value={address} onChange={changeAddressHandler}  placeholder="Address"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputAddressLine2">email</label>
                        <input type="text" class="form-control" id="inputAddressLine2" value={email} onChange={changeEmailHandler} placeholder="email"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputCity">Password</label>
                        <input type="text" class="form-control" id="inputCity" value={password} onChange={changePasswordHandler} placeholder="City"/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputState">Role</label>
                        <input type="text" class="form-control" id="inputState" value={role} onChange={changeRoleHandler}  placeholder="State"/>
                    </div>
                
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputContactNumber">Contact Number</label>
                        <input type="number" class="form-control" id="inputContactNumber" value={contactNumber} onChange={changeContactNumberHandler}  placeholder="Contact Number"/>
                    </div>
                    {/* <div class="col-sm-6">
                        <label for="inputWebsite">Website</label>
                        <input type="text" class="form-control" id="inputWebsite" placeholder="Website"/>
                    </div> */}
                </div>
                <button type="button" class="btn btn-primary px-4 float-right" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    </div>
</div>
    )
}
