import Tag from "./Tag"

const ShowCard = (props) => {
    const {showName, language, image, status, genres, clickFunction } = props
  return (
    <div className="bg-tertiary  p-10 border-4 border-black flex flex-col gap-3 cursor-pointer  shadow-unhover justify-center items-center w-[350px] h-fit" onClick={clickFunction}>
        <h1 className="text-center text-3xl font-extrabold">{showName}</h1>
        <div className="tags flex  justify-end gap-2 w-full">
            {genres.map((item,index)=>{return <Tag key={index} tagName={item}/>})}
        </div>
        <div className=" w-fit">
            
            <img src={image} className=" w-[200px] object-contain "></img>
        </div>
        <div className="info  flex  gap-8  p-2 ">
        <div className="language bg-blue-500 w-fit p-2 border-black border-2">
                <h1 className="font-bold text-sm">{language}</h1>
            </div>
            <div className={`status ${status === 'Running'? "bg-green-500" : "bg-red-500" } w-fit p-2 border-black border-2`}>
                <h1 className="font-bold text-sm">{status}</h1>
            </div>
        </div>
    </div>
  )
}

export default ShowCard