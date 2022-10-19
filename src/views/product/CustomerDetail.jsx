import { Button, Descriptions, Table } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { networkServis } from '../../service/service';

function CustomerDetail() {  

    const [detail, setdetail] = useState({});
    const state = useSelector(state => state.loginReducer);
    const navigate=useNavigate();
    //const dispatch = useDispatch();
    console.log('addCustomer')
    
    console.log('state',state.id)
    console.log('state',state.user)
    let { id } = useParams();
    const gotoBack=()=>{
      navigate(-1);
  }
   useEffect(()=>{
     console.log(id)
        networkServis.getById("/customers",id)
        .then(res=>{setdetail(res)})
    
   },[]) 


    return (
        <><div>
        <br />
        <br/>
            <Button onClick={() => gotoBack()}>GOTO BACK</Button>
       
            <br />
        <br/> </div>
         <Descriptions title="Customer Info">
    <Descriptions.Item label="ID">{detail.id}</Descriptions.Item>
    <Descriptions.Item label="Contact Title">{detail.contactTitle}</Descriptions.Item>
    <Descriptions.Item label="Contact Name">{detail.contactName}</Descriptions.Item>
    <Descriptions.Item label="Company Name">{detail.companyName}</Descriptions.Item>
      </Descriptions>
     <Descriptions title="Address">
     <Descriptions.Item label="Street">{detail.address?.street ?? ''}    </Descriptions.Item>
     <Descriptions.Item label="City">{detail.address?.city ?? ''}    </Descriptions.Item>
     <Descriptions.Item label="Region">{detail.address?.region ?? ''}    </Descriptions.Item>
     <Descriptions.Item label="Postal Code">{detail.address?.postalCode ?? ''}    </Descriptions.Item>
     <Descriptions.Item label="Country">{detail.address?.country ?? ''}    </Descriptions.Item>
     <Descriptions.Item label="Phone">{detail.address?.phone ?? ''}   </Descriptions.Item> 
   
  </Descriptions>
        </>
    )
}

export default CustomerDetail