const express = require("express");
const cors = require("cors");

const user = require("./routes/user");


// initializing express application


const app = express();


// parse requests of content-type - application/json
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));  // enable CORSc


// simple route

app.use(express.json());
app.use((req, res, next) => {
  console.log(`REQUEST RECEIVED!`);
  console.log(`  URL: ${req.path}`);
  console.log(`  PARAMS: ${JSON.stringify(req.params)}`);
  console.log(`  BODY: ${JSON.stringify(req.body, null, 2)}`);
  next();
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to MigraCode Auth application." });
});

app.use("/user", user);




// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});