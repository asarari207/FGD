import React, { useEffect, useState } from 'react'
import {toast, Toaster} from 'react-hot-toast'
import axios from '../axios'


export default function WBP() {
  const [data, setData] = useState([])
  const [Loading, setLoading] = useState(false)


  useEffect(() => {
    axios.get('/api/TGMs', { headers: { "Content-Type": "application/json" } }).then(resp => {
      setData(resp.data)
    }).catch(err => alert(err))
  }, [])


  const finished = (id) => {
    setLoading(true)
    return axios.put(`/api/TGMs/${id}`, { headers: { "Content-Type": "application/json" } }).then(resp => {
      toast.success(resp.data)
      setLoading(false)
      window.location.reload();
    }).catch(err => {

      toast.error(err)
      setLoading(false)
    })
  }

  const deleteid = (id) => {

    setLoading(true)
    return axios.delete(`/api/TGMs/${id}`, { headers: { "Content-Type": "application/json" } }).then(resp => {
      toast.success(resp.data)
      setLoading(false)
      window.location.reload();
    }).catch(err => {

      toast.error(err)
      setLoading(false)
    })

  }

  return (
    <div className='container' style={{ border: '1px soild #000' }}>
              <Toaster />
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
              <td>{(item.Status === "Done") ? <button className='btn btn-danger' onClick={() => finished(item._id)}>In Progress</button> : <button className='btn btn-success' onClick={() => finished(item._id)}>Done</button>}</td>
              <td><button className='btn btn-danger' onClick={() => deleteid(item._id)}>Delete</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
