import {Button, Form, Input } from 'antd'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { activeToDoAction } from '../../redux/loginaction';

function Login() {
    const [user, setuser] = useState('');
    const [password, setpassword] = useState('');

    //let dispatch = useDispatch();
  const navigate=useNavigate();

    const add = () => {

        console.log('user',user); 
        console.log('password', password);
        if(user==='dgpays@mail.com' && password =='123'){

        let randomId = Math.floor(Math.random() * 1000);
        let newTodo = {
            id: randomId,
            name: user,
            completed :'true'
        }
        console.log('newTodo',newTodo); 
        //dispatch(activeToDoAction(newTodo))

        navigate('/customers');
    
    }
    }


    return (<>
        <h1>SIGN IN</h1>
        <div>
            <Input type='text' placeholder="User" onChange={(e) => setuser(e.target.value)} />
        <br />
        <br />
        </div>
        <div>
            <Input type='password' placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
        </div>
        <div>
        <br />
        <br/>
            <Button onClick={() => add()} type='primary' htmlType='submit'>Add</Button>
        </div>
    </>
    )

}

export default Login
