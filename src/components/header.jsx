/* eslint-disable react/prop-types */
function Header({ onModify }) {
  return (
    <header className="flex justify-center mb-10 flex-col p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-10">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl text-blue-400 font-semibold md:text-6xl">
          Recipe<span className="text-pink-400">Radar</span>
        </h1>
        <span className="text-4xl md:text-6xl">🧁</span>
      </div>
      <input
        placeholder="Enter the Food Name"
        onChange={(e) => onModify(e)}
        className="outline-none p-3 px-10 rounded-md shadow-md focus:shadow-lg focus:-translate-y-0.5 duration-200 placeholder:text-lg placeholder:text-center"
      />
    </header>
  );
}

export default Header;
