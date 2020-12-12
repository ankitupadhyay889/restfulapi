const express = require("express");

require("./conn");
const Student = require("./stud");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("/stud p jao");
});

// app.post("/students", (req, res) => {
//     console.log(req.body)
//     const user = new Student(req.body)
//     user.save()
//     res.send(user)
// });


// y mai create kr rha hu jo jake db m save hoga jb postman se send karenge
app.post("/students", async(req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.send(createUser);

  } catch (error) {
    res.send(error)
  }
});


// ye sara hume postman m dikhayega ki db m kitna data(document) save hua hai and hum isse web page p dekh skte hai just like api
app.get("/students", async(req, res) => {
  try {
    const studData = await Student.find();
    res.send(studData);
  } catch (error) {
    res.send(error)
  }
});


// ye hum id se jaan skte hai ki kaun sa document(data) hai
app.get("/students/:id", async(req, res) => {
  try {
    const _id = req.params.id;
    const studentData = await Student.findById(_id);
    res.send(studentData);
  } catch (error) {
    res.send(error)
  }
});
// jha :name hai wha p :id kr do and req.params.id krdo then hum id se call kr skte hai




// ye update k liye hai postman m check krke update kr lo id se
app.patch("/students/:id", async(req, res) => {
  try {
    const _id = req.params.id;
    const updateData = await Student.findByIdAndUpdate(_id , req.body , {
      new: true
    });
    res.send(updateData);
  } catch (error) {
    res.send(error)
  }
});



// same update hum delete kr skte hai
app.delete("/students/:id", async(req, res) => {
  try {
    const deleteData = await Student.findByIdAndDelete(re.params.id);
    res.send(deleteData);
  } catch (error) {
    res.send(error)
  }
});



app.listen(port, () => {
  console.log(`Server is run in ${port}`);
});