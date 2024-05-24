/* eslint-disable react/prop-types */
function Message({ children }) {
  return (
    <h1 className="text-xl text-gray-500 p-3 text-center font-semibold md:text-2xl h-[70vh] flex items-center justify-center flex-col">
      {children}
      <div>🍔🍕🍣🍜</div>
    </h1>
  );
}

export default Message;
