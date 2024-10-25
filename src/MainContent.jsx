import { useState } from "react";
import TaskBoard from "./TaskBoard/TaskBoard";
import TopBar from "./TopBar";

export default function MainContent() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(searchText) {
    setSearchTerm(searchText);
  }

  return (
    <>
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <TopBar search={searchTerm} onSearch={handleSearch} />
        <TaskBoard search={searchTerm} />
      </main>
    </>
  );
}
