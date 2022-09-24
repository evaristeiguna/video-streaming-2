const express = require('express');
const fs = require('fs');
// const path = require('path')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT

if (!PORT) {
    throw new Error(
        "Please specify the port number for " +
        "the HTTP server with the environment variable PORT.");
}

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.get('/video', (req, res)=>{

    const path = "videos/SampleVideo_1280x720_1mb.mp4";

    fs.stat(path, (err, stats)=>{
        if (err) {
            console.log("An error occurred");
            res.sendStatus(500);
            return ;
        }
        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        })
    })
    fs.createReadStream(path).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
