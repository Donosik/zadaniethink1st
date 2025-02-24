import {InputHTMLAttributes, useState} from "react";
import Label from "./Label.tsx";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement>
{
    label: string,
    min: number,
    max: number,
}

export default function Slider({label, min, max, ...rest}: SliderProps)
{
    const [value, setValue] = useState<number>(min);
    return (
        <div className="w-109.5 flex flex-col gap-4">
            <Label text={label}/>
            <div className="max-w flex flex-col gap-0">
            <div className="max-w flex justify-between text-xs font-normal text-think-purple">
                <label>{min}</label>
                <label>{max}</label>
            </div>
            <input type={"range"} className="h-1 bg-think-slider rounded-lg appearance-none cursor-pointer" {...rest} min={min} defaultValue={min} max={max}
                   onChange={(e) => setValue(Number(e.target.value))}/>
            </div>
        </div>
    )
}
