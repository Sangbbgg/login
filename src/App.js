import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Main/>}></Route>
        <Route path='/Login'element={<Login/>}></Route>
        <Route path='/FindInformation'element={<FindInformation/>}></Route>
        <Route path='/Regester'element={<Regester/>}></Route>
        <Route path='/MyPage'element={<MyPage/>}></Route>
        <Route path='/CarbonFootprint'element={<CarbonFootprint/>}></Route>
        <Route path='/EnvironmentalIssues'element={<EnvironmentalIssues/>}></Route>
        <Route path='/Community'element={<Community/>}></Route>
        <Route path='/Community/Write'element={<CommunityWrite/>}></Route>
        <Route path='/Community/Read'element={<CommunityRead/>}></Route>
        <Route path='/Campaign'element={<Campaign/>}></Route>
        <Route path='/Campaign/Detail'element={<CampaignDetail/>}></Route>
        <Route path='/Shop'element={<Shop/>}></Route>
        <Route path='/Shop/Detail'element={<ShopDetail/>}></Route>
        <Route path='/Shop/Backet'element={<ShopBacket/>}></Route>
        <Route path='/Glogin'element={<GLogin/>}></Route>
        <Route path='/GRegester'element={<GRegester/>}></Route>
        
      </Routes>
    </BrowserRouter>   
  </div>
  )
}

export default App;

