interface LabelProps{
    text: string
}

export default function Label({text}: LabelProps)
{
    return(
        <label className="text-base text-think-purple max-h-3 leading-4.84">
            {text}
        </label>
    )
}
