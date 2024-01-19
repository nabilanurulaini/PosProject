/* eslint-disable react/prop-types */
function SearchMenu({ setSearchValue }) {
  return (
    //search untuk menu
    <form>
      <input
        className="w-[500px] bg-[#f5f4ed] border px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Search menu..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
}
export default SearchMenu;
