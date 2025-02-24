interface TextFieldProps{
    label: string,
}

export function TextField({label}: TextFieldProps)
{
    return(
        <div className="w-106.5 flex flex-col gap-2 font-[Inter]">
            <div className="text-xs text-think-purple">
                {label}
            </div>
                <input className="bg-white w-full border border-think-blue rounded-lg h-12 text-base p-4" type="text"/>
        </div>
    )
}
