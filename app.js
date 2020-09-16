const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
<<<<<<< HEAD
    res.send("Hello World!");
});
=======
    res.render('test');
})
>>>>>>> e8c2e17041ba982aa488bc834db70167e69b8a9c

app.listen(8000, function(){
    console.log("app listen on port 8000");
});