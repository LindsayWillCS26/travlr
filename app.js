const express = require('express');
const path = require('path');
const indexRouter = require('./app_server/routes/index');

const app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
