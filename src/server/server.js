import axios from "axios";
import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../Provider";
import { indexTemplate } from "./indexTemplate";
const app = express();
let prevAccessToken = 'undefined';

app.use("/static", express.static("./dist/client"));
app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});
app.get("/auth", (req, res) => {
  console.log(req.query.code);
  console.log(process.env.CLIENT_ID);
 
  axios.post(
    "https://www.reddit.com/api/v1/access_token",
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: {username: process.env.CLIENT_ID, password: 'cGjyMeKr4NY-gePerCiipu2zsoAuFQ'},
      headers: {'Content-type': 'application/x-www-form-urlencoded'},
    }
  ).then(({data}) => {
    res.send(indexTemplate(ReactDOM.renderToString(App()), data["access_token"]));
    prevAccessToken = data["access_token"];
  })
  .catch((err) => {
    res.send(indexTemplate(ReactDOM.renderToString(App()), prevAccessToken));
    console.log(err);
  });

});

app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App()), prevAccessToken));
})

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
