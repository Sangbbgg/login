// const handleRegister = (username, email, password, confirmPassword, address, setPasswordMatch) => {
//     if (!username ) {
//       alert('정보를 모두 입력해주세요!');
//     } else if (!email.includes('@')) {
//       alert('이메일을 입력해주세요!');
//     } else if (password !== confirmPassword) {
//       alert('비밀번호가 일치하지 않습니다.');
//       setPasswordMatch(false);
//     } else if (password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       alert('비밀번호는 최소 10글자 이상이어야 하며, 특수문자를 포함해야 합니다.');
//     } else if (!address) {
//       alert('주소를 입력해주세요!');
//     } else {
//       //회원가입 완료 메세지 및 페이지 이동
//       alert('회원가입이 완료되었습니다.');
//       window.location.href = '/';
//     }
// };

// export default handleRegister;