import react from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Auth from './pages/auth';
import { useEffect } from 'react';
import axios from "axios";
import {useDispatch} from 'react-redux'
import {setUserData} from './redux/userSlice'
import InterviewPage from './pages/interviewPage'
import InterviewHistory from './pages/InterviewHistory';
import Pricing from './pages/Pricing';
import InterviewReport from './pages/interviewReport'

export const ServerURL = "https://interviewiq-ai-xeso.onrender.com"

function App(){
  const dispatch = useDispatch()
  useEffect(()=>{
    const getUser = async ()=>{
      try{
        const result = await axios.get(ServerURL + "/api/user/current-user", {withCredentials:true});
        dispatch(setUserData(result.data));
      }
      catch(err){
        console.log(err);
        dispatch(setUserData(null));
      }
    }
    getUser();
  },[dispatch])
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/auth" element = {<Auth/>}/>
        <Route path = "/interview" element = {<InterviewPage/>}/>
        <Route path = "/history" element = {<InterviewHistory/>}/>
        <Route path = "/pricing" element = {<Pricing/>}/>
        <Route path = "/report/:id" element = {<InterviewReport/>}/>
      </Routes>
    </div>
  )
}

export default App;
