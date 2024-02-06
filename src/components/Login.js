import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Kakao from './kakao';
import useLoginEffect from '../Handle/useLoginEffect';
import handleKakaoLogin from '../Handle/Kakaohandle';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그인 처리 기능 구현
  const handleLoginClick = () => {
    if (!username || !password) {
      alert('아이디와 비밀번호를 모두 입력하세요.');
      return;
    }

    // 로그인 요청
    axios.post('http://localhost:4000/Login', {
      username,
      password,
    })
    .then(response => {
      console.log('서버 응답:', response.data);
      sessionStorage.setItem('loggedIn', true);
      setLoggedIn(true);
      navigate('/');
    })
    .catch(error => {
      if (error.response) {
        console.error('서버 응답 오류:', error.response.status, error.response.data);
        alert('로그인 실패: ' + error.response.data.details);
      } else if (error.request) {
        console.error('서버 응답이 없음:', error.request);
      } else {
        console.error('요청 설정 중 오류:', error.message);
      }
      alert('서버와의 통신 중 오류가 발생했습니다.');
    });
  };

  // 로그아웃 관련 기능 구현
  const handleLogoutClick = () => {
    sessionStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };

  // 구글 로그인 구현

  // 카카오간편 로그인 기능 구현
  const handleKakaoLoginClick = () => {
    handleKakaoLogin(navigate, setLoggedIn);
  };

  // 로그인 기능을 유지해주는 기능 구현
  useLoginEffect(setLoggedIn);

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          {loggedIn ? (
            <button className="Btn" onClick={handleLogoutClick}>
              로그아웃
            </button>
          ) : (
            <>
              <input
                id="id"
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="Btn" onClick={handleLoginClick}>
                로그인
              </button>
              <div>
                <Link to="/Regester">회원가입 필요하십니까?</Link>
              </div>
              <Kakao onKakaoLogin={handleKakaoLoginClick} />
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

