import News from "./displayNews.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api-creator-server.vercel.app/news-data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-2xl font-normal text-center mt-10 ">Latest News</h1>
      <div className="grid lg:grid-cols-3 grid-flow-col-1 gap-3">
        {data.map((data) => (
          <News key={data._id} data={data}></News>
        ))}
      </div>
    </>
  );
}
