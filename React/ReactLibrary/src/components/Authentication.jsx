import React from 'react'
import { useEffect, useState } from 'react'
import { Form, FormGroup, Button, Label, Input, FormText} from 'reactstrap'
import PropTypes from 'prop-types'
import axios from  '../config/axios'
import { Link } from 'react-router-dom';


const Authentication = ({loginUser, userEdit}) => {

  

  const[username, setUsername]=useState('')
  const[password, setPassword]= useState('')
  
    useEffect(()=>{
        setUsername(userEdit.username)
        setPassword(userEdit.password)
    }, [userEdit])

  const handleClick = () =>{
    let user = {username, password}
    axios.post("/authenticate", user)
    .then(res => {
      if(res.status === 200 ) {
        localStorage.setItem("token", res.data.token)
      } 
      console.log(res)
    }).catch(err => {
      console.log(err)
    });
    
  }

  return (
    <div>
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Label for="exampleUsername"> Usuario </Label>
          <Input id="exampleUsername" name="username" placeholder="Usuario" type="text" onChange={(e)=>{setUsername(e.target.value)}} />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="examplePassword" > Contraseña </Label>
          <Input id="examplePassword" name="password" placeholder="Contraseña" type="password" onChange={(e)=>{setPassword(e.target.value)}} />
        </FormGroup>
        {' '}
        <Button onClick={handleClick} href="/seleccionar">
          Submit
        </Button>
      </Form> 
    </div>
  )
}

Authentication.propTypes = {
  loginUser: PropTypes.func, 
  userEdit:PropTypes.object
}

export default Authentication