// 시작점

// 1. express 모듈을 가져온다.
const express = require('express');

// 2. 모듈 함수를 이용하여, app을 만든다.
const app = express()

// 3. 포트 설정
const port = 5000


// 4. mongoose 모듈 가져온다.
const mongoose = require('mongoose')

// 5. mongoose 모듈을 활용해 mongoDB 와 연결
mongoose.connect('mongodb+srv://kong3047:kssass123@boilerplate.ooe27.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err))


app.get('/',(req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))