const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan')

const app = express();
app.set('port', process.env.PORT || 8080);



const mainRouter = require("./routes/main/main")
const indexRouter = require("./routes/index");

app.set('view engine', 'html');

nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use(morgan('combined'));
app.use('/css',express.static('./css'));

app.use('/', mainRouter);
app.use('/index', indexRouter);


app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });



app.listen(app.get('port'), () => {
    console.log(app.get('port'),"======================");
})