import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@components/Login';
//--------------Mysql--------------------------------------------
// import axios from 'axios';
//--------------페이지라우터----------------------------------------
import Login from './Page/Login';
import Main from './Page/Main';
import FindInformation from './Page/FindInformation';
import Regester from './Page/Regester';
import MyPage from './Page/MyPage';
import CarbonFootprint from './Page/CarbonFootprint';
import EnvironmentalIssues from './Page/EnvironmentalIssues';
import Community from './Page/Community'
import CommunityWrite from './Page/CommunityWrite';
import CommunityRead from './Page/CommunityRead';
import Campaign from './Page/Campaign';
import CampaignDetail from './Page/CampaignDetail';
import Shop from './Page/Shop';
import ShopBacket from './Page/ShopBasket';
import ShopDetail from './Page/ShopDetail';
import GLogin from './Page/GLogin';
import GRegester from './Page/GRegester'

//axios쓰는 목적은 서버에 요청할떄 비동기적으로 요청하려고
//함수형 컴포넌트



//-----------------------페이지 라우터---------------------------
function App() {
    
return (
  <div className='App'>
    <Login/>  
  </div>
  )
}

export default App;

