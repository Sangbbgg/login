const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');


const app = express();
const port = 5005;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'qhrtlfdl319A!',
  database: 'Login',
});
//-------------------------------기업로그인---------------------------------------------
app.post('/glogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 이메일을 사용하여 데이터베이스에서 사용자를 찾습니다.
    db.query(
      "SELECT * FROM glogin WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          console.error('서버에서 에러 발생:', err);
          res.status(500).send({ success: false, message: "서버 에러 발생" });
        } else {
          if (result.length > 0) {
            const isPasswordMatch = await bcrypt.compare(password, result[0].password);

            if (isPasswordMatch) {
              res.send({ success: true, message: "로그인 성공", data: result });
            } else {
              res.send({ success: false, message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            res.send({ success: false, message: "유저 정보가 없습니다." });
          }
        }
      }
    );
  } catch (error) {
    console.error('비밀번호 비교 중 오류:', error);
    res.status(500).send({ success: false, message: "서버 에러 발생" });
  }
});
//-------------------------------로그인-----------------------------------------------
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 이메일을 사용하여 데이터베이스에서 사용자를 찾습니다.
    db.query(
      "SELECT * FROM login WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          console.error('서버에서 에러 발생:', err);
          res.status(500).send({ success: false, message: "서버 에러 발생" });
        } else {
          if (result.length > 0) {
            const isPasswordMatch = await bcrypt.compare(password, result[0].password);

            if (isPasswordMatch) {
              res.send({ success: true, message: "로그인 성공", data: result });
            } else {
              res.send({ success: false, message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            res.send({ success: false, message: "유저 정보가 없습니다." });
          }
        }
      }
    );
  } catch (error) {
    console.error('비밀번호 비교 중 오류:', error);
    res.status(500).send({ success: false, message: "서버 에러 발생" });
  }
});

//-------------------------------회원가입----------------------------------------------
app.post('/regester', async (req, res) => {
  const { username, password, email, address, Detailedaddress, phoneNumber } = req.body;

  try {
    // 비밀번호를 해시화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 데이터베이스에 삽입
    const sql = 'INSERT INTO login (username, email, password, address, Detailedaddress, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [username, email, hashedPassword, address, Detailedaddress, phoneNumber], (err, result) => {
      if (err) {
        console.error('MySQL에 데이터 삽입 중 오류:', err);
        res.status(500).json({ error: '내부 서버 오류', details: err.message });
        return;
      }
      console.log('사용자가 성공적으로 등록됨');
      res.status(200).send('사용자가 성공적으로 등록됨');
    });
  } catch (error) {
    console.error('비밀번호 해시화 중 오류:', error);
    res.status(500).json({ error: '내부 서버 오류', details: error.message });
  }
});
//-------------------------------기업 회원가입------------------------------------------
app.post('/gregester', async (req, res) => {
  const 
  { username, password, email, address, businessnumber, Detailedaddress, phoneNumber} = req.body;

  try {
    // 비밀번호를 해시화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 데이터베이스에 삽입
    const sql = 
    'INSERT INTO glogin (username, email, password, address, businessnumber, Detailedaddress, phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, 
      [username, email, hashedPassword, address, businessnumber, Detailedaddress,phoneNumber], (err, result) => {
      if (err) {
        console.error('MySQL에 데이터 삽입 중 오류:', err);
        res.status(500).json({ error: '내부 서버 오류', details: err.message });
        return;
      }
      console.log('사용자가 성공적으로 등록됨');
      res.status(200).send('사용자가 성공적으로 등록됨');
    });
  } catch (error) {
    console.error('비밀번호 해시화 중 오류:', error);
    res.status(500).json({ error: '내부 서버 오류', details: error.message });
  }
});


app.listen(port, () => {
  console.log(`서버가 ${port} 포트에서 실행 중입니다.`);
});

