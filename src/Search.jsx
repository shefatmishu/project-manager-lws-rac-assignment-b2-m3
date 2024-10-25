import SearchSvg from "./Svg-Components/SearchSvg";

export default function Search({ serach, onSearch }) {
  return (
    <>
      <button className="lg:hidden" type="submit" onClick={onSearch}>
        <SearchSvg />
      </button>
      <div className="mx-4 flex-1">
        <input
          type="text"
          placeholder="Search here"
          className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
          value={serach}
          onChange={() => onSearch(event.target.value)}
          required
        />
      </div>
    </>
  );
}
