import { useEffect, useState } from "react";
import Btn from "../components/Btn";
import ModalForm from "../components/ModalForm";
import { useNavigate } from "react-router-dom";



const Summary = () => {
    const [showDetails, setShowDetails] = useState({});
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    

    const goHome = () => {
        navigate('/')
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("show"));
        data.summary = data.summary.replace(/<[^>]+>/g, '');
        setShowDetails(data);
        console.log(data);
    }, []);

  return (
    <div className="flex bg-primary min-h-screen flex-col">
        <div className="flex  p-10 w-fit" onClick={() => goHome()}>
            <h1 className="text-[20px] font-black text-center cursor-pointer" >GO BACK</h1>
        </div>
        <h1 className="text-[8vw] font-black text-center mt-10">BOOK YOUR SHOW</h1>
      <div className=" h-full flex justify-evenly m-10 gap-10">
        <div className="thumbnail  min-w-[40vw] max-w-[700px] ">
          <img
            src={showDetails.image}
            className=" object-contain"
          ></img>
        </div>
        <div className="info bg-tertiary border-2 border-black p-5 flex flex-col justify-between shadow-hover ">
          <div className="flex flex-col gap-4">
            <h1 className="text-[50px] font-bold">{showDetails.name}</h1>
            <p className="summary text-[2vw]">
             {showDetails.summary}
            </p>
            <div className=" tags flex flex-col gap-2 bg-secondary w-fit p-2 border-black border-2 shadow-unhover text-[1.7vw]">
              <h1>{`RunTime : ${showDetails.runtime}`}</h1>
            </div>
            <div className=" tags flex flex-col gap-2 bg-secondary w-fit p-2 border-black border-2 shadow-unhover text-[1.6vw]">
              <h1>{`Rating : ${showDetails.rating}`}</h1>

            </div>
          </div>
          <div className=" flex justify-end mt-10">
            <Btn clickFunction={() => setShowModal(true)} text="BOOK YOUR SHOW" />
          </div>
        </div>
      </div>
        {showModal ? <ModalForm showName={showDetails.name} clickFunction={() => setShowModal(false)}/> : null}
    </div>
  );
};

export default Summary;
