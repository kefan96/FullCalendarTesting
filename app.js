const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(8000, function(){
    console.log("app listen on port 8000");
})