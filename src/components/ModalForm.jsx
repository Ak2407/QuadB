import { useEffect } from "react";
import Btn from "./Btn";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ModalForm = (props) => {
    const {showName} = props
    const navigate = useNavigate();
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }

    }, []);


    const {clickFunction} = props

    const bookFunction = (e) => {

        e.preventDefault();
        navigate("/");
        clickFunction();
        toast("Booking Successful", { icon: "👏" });
        console.log("Booking Successful");
    }

  return (
    <div className="fixed left-0 right-0 bottom-0 top-0  bg-gray-200 bg-opacity-90 flex justify-center items-center">
    <div className=" flex flex-col gap-10 p-10 w-[80vw] bg-white fixed border-black border-4 overflowY-scroll">
      <h1 className="font-semibold text-[5vw] ">BOOKING FORM</h1>
      <form className=" flex flex-col w-full justify-items-center gap-5">
        <label htmlFor="movie" className="text-xl font-bold">
          Movie
        </label>
        <input
          type="text"
          name="movie"
          id="movie"
          value={showName}
          disabled
          className="border-black border-2 p-4 outline-none bg-gray-300 cursor-not-allowed"
        />
        <div className="flex gap-5  justify-evenly items-center form-col">
          <div className="flex flex-col w-full ">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-black border-2 p-4 outline-none"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-black border-2 p-4 outline-none"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border-black border-2 p-4 outline-none"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="seats">Seats</label>
            <input
              type="number"
              name="seats"
              id="seats"
              className="border-black border-2 p-4 outline-none"
            />
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              className="border-black border-2 p-4 outline-none"
            />
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              className="border-black border-2 p-4 outline-none"
            />
          </div>
        </div>
        <div className="flex gap-5">

        <Btn text="CANCEL" type="error" clickFunction={clickFunction}/>
        <Btn text="BOOK" clickFunction={bookFunction}/>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ModalForm;
