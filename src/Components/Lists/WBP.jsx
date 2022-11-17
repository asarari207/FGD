import React,{useEffect,useState} from 'react'
import axios from '../axios'
import {toast, Toaster} from 'react-hot-toast'


export default function WBP() {
    const [data, setData] = useState([])
    const [Loading, setLoading] = useState(false)

    useEffect(() =>{
        axios.get('/api/Westbps',{headers:{"Content-Type":"application/json"}}).then(resp =>{
            setData(resp.data)
        }).catch(err => alert(err))
    },[])

    const handleForm = (e) =>{
      setLoading(true)
      axios.put(`/api/Westbps/${e}`,{headers:{"Contact-Type":"application/json"}}).then(resp =>{
        toast.success(resp.data)
        setLoading(false)
        window.location.reload();
      }).catch(err => toast.error(err))
    }

    const handleDelete = (id) =>{
      setLoading(true)
      axios.delete(`/api/Westbps/${id}`,{headers:{"Contact-Type":"application/json"}}).then(resp =>{
        toast.success(resp.data)
        setLoading(false)
        window.location.reload();
      }).catch(err => toast.error(err))
    }
  return (
    <div className='container' style={{border:'1px soild #000'}}>
      {Loading && <>Loading...</>}
      <br />
      <Toaster />
        <a href='/WBP'>Add New</a>
         <table className="table table-striped">
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
