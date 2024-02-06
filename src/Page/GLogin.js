import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function GLogin() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [setloginStatus]= useState('');
// ----------------------------------------------

  const GLoginPageJs = () => {
    console.log('GLoginPageJs 함수 호출됨');
  
    // 로그인 요청
    axios.post('http://localhost:5005/glogin', {
      email: email,
      password: password,
    })
    .then(response => {
      console.log('서버 응답:', response);
      if (response.data.success) {
        sessionStorage.setItem('loggedIn', true);
        navigate('/');
      } else {
        // 로그인 실패 시 처리
        console.log('로그인 실패:', response.data);
        setloginStatus('로그인 실패: '+ response.data.message);
      }
    })
    .catch(error => {
      console.error('로그인 요청 중 에러 발생:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    });
  };
  return (
    <div className="login-page">
      <div className="form">
      <form className="login-form">
          <input
            id="id"
            type="text"
            placeholder="아이디"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="Btn" onClick={(e) => { e.preventDefault(); console.log('버튼 클릭됨'); GLoginPageJs() ; }}>
            로그인
          </button>
          <div>
            <Link to="/GRegester">기업 회원가입 필요하십니까?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GLogin;