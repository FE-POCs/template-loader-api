const express = require("express");
const data = require("./data.json");
const users = require("./users.json");

const app = express();
const port = 8000;

//routes
app.get("/api/templates", (req, res) => {
  console.log(data);
  return res.json(data);
});

app.get("/api/templates/:role", (req, res, next) => {
  const role = req.params.role;
  console.log("\n\n", data[role], "\n\n");
  if (!!data[role]) {
    return res.json(data[role]);
  } else {
    next("Role not found!");
  }
});

app.get("/api/templates/:role/:page", (req, res, next) => {
  const role = req.params.role;
  const page = req.params.page;
  console.log("\n\n", data[role], "\n\n");
  if (!!data[role] && !!data[role][page]) {
    return res.json(data[role][page]);
  } else {
    next("Role not found!");
  }
});

app.get("/api/users/:id", (req, res, next) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  console.log("\n\n", user, id, users, "\n\n");
  if (!!user) {
    return res.json(user);
  } else {
    next("User not found!");
  }
});

app.listen(port, () =>
  console.log(`Server started successfully on port: ${port}`)
);
