import React, {useState} from 'react';
import axios from 'axios';
export default function Login() {
    
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const [errorMessage,SetErrorMessage]=useState('');
    
    const changeEmailHandler =(e)=>{
        SetEmail(e.target.value);
    }
    const changePasswordHandler =(e)=>{
        SetPassword(e.target.value);
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
            "email":email,
            "password":password
        }

        axios.get('http://localhost:8001/api/login', data,{
                headers:headers
        }).then(response => {
            debugger;
            if (response.status === 500) {
                console.log(response.data);
            } else if (response.status === 200 && response.data.data==null) {
                SetErrorMessage('no user found')
            }
            else if (response.status === 200 && response.data.data!=null) {
                alert('Login succesfully');
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
    <div>
        <div>
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo"/> </div>
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image"/> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                    <div class="row mb-4 px-3">
                        <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                        <div class="facebook text-center mr-3">
                            <div class="fa fa-facebook"></div>
                        </div>
                        <div class="twitter text-center mr-3">
                            <div class="fa fa-twitter"></div>
                        </div>
                        <div class="linkedin text-center mr-3">
                            <div class="fa fa-linkedin"></div>
                        </div>
                    </div>
                    <div class="row px-3 mb-4">
                        <div class="line"></div> <small class="or text-center">Or</small>
                        <div class="line"></div>
                    </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Email Address</h6>
                        </label> <input class="mb-4" type="text" name="email" placeholder="Enter a valid email address" onChange={changeEmailHandler}/> </div>
                    <div class="row px-3"> <label class="mb-1">
                            <h6 class="mb-0 text-sm">Password</h6>
                        </label> <input type="password" name="password" placeholder="Enter password" onChange={changePasswordHandler} /> </div>
                    <div class="row px-3 mb-4">
                        <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input"/> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
                    </div>
                    <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center" onClick={handleSubmit}>Login</button> </div>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">{errorMessage} </small> </div>
                    <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small> </div>
                </div>
            </div>
        </div>
        <div class="bg-blue py-4">
            <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
            </div>
        </div>
    </div>
</div>
        </div>
        </div>
        
    )
}

