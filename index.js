const yargs = require("yargs");
const taskManager = require("./taskManager");

// Add Task
yargs.command({
  command: "add",
  describe: "Add a new task",
  builder: {
    title: { describe: "Task title", demandOption: true, type: "string" },
  },
  handler(argv) {
    taskManager.addTask(argv.title);
  },
});

// Update Task
yargs.command({
  command: "update",
  describe: "Update a task's title",
  builder: {
    id: { describe: "Task ID", demandOption: true, type: "number" },
    title: { describe: "New title", demandOption: true, type: "string" },
  },
  handler(argv) {
    taskManager.updateTask(argv.id, argv.title);
  },
});

// Delete Task
yargs.command({
  command: "delete",
  describe: "Delete a task",
  builder: {
    id: { describe: "Task ID", demandOption: true, type: "number" },
  },
  handler(argv) {
    taskManager.deleteTask(argv.id);
  },
});

// Change Status
yargs.command({
  command: "status",
  describe: "Change task status",
  builder: {
    id: { describe: "Task ID", demandOption: true, type: "number" },
    status: {
      describe: "New status (todo|inprogress|done)",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    taskManager.setStatus(argv.id, argv.status);
  },
});

// List Tasks
yargs.command({
  command: "list",
  describe: "List tasks",
  builder: {
    filter: {
      describe: "Filter by status (all|done|todo|inprogress)",
      type: "string",
      default: "all",
    },
  },
  handler(argv) {
    taskManager.listTasks(argv.filter);
  },
});

yargs.parse();
