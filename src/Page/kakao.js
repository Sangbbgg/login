import React from "react";

function Kakao({onKakaoLogin}) {
  const REACT_APP_KAKAO_REST_API_KEY = "b4f377029f21ee292911f8403ecfd6c1";
  const REACT_APP_KAKAO_REDIRECT_URI = "http://localhost:3000/Kakao";
  const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY || REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI || REACT_APP_KAKAO_REDIRECT_URI;

  const onKakaoSocialLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;
    onKakaoLogin();
  };

  return (
    <div>
      <div>
        <button onClick={onKakaoSocialLogin}>
          카카오톡 로그인
        </button>
      </div>
    </div>
  );
}

export default Kakao;