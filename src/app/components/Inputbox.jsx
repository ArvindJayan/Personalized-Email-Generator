function Inputbox(props) {
    return (
        <textarea
            className='input-box border-2 text-sm font-normal outline-gray-300 rounded-lg mt-2 w-full placeholder:font-normal p-2 placeholder:text-sm hover:border-gray-300 focus:outline-gray-400'
            placeholder={`Describe the ${props.title}...`}
            rows="6"
            name={props.title} >
        </textarea >
    )
}

export default Inputbox
