const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render('test');
})

app.listen(8000, function(){
    console.log("app listen on port 8000");
});