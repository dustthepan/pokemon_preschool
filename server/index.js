const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../dist')))

app.listen(port, console.log(`listening on port ${port}`));
