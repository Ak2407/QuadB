
const Tag = (props) => {
    const {tagName} = props
  return (
    <div className="bg-secondary min-w-[50px] w-fit text-center p-[5px] rounded-3xl border-black border-[1px]">
        <h1 className="text-[10px]">{tagName}</h1>
    </div>
  )
}

export default Tag