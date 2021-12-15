'use strict';

const express = require('express');
const app = express();

require('./routes')(app);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server is running on port 3000......');
});
