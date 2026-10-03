const express = require("express");
const { hostname } = require("node:os");
const router = express.Router();

let users = [
  { id: 1, name: "Cook", email: "cook@example.com" },
  { id: 2, name: "Chip", email: "chip@example.com" },
  { id: 3, name: "Oats", email: "oats@example.com" },
  { id: 4, name: "Snicker", email: "snicker@example.com" },
];

//http://localhost:3000/api

router.get("/", (req, res) => {
  console.log("works");
  res.status(200).json({
    message: "GET to API",
    users,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

//http://localhost:3000/api/users/
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  res.status(200).json({
    message: "Get by Id for /api",
    user,
    metadata: { hostname: req.hostname, method: "Get by ID" },
  });
});

//http://localhost:3000/{your context name}/89
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  //updating item in the array
  users[userIndex] = { id: parseInt(id), name, email };

  //return the updated item
  res.status(200).json({
    message: "User was updated successfully",
    user: users[userIndex],
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const userExists = users.some((user) => user.id === parseInt(id));

  // Filter out the deleted user to update the in-memory array
  users = users.filter((user) => user.id !== parseInt(id));
  res.status(200).json({
    message: `User with ID ${id} deleted successfully`,
    remainingUsers: users,
  });
});

router.post("/", (req, res) => {
  const { data } = req.body;
  res.status(200).json({
    message: "POST to /api",
    data,
    metadata: { hostname: req.hostname, method: req.method },
  });
});

module.exports = router;
