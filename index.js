// 시작점

// 1. express 모듈을 가져온다.
const express = require('express');

// 2. 모듈 함수를 이용하여, app을 만든다.
const app = express()

// 3. 포트 설정
const port = 5000

// User.js 가져오기
const {User} = require("./model/User");

// aplication/x-www-form-urlencoded
// application/json
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 4. mongoose 모듈 가져온다.
const mongoose = require('mongoose');

// 5. mongoose 모듈을 활용해 mongoDB 와 연결
const config = require('./config/key');
mongoose.connect(config.mongoURI)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))


app.get('/',(req,res) => res.send('Hello World! 새해 복 많이 받으세요'))

app.post('/register', (req, res) => {

    // 회원 가입 할 때, 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
