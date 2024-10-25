import MainContent from "./MainContent";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
