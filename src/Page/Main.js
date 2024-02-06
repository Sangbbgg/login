import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  // 페이지가 로드될 때 로그인 상태를 확인하고 상태를 업데이트
  useEffect(() => {
    const storedLoggedIn = sessionStorage.getItem('loggedIn');
    if (storedLoggedIn) {
      setLoggedIn(true);
    }
  }, []);


  // 로그아웃 시 세션 스토리지에서 로그인 상태 제거
  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };


  return (
    <div>
      {loggedIn ? (
        <>
          <button className='LoginBtn' onClick={handleLogout}>
            로그아웃
          </button>
          <button>
            <Link to='/Campaign'>캠페인</Link>
          </button>
          <button>
            <Link to='/Community'>커뮤니티</Link>
          </button>
          <button>
            <Link to='/MyPage'>마이페이지</Link>
          </button>
          <button>
            <Link to='/Shop'>빵끗샵</Link>
          </button>
        </>
      ) : (
        // 로그아웃 상태일 때 로그인과 회원가입 버튼 표시
        <>

          <button className='LoginBtn'>
            <Link to='/Login'>로그인</Link>
          </button>
          <button>
            <Link to='/Regester'>회원가입</Link>
          </button><br/>
          <button className='LoginBtn'>
            <Link to='/GLogin'>기업 로그인</Link>
          </button>
          <button className='LoginBtn'>
            <Link to='/GRegester'>기업 회원가입</Link>
          </button>
        </>
      )}
    </div>
  );
}

export default Main;