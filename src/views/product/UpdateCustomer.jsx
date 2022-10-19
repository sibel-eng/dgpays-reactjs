import { Button, Form, Input } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { networkServis } from '../../service/service';

function UpdateCustomer() {

    let {id}= useParams();
    const navigate= useNavigate();
    const [customers, setCustomers]=useState({});
    
    const [companyName, setcompanyName] = useState('');
    const [contactName, setcontactName] = useState('');
    
    const [contactTitle, setcontactTitle] = useState('');
    const [phone, setphone] = useState('');
    const gotoBack=()=>{
      navigate(-1);
  }
    useEffect(() => {
        networkServis.getById('/customers', id)
          .then(data => {
            setCustomers(data);
          })
    
      }, [])

      const onFinishValues = () => {
    
        let values={
          id: id,
          companyName: companyName,
          contactName: contactName,
          contactTitle: contactTitle,
          address: {
            phone: phone
          }
          }
          console.log(values)
        networkServis.update("/customers", values, id)
          .then(res => {
            navigate('/customers');
          })
    
      }
    return (
        <>
        <><div>
        <br />
        
        <br/>
            <Button onClick={() => gotoBack()}>GOTO BACK</Button>
       
            <br />
        <br/> </div>
            <h1>CUSTOMER</h1> 
            <div>
        
            <p>ID</p>
            <Input type='text' placeholder="ID" value={id}  />
            <br />
        <br/>
        </div>
        <div>
          <p>Company Name</p>
            <Input type='text' placeholder={customers.companyName}  onChange={(e) => setcompanyName(e.target.value)} />
        <br />
        <br />
        </div>
        <div>
          <p>Contact Name</p>
            <Input type='text' placeholder={customers.contactName}   onChange={(e) => setcontactName(e.target.value)} />
            <br />
        <br />
         </div>       
         <div>
          <p>Contact Title</p>
            <Input type='text' placeholder={customers.contactTitle}     onChange={(e) => setcontactTitle(e.target.value)} />
        <br />
        <br />
        </div>
        <div>
          <p>Phone</p>
            <Input type='text' placeholder={customers.address?.phone??''}   onChange={(e) => setphone(e.target.value)} />
        </div>
        <div>
        <br />
        <br/>
            <Button onClick={() => onFinishValues()} type='primary' htmlType='submit'>Add</Button>
        </div>
        </>
        </>
    )
}

export default UpdateCustomer
