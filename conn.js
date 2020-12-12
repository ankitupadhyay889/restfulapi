var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/stud-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection success"))
  .catch((e) => console.log("NO Connection"));
