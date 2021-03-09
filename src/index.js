const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const { default: validator } = require("validator");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get requests are diabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon!");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

const main = async () => {
  // const task = await Task.findById("6047893b16edbf1946c4d327");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await User.findById("6047877d16edbf1946c4d324");
  await user.populate("tasks").execPopulate();
  console.log(user.tasks);
};

main();
