const express = require('express');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello world this is my express-notes server');
});





app.listen(PORT, () => {
    console.log(`now listening on port ${PORT}...`);
})


  