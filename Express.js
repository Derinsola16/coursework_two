const express = require("express")

const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/lessons",function(req,res){
    const data = [
        { topic: 'math', location: 'London', price: 100 },
        { topic: 'math', location: 'Liverpool', price: 80 },
        { topic: 'math', location: 'Oxford', price: 90 },
        { topic: 'math', location: 'Bristol', price: 120 },
    ]

    res.send(data)
})

app.get("/user", function(req, res){
    res.send({'email': 'user@email.com', 'password':'mypassword'})
})



app.listen(3000, function() {
    console.log("App is running on port 3000");
});

