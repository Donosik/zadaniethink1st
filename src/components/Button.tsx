interface ButtonProps{
    isValid:boolean
}

export default function Button({isValid}: ButtonProps)
{
    return(
        <button className={`${isValid?"bg-think-blue-active":"bg-think-slider"} h-11.25 w-106.5 text-lg text-white font-medium rounded-md hover:bg-think-button-hover transition-all`} type={"submit"}>
            Send Application
        </button>
    )
}
