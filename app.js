const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const userRoute = require("./routes/user/index");
const imgRoute = require("./routes/image/index");

app.set("port", process.env.PORT || port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/user", userRoute);
app.use("/im", imgRoute);

app.listen(port, () => {
  console.log("server executed");
});
