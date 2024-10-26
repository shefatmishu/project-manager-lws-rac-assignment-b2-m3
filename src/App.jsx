import MainContent from "./MainContent";
import SideBar from "./SideBar";
import TaskContextProvider from "./context/TaskContext";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <SideBar />
        <TaskContextProvider>
          <MainContent />
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
