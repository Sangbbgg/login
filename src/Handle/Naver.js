// import React from 'react';
// import NaverLogin from 'react-naver-login'; // react-naver-login 라이브러리 추가

// const NaverLoginPage = ({ onNaverLogin, navigate }) => {
//   // 네이버 로그인 성공시 세션에서 로그인 정보 저장 및 화면 이동
//   const handleNaverLogin = (response) => {
//     alert('네이버 로그인 성공!');
//     console.log('네이버 사용자 정보:', response);
//     navigate('/');
//   };

//   return (
//     <div>
//       {/* 네이버 로그인 버튼 */}
//       <NaverLogin
//         clientId="wx_558SgayKqMyCuWGVu"
//         callbackUrl="https://localhost:3000"
//         render={(props) => (
//           <button onClick={props.onClick}>네이버 로그인</button>
//         )}
//         onSuccess={(response) => {
//           onNaverLogin(response);
//           handleNaverLogin(response);
//         }}
//         onFailure={() => console.error('네이버 로그인 실패')}
//       />
//     </div>
//   );
// };

// export default NaverLoginPage;




  // //네이버 간편로그인 기능구현
  // const handleNaverLogin = (response) => {
  //   //네이버 로그인 성공시 세션에서 로그인 정보 저장 및 화면이동
  //   alert('네이버 로그인 성공!');
  //   console.log('네이버 사용자 정보:', response);
  //   //화면이동 경로
  //   navigate('/');
  // };