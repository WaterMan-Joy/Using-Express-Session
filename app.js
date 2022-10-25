const express = require('express');
const session = require('express-session');


const app = express();


app.use(session({
    secret: 'mykey',
    // resave: true,
    // saveUninitialized: true,
    // cookie: { secure: true }
}))
  
app.use('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1
    }
    else {
        req.session.count = 1
    }
    console.log(req.session.count)
    res.send(`count = ${req.session.count}`)
})
app.use('/view', (req, res) => {
    res.send('hello')
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})