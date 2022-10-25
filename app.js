const express = require('express');
const session = require('express-session');


const app = express();


app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
}))
  
app.get('/view', (req, res) => {
    if (req.session.count) {
        req.session.count += 1
    }
    else {
        req.session.count = 1
    }
    console.log(req.session.count)
    res.send(`count = ${req.session.count}`)
})
app.get('/register', (req, res) => {
    const { username = 'Joy' } = req.query;
    req.session.username = username;
    console.log(req.session.username);
    res.redirect('/view');
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})