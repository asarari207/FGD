import React,{useEffect,useState} from 'react'
import axios from './axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';
import {toast, Toaster} from 'react-hot-toast'
import Cookies from 'js-cookie'
import LOGO from './logo.jpg'

export default function UserLogin() {
    const [Username, setUsername] = useState(null)
    const [Password, setPassword] = useState(null)
    const [Loading, setLoading] = useState(false)

    const Post = (e) =>{
      e.preventDefault()
      setLoading(true)
      return axios.post('/api/Login',{Username,Password},{headers:{"Content-Type":"application/json"}}).then(resp =>{
        if(resp.status === 200){
          toast.success("Welcome" + " " +Username)
          Cookies.set("-session-", resp.data)
        setLoading(false)
        window.location.reload()
        }else{
          toast.error("User or Password incurrect")
        }
      }).catch(err => {
        toast.error("Please check the password and username");
        setLoading(false)
      })
    }

  return (
    <div >
      <center>
        <img src={LOGO} alt={LOGO} />
      </center>
        <Container>
        <center>
        <h1>4G Jawwal</h1>
        </center>
        <br />
        {Loading && <Spinner animation="grow" />}
        <Toaster />
        <h3>Login</h3>
      
        <Form onSubmit={(e) => Post(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder="Enter the username" onChange={(e) => setUsername(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    <br />
    </div>
  )
}
