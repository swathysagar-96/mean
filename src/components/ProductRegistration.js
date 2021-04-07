import React,{useState} from 'react';
import { useHistory,useParams} from "react-router-dom";
import axios from 'axios';

export default function ProductRegistraion() {
    const { id } = useParams();
    const [productName,SetProductName]=useState('');
    const [brandName,SetBrandName]=useState('');
    const [price,SetPrice]=useState('');
    const [role,SetRole]=useState('');
    const changeProductNameHandler=(e) =>{
        SetProductName(e.target.value);
    }
    const changeBrandNameHandler=(e) =>{
        SetBrandName(e.target.value);
    }
    const changePriceHandler =(e)=>{
        SetPrice(e.target.value);
    }
    const changeRoleHandler =(e)=>{
        SetRole(e.target.value);
    }
    function clearForm(){
        SetProductName('');
        SetBrandName('');
        SetPrice('');
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
            "productname":productName,
            "brandname":brandName,
            "price":price,
            "role":role,
            "active": true
        }

        axios.put('http://localhost:8001/api/Product', data,{
                headers:headers
        }).then(response => {
            debugger;
            console.log(response)
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
                        <label for="inputProducttname">Product name</label>
                        <input type="text" class="form-control" value={productName} onChange={changeProductNameHandler} id="inputProductname"  placeholder="Product name"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="inputBrandname">Brand name</label>
                        <input type="text" class="form-control" id="inputBrandname" value={brandName} onChange={changeBrandNameHandler} placeholder="Brand name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputPrice">Price</label>
                        <input type="text" class="form-control" id="inputPrice" value={price} onChange={changePriceHandler}  placeholder="Price"/>
                    </div>
                    <div class="col-sm-3">
                        <label for="inputRole">Role</label>
                        <input type="text" class="form-control" id="inputRole" value={role} onChange={changeRoleHandler}  placeholder="Role"/>
                    </div>
                
                </div>
                {/* <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="inputContactNumber">Contact Number</label>
                        <input type="number" class="form-control" id="inputContactNumber" value={contactNumber} onChange={changeContactNumberHandler}  placeholder="Contact Number"/>
                    </div> */}
                    {/* <div class="col-sm-6">
                        <label for="inputWebsite">Website</label>
                        <input type="text" class="form-control" id="inputWebsite" placeholder="Website"/>
                    </div> */}
                <button type="button" class="btn btn-primary px-4 float-right" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    </div>
</div>
    )
}
