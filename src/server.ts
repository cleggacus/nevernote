import https from "https";
import http from "http";
import fs from "fs";
import express from "express";
import app from "./app";

const development = process.env.NODE_ENV !== 'production';

if(development){
  const port = process.env.PORT || 3001;
  const server = http.createServer(app);
  
  server.listen(port, () => {
    console.log(`listening at port ${port}`)
  });
}else{
  let http = express();

  https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(process.env.PORT || 443, () => {
    console.log("running https");
  });
  
  http.get('*', (req, res) => {  
      res.redirect('https://' + req.headers.host + req.url);
  });
  
  http.listen(process.env.PORT || 80, () => {
    console.log("running http");
  });
}