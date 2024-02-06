import React, { useState, useEffect } from 'react';

function Shop(){
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        // 페이지가 로드될 때 로그인 상태를 확인하고 상태를 업데이트
        const storedLoggedIn = sessionStorage.getItem('loggedIn');
        if (storedLoggedIn) {
          setLoggedIn(true);
        }
      }, []);
    return(
            <div>
                {loggedIn ? (
                <>
                <h1>로그인 상태</h1>
                </>
            ) : (
                // 로그아웃 상태일 때 로그인과 회원가입 버튼 표시
                <>
                <h1>로그아웃 상태</h1>
                </>
            )}
    </div>
    )};

export default Shop;