import ReceipeListContianer from "./components/ReceipeListContianer";
import Header from "./components/header";
import SpinnerFullPage from "./components/SpinnerFullPage";
import Message from "./components/Message";
import { useState } from "react";
const APP_ID = "db0f1a3c";
const APP_KEY = "4f2b495f8c3d7a22f21dec09518a51a4";
function App() {
  const [data, setData] = useState([]);
  const [timeOutId, setTimeOutId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(query) {
    try {
      setIsLoading(true);
      const data = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const res = await data.json();
      setData(res.hits);
      setIsLoading(false);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    clearTimeout(timeOutId);
    const timerId = setTimeout(() => fetchData(e.target.value), 500);
    setTimeOutId(timerId);
  }
  return (
    <div className="bg-slate-100 py-4 min-h-screen w-full">
      <Header onModify={handleChange} />
      {isLoading ? (
        <SpinnerFullPage />
      ) : data.length === 0 && !isLoading ? (
        <Message>
          🍽️ Your one-stop shop to get all the ingredients for your favorite
          food items!
        </Message>
      ) : (
        <ReceipeListContianer recipes={data} />
      )}
    </div>
  );
}

export default App;
