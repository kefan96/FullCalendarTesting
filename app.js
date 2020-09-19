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

app.get("/jq-paginator/dist/jq-paginator.min.js", (req, res) => {
    res.sendFile(__dirname + '/node_modules/jq-paginator/dist/jq-paginator.min.js');
});

app.get("/jquery/dist/jquery.min.js", (req, res) => {
    res.sendFile(__dirname + '/node_modules/jquery/dist/jquery.min.js');
});




app.listen(8000, function(){
    console.log("app listen on port 8000");
});