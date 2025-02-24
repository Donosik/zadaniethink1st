import {InputHTMLAttributes} from "react";
import error from "../assets/Vector.svg"
import Label from "./Label.tsx";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>
{
    label: string,
    errorMessage?:string
}

export default function TextField({label,errorMessage, ...rest}: TextFieldProps)
{
    return (
        <div className=" w-106.5 flex flex-col gap-2 font-normal">
            <Label text={label} />
            <input
                className="peer bg-white w-full border border-think-blue rounded-lg h-12 text-base p-4 focus:border-2 focus:border-think-blue-active focus:outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-think-error invalid:[&:not(:placeholder-shown):not(:focus)]:border-2 leading-4.84" {...rest}
                placeholder={" "} required={true}/>
            <label className={"hidden text-think-purple text-sm peer-[&:not(:placeholder-shown):not(:focus):invalid]:flex whitespace-pre-wrap leading-4.235 gap-2 items-start"}>
                <img src={error} className="pt-1"/>
                {errorMessage}
            </label>
        </div>
    )
}
