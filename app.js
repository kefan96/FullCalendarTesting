const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('test');
})

app.get("/fullcalendar/main.css", (req, res) => {
    res.sendFile(__dirname + '/node_modules/fullcalendar/main.css');
});

app.get("/fullcalendar/main.js", (req, res) => {
    res.sendFile(__dirname + '/node_modules/fullcalendar/main.js');
});

app.listen(process.env.PORT, function(){
    console.log("app listening on port" + process.env.PORT);
});