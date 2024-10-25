const data = [
  {
    id: crypto.randomUUID(),
    category: "todo",
    taskName: "Content Writer",
    description: "Prepare proctor for client meeting",
    date: "February 20, 2024",
    color: "",
  },

  {
    id: crypto.randomUUID(),
    category: "inprogress",
    taskName: "Develop API",
    description: "Prepare proctor for client meeting",
    date: "December 22, 2024",
    backgroundColor: "rounded-lg bg-yellow-500 p-4",
  },

  {
    id: crypto.randomUUID(),
    category: "done",
    taskName: "Content Writer",
    description: "Make Promotional Ads for Instagram fasto's",
    date: "August 22, 2024",
  },

  {
    id: crypto.randomUUID(),
    category: "revised",
    taskName: "Deploy to VPS",
    description: "Prepare proctor for client meeting",
    date: "June 14, 2024",
  },
];

function getAllTasks() {
  return data;
}

export { getAllTasks };
