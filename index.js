
const express = require("express");
const mongoose = require("mongoose");
// const bcrypt =require("bcrypt")
const cors = require("cors");
// const jwt = require("jsonwebtoken");
const app = express();
// const ajv = require("ajv");
const port = 3005;


const routerUser = require("./Router/User-Router")
app.use(cors())
app.use(express.json());
 app.use(routerUser);

//todo=================test======================================================
 app.get("/",(req,res)=>{
    res.send("connect")
    console.log("connect")
 })


 //todo============================== mongodb====================================
const mongoURI = "mongodb://localhost:27017/auth";

mongoose
  .connect(mongoURI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

//todo=============================================================================

app.listen(port, () => console.log(`App listening on port ${port}!`));















































//!#####################################################################################################

// const express = require("express");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const app = express();
// const port = 3005;
 
// const data = [
//   {
//     name: "mohamed",
//     dat: "12344",
//     password: "1234567",
//   },
//   {
//     name: "ali",
//     dat: "14544",
//     password: "1234568",
//   },
//   {
//     name: "said",
//     dat: "109844",
//     password: "1234569",
//   },
// ];
//  app.get("/",(req,res)=>{
//     res.send("connect")
//     console.log("connect")
//  })
// const mongoURI = "mongodb://localhost:27017/auth";

// mongoose
//   .connect(mongoURI, {})
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));

// // Middleware to parse incoming JSON request bodies
// app.use(express.json());

// // JWT verification middleware
// function test(req, res, next) {
//   const { token } = req.body;
//   if (!token) {
//     return res.status(403).send("Token not provided");
//   }

//   jwt.verify(token, "i am ahmed", (err, user) => {
//     if (err) {
//       return res.status(403).send("Invalid token");
//     }
//     req.user = user; // Attach the decoded user to the request
//     next();
//   });
// }

// // Route to get data (requires JWT)
// app.get("/getData", test, (req, res) => {
//   res.send(data);
// });

// // Login route to generate JWT
// app.post("/login", (req, res) => {
//   const { userName, password } = req.body; // Extract password from req.body
//   let user = data.find((user) => user.name === userName); // Match with 'name', not 'userName'

//   if (user) {
//     if (user.password === password) {
//       const accessToken = jwt.sign(user, "i am ahmed");
//       res.send({ accessToken });
//     } else {
//       res.status(401).send("Incorrect password");
//     }
//   } else {
//     res.status(404).send("User not found");
//   }
// });
 
// app.listen(port, () => console.log(`App listening on port ${port}!`));
