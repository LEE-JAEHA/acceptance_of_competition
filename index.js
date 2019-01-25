const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const MYSQLStore = require('express-mysql-session')(session);
const cors = require('cors');
const config = require('./config/config');

// DATABASE
const db = require('./database/database');
const PORT = 3000; // 포트 번호 : 나중에 실제 서버에 포팅할때 80번 포트로 바꾸면 편함 (재하한테 설명)


// TEST DATABASE
db.authenticate()
    .then(() => console.log('Database connected!'))
    .catch((err) => console.log('Error: ' + err));


// SET Application Settings
app.set('view engine', 'pug');
app.set('views', './views');


// MIDDLEWARES
app.use(cors());
app.use(session({
    secret: "askdfhwehifubsd23fsdkj23",
    resave: true,
    saveUninitialized: false,
    store: new MYSQLStore({
        host: config.databaseHost,
        port: 3306,
        user: config.databaseUser,
        password: config.databasePassword,
        database: config.database
    })
}));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(bodyParser.json({ extended: true, limit: '30mb' }));
app.use(methodOverride((req, res) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));


// Routes
const info = require('./routes/info');

app.use(info);



// Maintain session as variable
app.use((req,res,next) => {
    res.locals.session = req.session;
    next();
});


// Redirect / => /info
app.get("/", (req, res) => {
    res.redirect("/info");
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});