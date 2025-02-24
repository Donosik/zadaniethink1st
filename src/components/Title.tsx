interface TitleProps {
    text: string
}

export default function Title({text}: TitleProps)
{
    return(
        <label className="font-normal font-medium text-think-purple leading-7.2625 text-2xl">
            {text}
        </label>
    )
}
