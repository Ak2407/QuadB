
const Btn = (props) => {
    const {text, clickFunction, type} = props
  return (
    <button onClick={clickFunction} className={`${type === 'error' ? "bg-red-500 hover:bg-red-400" : "bg-green-500 hover:bg-green-400"} w-full  border-2 p-5 border-black font-bold`}>{text}</button>
  )
}

export default Btn