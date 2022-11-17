import React,{useEffect,useState} from 'react'
import Charts from './Charts'
import '../index.css'
import axios from './axios'
import Container from 'react-bootstrap/Container'

export default function Dashboard() {

    const [Wbp,setWbp] = useState([])
    const [Gzp,setGzp] = useState([])
    const [Tgm,setTgm] = useState([])
    const [Acc,setAcc] = useState([])

    useEffect(() =>{
        axios.get('/api/Westbps',{headers:{"Content-Type":"application/json"}}).then(resp =>{
            setWbp(resp.data)
            console.log(resp.data);
        }).catch(err => alert(err))

        axios.get('/api/Gazaps',{headers:{"Content-Type":"application/json"}}).then(resp =>{
            setGzp(resp.data)
        }).catch(err => alert(err))

        axios.get('/api/ACs',{headers:{"Content-Type":"application/json"}}).then(resp =>{
            setAcc(resp.data)
        }).catch(err => alert(err))

        axios.get('/api/TGMs',{headers:{"Content-Type":"application/json"}}).then(resp =>{
            setTgm(resp.data)
        }).catch(err => alert(err))
    },[])

    const WPP = Wbp.filter(a => a.Status === "In progress")
    const WPD = Wbp.filter(a => a.Status === "Done")
    const WPPER = (WPD.length / Wbp.length) * 100

    const GPP = Gzp.filter(a => a.Status === "In progress")
    const GPD = Gzp.filter(a => a.Status === "Done")
    const GPPER = (GPD.length / Gzp.length) * 100

    const TPP = Tgm.filter(a => a.Status === "In progress")
    const TPD = Tgm.filter(a => a.Status === "Done")
    const TPPER = (TPD.length / Tgm.length) * 100

    const APP = Acc.filter(a => a.Status === "In progress")
    const APD = Acc.filter(a => a.Status === "Done")
    const APPER = (APD.length / Acc.length) * 100

  return (
    <Container>
        <h4 className='brand text-center'>4G Dashboard</h4>
        <hr />
        <br />
        <div className="row">
            <div className="col-md" style={{maringTop:'5%'}}>
            <div style={{width:'60%',margin:'auto'}}>
            <Charts num2={WPP.length} num1={WPD.length} />
            <br />
            <h5 className='text-center'>Westbank Pole {parseInt(WPPER)}%</h5>
            <h6>
                <span className='text-center' style={{color:'#3385ff'}}> {WPP.length} </span>
                of
                <span className='text-center' style={{color:'#00CC00'}}> {Wbp.length} </span>
            </h6>
            <Charts num2={TPP.length} num1={TPD.length} />
            <br />
            <h5 className='text-center'>Westbank Modernization  {parseInt(TPPER)}%</h5>
            <h6>
                <span style={{color:'#3385ff'}}> {TPP.length} </span>
                of
                <span style={{color:'#00CC00'}}> {Tgm.length} </span>
            </h6>
            </div>
            </div>
            <br />
            <div className="col-md" style={{maringTop:'5%'}}>
            <div style={{width:'60%',margin:'auto'}}>
            <Charts num2={GPP.length} num1={GPD.length} />
           <br />
            <h5 className='text-center'>Gaza Pole {parseInt(GPPER)}%</h5>
            <h6>
                <span style={{color:'#3385ff'}}> {GPP.length} </span>
                of
                <span style={{color:'#00CC00'}}> {Gzp.length} </span>
            </h6>
            <Charts num2={APP.length} num1={APD.length} />
            <br />
            <h5 className='text-center'>Gaza AC Connections {parseInt(APPER)}%</h5>
            <h6>
                <span style={{color:'#3385ff'}}> {APP.length} </span>
                of
                <span style={{color:'#00CC00'}}> {Acc.length} </span>
            </h6>
           </div>
            </div>
        </div>
    </Container>
  )
}
