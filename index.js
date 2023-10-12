let express = require("express");
let app = express();

let fruits = {
    "data" : [
        {
        name: "mango",
        color: "yellow orange",
    },
    {
        name: "peach",
        color: "peachy color"
    },
    {
        name: "cherry",
        color: "red"
    }
    ]
}

// defining the route with html
// app.use("/", express.static("public"));

// defining the route
app.get("/", (request, response) => {
    response.send("Fruits are yummy");
})

// defining the route
app.get("/mango", (request, response) => {
    response.send("Mangoes are yummy");
})

// defining the route
app.get("/peach", (request, response) => {
    response.send("Peaches are yummy");
})

//dynamic GET
app.get("/fruits", (request, response) => {
    response.json(fruits);
})

app.get("/fruits/:fruit", (request, response) => {
   
    let user_fruit = request.params.fruit;
    let user_object;
    for(let i=0; i<fruits.data.length; i++){
        if(user_fruit==fruits.data[i].name){
            user_object=fruits.data[i];
        }
    }
    console.log(user_object);
    if(user_object){
        response.json(user_object);
    }else {
        response.json({status:"info not present"});
    }
    
})

// telling the server to run at port 3000
app.listen(3000, () => {
    console.log("app is listening at localhost:3000");
})