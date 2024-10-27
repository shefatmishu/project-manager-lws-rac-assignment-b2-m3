import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <ToastContainer />
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
