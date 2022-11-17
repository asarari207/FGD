import React,{useEffect,useState} from 'react'
import axios from '../axios'
import {toast, Toaster} from 'react-hot-toast'


export default function WBP() {
    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(false)

    useEffect(() =>{
        axios.get('/api/Gazaps',{headers:{"Content-Type":"application/json"}}).then(resp =>{
            setData(resp.data)
        }).catch(err => alert(err))
    },[])

    const handleForm = (e) =>{
      setLoading(true)
      axios.put(`/api/Gazaps/${e}`,{headers:{"Contact-Type":"application/json"}}).then(resp =>{
        toast.success(resp.data)
        setLoading(false)
        window.location.reload();
      }).catch(err => toast.error(err))
    }

    const handleDelete = (e) =>{
      setLoading(true)
      axios.delete(`/api/Gazaps/${e}`,{headers:{"Contact-Type":"application/json"}}).then(resp =>{
        toast.success(resp.data)
        setLoading(false)
        window.location.reload();
      }).catch(err => toast.error(err))
    }

  return (
    <div className='container' style={{border:'1px soild #000'}}>
        <a href='/GZP/'>Add New</a>
       
        <Toaster />
         <table className="table table-striped">
         {Loading ? <>Loading....</> : <></>}
        <thead>
          <tr>
            <th>SiteID</th>
            <th>Status</th>
            <th>Change</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                <td>{item.SiteID}</td>
                <td>{item.Status}</td>
                <td>{(item.Status === "Done") ? <button className='btn btn-danger' onClick={(e) => handleForm(item._id)}>In Progress</button> : <button className='btn btn-success' onClick={(e) => handleForm(item._id)}>Done</button> }</td>
                <td><button className='btn btn-danger' onClick={() => handleDelete(item._id)}>Delete</button></td>
                </tr>
            ))}
      
        </tbody>
      </table>
    </div>
  )
}
