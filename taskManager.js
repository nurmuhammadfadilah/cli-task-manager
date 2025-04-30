const fs = require("fs");
const { readTasks, writeTasks } = require("./utils");

function addTask(title) {
  const tasks = readTasks();
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  tasks.push({ id, title, status: "todo" });
  writeTasks(tasks);
  console.log("Task added.");
}

function updateTask(id, title) {
  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks[index].title = title;
    writeTasks(tasks);
    console.log("Task updated.");
  } else {
    console.log("Task not found.");
  }
}

function deleteTask(id) {
  let tasks = readTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);
  if (tasks.length !== initialLength) {
    writeTasks(tasks);
    console.log("Task deleted.");
  } else {
    console.log("Task not found.");
  }
}

function setStatus(id, status) {
  const allowed = ["todo", "inprogress", "done"];
  if (!allowed.includes(status)) {
    return console.log("Invalid status. Use: todo, inprogress, done");
  }
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.status = status;
    writeTasks(tasks);
    console.log("Status updated.");
  } else {
    console.log("Task not found.");
  }
}

function listTasks(filter) {
  const tasks = readTasks();
  let filtered = tasks;
  if (filter !== "all") {
    filtered = tasks.filter((t) => t.status === filter);
  }
  if (!filtered.length) {
    return console.log("No tasks found.");
  }
  filtered.forEach((t) =>
    console.log(`#${t.id} [${t.status.toUpperCase()}] ${t.title}`)
  );
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  setStatus,
  listTasks,
};
