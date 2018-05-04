const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;



console.log(publicPath);
var app = express();
app.use(express.static(publicPath));

app.listen(port, host, function() {
    console.log("Server started......." + "at Port: " + port + " on host: " + host);
});
// app.listen(3000, () => {
//     console.log(`Server is up on port ${port}`);
// });