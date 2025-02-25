import Label from "./Label.tsx";
import {InputHTMLAttributes} from "react";

interface UploadProps extends InputHTMLAttributes<HTMLInputElement>
{
    label: string
}

export default function Upload({label, ...rest}: UploadProps)
{
    return (
        <div className="w-106.5 flex flex-col gap-2 font-normal">
            <Label text={label}/>
            <label htmlFor={"input"}
                   className="bg-white border border-think-blue rounded-lg flex items-center justify-center h-24 cursor-pointer">
                <span>
                    <span className="underline text-think-blue-active">Upload a file</span>
                    <span> or drag and drop here</span>
                </span>
            </label>
            <input id={"input"} className="hidden" type={"file"} {...rest} />
        </div>
    )
}
