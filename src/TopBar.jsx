import Search from "./Search.jsx";
import EmailSvg from "./Svg-Components/EmailSvg";
import NotificationSvg from "./Svg-Components/NotificationSvg";

export default function TopBar({ search, onSearch }) {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4">
      <Search search={search} onSearch={onSearch} />
      <div className="flex items-center">
        <button className="relative mr-4">
          <NotificationSvg />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        <button className="relative mr-4">
          <EmailSvg />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
      </div>
    </header>
  );
}
