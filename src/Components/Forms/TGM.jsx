import React,{useState,useEffect} from 'react'
import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material';
import axios from '../axios';
import Spinner from 'react-bootstrap/Spinner';
import { toast, Toaster } from 'react-hot-toast'

export default function WBP() {

    const [SiteID, setSiteID] = useState(null)
    const [Loading, setLoading] = useState(false)

    const now = new Date()
    const notification = (e,a) =>{
        if(a){
            toast.success(e)
        }else{
            toast.error(e)
        }
        
    }
    
    const Post = () =>{
        setLoading(true)
        return axios.post("/api/TGMs",{
            SiteID,
            "Status":"In Progress",
            "ProgressTime":`${now.getDay()}/${now.getMonth() + 1}/${now.getFullYear()}`,
            "DoneTime":""
        }).then(resp => {
            notification(resp.data,true)
            setLoading(false)
            setSiteID(null)
        }).catch(err => {notification(err,false)
            setLoading(false)})
            setSiteID(null)
    }

  return (
    <div className='container'>
        {Loading && <Spinner animation="grow" />}
        <Toaster />
        <h1>New Site</h1>
        <h3>2G Modernization</h3>
        <FormControl>
           
           <Input id="my-input" aria-describedby="my-helper-text" value={SiteID} onChange={(e) => setSiteID(e.target.value)} placeholder='SiteID' />
           <FormHelperText id="my-helper-text">Please fill the SiteID.</FormHelperText>
           <button className='btn btn-success' onClick={Post}>Submit</button>
       </FormControl>
    </div>
  )
}
