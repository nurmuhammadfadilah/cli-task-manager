const fs = require("fs");
const { readTasks, writeTasks } = require("../utils/utils");

function addTask(title) {
  const tasks = readTasks();
  const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
  const timestamp = new Date().toISOString();
  tasks.push({
    id,
    title,
    status: "todo",
    createdAt: timestamp,
    updatedAt: timestamp,
  });
  writeTasks(tasks);
  console.log("✅ Tugas berhasil ditambahkan.");
}

function updateTask(id, title) {
  const tasks = readTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks[index].title = title;
    tasks[index].updatedAt = new Date().toISOString();
    writeTasks(tasks);
    console.log("✏️ Tugas berhasil diperbarui.");
  } else {
    console.log("❌ Tugas tidak ditemukan.");
  }
}

function deleteTask(id) {
  let tasks = readTasks();
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);
  if (tasks.length !== initialLength) {
    writeTasks(tasks);
    console.log("🗑️ Tugas berhasil dihapus.");
  } else {
    console.log("❌ Tugas tidak ditemukan.");
  }
}

function setStatus(id, status) {
  const allowed = ["todo", "inprogress", "done"];
  if (!allowed.includes(status)) {
    return console.log("❌ Status tidak valid. Gunakan: todo, inprogress, done");
  }
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.status = status;
    task.updatedAt = new Date().toISOString();
    writeTasks(tasks);
    console.log("🔄 Status tugas berhasil diubah.");
  } else {
    console.log("❌ Tugas tidak ditemukan.");
  }
}

function listTasks(filter) {
  const tasks = readTasks();
  let filtered = tasks;
  if (filter !== "all") {
    filtered = tasks.filter((t) => t.status === filter);
  }
  if (!filtered.length) {
    return console.log("📭 Tidak ada tugas ditemukan.");
  }
  filtered.forEach((t) => console.log(`#${t.id} [${t.status.toUpperCase()}] ${t.title}\n  🕓 Dibuat: ${t.createdAt}\n  🔁 Diperbarui: ${t.updatedAt}`));
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  setStatus,
  listTasks,
};
