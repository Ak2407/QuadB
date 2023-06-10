import axios from "axios";
import ShowCard from "../components/ShowCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [movie, setMovie] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      await axios
        .get("https://api.tvmaze.com/shows")
        .then((res) => {
            console.log(res.data[0])
          setMovie(res.data);
        })
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  const handleClick = (index) => {
    navigate("/summary");
    const show = {
        name: movie[index].name,
        summary : movie[index].summary,
        image : movie[index].image.original,
        runtime : movie[index].runtime,
        rating : movie[index].rating.average,        
    }
    localStorage.setItem("show",JSON.stringify(show));
  };

  return (
    <div className="bg-primary min-h-screen p-10 flex flex-col gap-10  justify-center items-center ">
      <h1 className="text-[50px] font-black text-center">AVAILABLE SHOWS</h1>
      <div className=" flex flex-wrap gap-10 justify-center">
        {movie &&
          movie.map((item, index) => {
            return (
              <ShowCard
                clickFunction={event => handleClick(index)}
                key={index}
                showName={item.name}
                language={item.language}
                image={item.image.original}
                status={item.status}
                genres={item.genres}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
