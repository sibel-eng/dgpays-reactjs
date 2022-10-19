import { Button, Table } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { networkServis } from '../../service/service';

function CustomerList() {

    const navigate= useNavigate();
    const [customers, setcustomers] = useState([]);
    const columns=[
        {
            title:'ID', dataIndex:'id'
        },
        {
            title:'Company Name', dataIndex:'companyName',
            sorter : ((a, b) => a.companyName.localeCompare(b.companyName))
        },
        {
            title:'Contact Name', dataIndex:'contactName'
        },
        {
            title:'Contact Title', dataIndex:'contactTitle'
        },
        {
            title:'DETAİL',
            dataIndex:'id',
            render: (id) => <Button type='primary-outline' onClick={() => detailCustomer(id)}>DETAİL</Button>
        },
        {
            title:'UPDATE',
            dataIndex:'id',
            render: (id) => <Button type='primary-outline' onClick={() => updateCustomer(id)}>UPDATE</Button>
        },
        {
            title:'DELETE',
            dataIndex:'id',
            render:(id)=><Button onClick={()=> deleteCustomer(id)} type='primary' danger>DELETE</Button>
        },
    ]
    const gotoBack=()=>{
        navigate(-1);
    }
    const getCustomers=()=>{       
        networkServis.getAll('/customers')
            .then(data => {

                setcustomers(data);
            })
    }
   
    const updateCustomer =(id)=>{
        navigate('/customers/update/'+id);
    }

    const addCustomer =()=>{
        navigate('/addCustomer');
    }

    const detailCustomer =(id)=>{
        navigate('/customers/detail/'+id);
    }

    const deleteCustomer =(id)=>{
        console.log(id)
        networkServis.delete('/customers',id)
        .then(res=>{getCustomers();})
        .catch((err)=>{alert('getAll Error:',err)})
    }
    
    useEffect(()=>{
        networkServis.getAll('/customers')
        .then(resData=>{setcustomers(resData)})
        .catch((err)=>{alert('getAll Error:',err)
          throw err})
    },[])
    
        return (
            
            <>
                <Button onClick={() => gotoBack()} size='middle' >GOTO BACK</Button>
                <br/>  <br/> 
                <Button onClick={()=> addCustomer()} size='middle' type='primary' htmlType='submit' danger>CUSTOMER ADD</Button>
            <br/>            <br/>
               <Table dataSource={customers} pagination={{pageSize:5}} columns={columns} rowKey='id'></Table>
            </>
        )
    }

export default CustomerList
