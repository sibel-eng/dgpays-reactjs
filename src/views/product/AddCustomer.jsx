import { Button, Form, Input } from 'antd'
import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeAllToDoAction } from '../../redux/loginaction';
import { networkServis } from '../../service/service'

function AddCustomer() {
    
    const state = useSelector(state => state.loginReducer);
    const navigate=useNavigate();
    const [companyName, setcompanyName] = useState('');
    const [contactName, setcontactName] = useState('');
    
    const [contactTitle, setcontactTitle] = useState('');
    const [phone, setphone] = useState('');

const gotoBack=()=>{
    navigate(-1);
}

    const onFinishValues=()=>{
        let randomId = Math.floor(Math.random() * 1000);
        let values={
            id: randomId,
            companyName: companyName,
            contactName: contactName,
            contactTitle: contactTitle,
            address: {
        
              phone: phone
            }
            }
        console.log(values)
        networkServis.add("/customers",values)
        .then((res)=>{
            alert("customer successfully registered id:"+res.id);
           /* Modal.success({
                content:'Successyou new customerId: '+res.id,
            });*/
        })

    }
    return (
        <>        <div>
        <br />
        <br/>
            <Button onClick={() => gotoBack()}>GOTO BACK</Button>
        </div><br></br>
            <h1>CUSTOMER</h1>
        <div>
            <Input type='text' placeholder="Company Name" onChange={(e) => setcompanyName(e.target.value)} />
        <br />
        <br />
        </div>
        <div>
            <Input type='text' placeholder="Contact Name" onChange={(e) => setcontactName(e.target.value)} />
            <br />
        <br />
         </div>       
         <div>
            <Input type='text' placeholder="Contact Title" onChange={(e) => setcontactTitle(e.target.value)} />
        <br />
        <br />
        </div>
        <div>
            <Input type='text' placeholder="Phone" onChange={(e) => setphone(e.target.value)} />
        </div>
        <div>
        <br />
        <br/>
            <Button onClick={() => onFinishValues()} type='primary' htmlType='submit'>Add</Button>
        </div>
        </>
    )
}

export default AddCustomer

/* <Form 
                  onFinish={onFinishValues}>
        
                <Form.Item
                    label='Company Name' 
                    name='companyName'
                    rules={[{required: true, message:'Please input Company Name!'}]}
               > <Input/>
               </Form.Item>                 
                <Form.Item
                    label='Contact Name' 
                    name='contactName'
                    rules={[{required: true, message:'Please input Contact Name!'}]}
               > <Input/>
               </Form.Item>
               <Form.Item
                   label='Contact Title' 
                   name='contactTitle'
                   rules={[{required: true, message:'Please input Contact Title!'}]}
              > <Input/>
              </Form.Item>

              <Button type='primary' htmlType='submit'>Submit</Button>

            </Form>*/