import {InputHTMLAttributes, useState} from "react";
import Label from "./Label.tsx";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement>
{
    label: string,
    min: number,
    max: number,
    onChange?: (e) => void
}

export default function Slider({label, min, max,onChange, ...rest}: SliderProps)
{
    const [value, setValue] = useState<number>(min);

    function onChangeSlider(e){
        setValue(Number(e.target.value))
        onChange(e)
    }

    return (
        <div className="w-109.5 h-23 flex flex-col gap-4">
            <Label text={label}/>
            <div className="max-w flex flex-col gap-0">
                <div className="max-w flex justify-between text-xs font-normal text-think-purple">
                    <label>{min}</label>
                    <label>{max}</label>
                </div>
                <input type={"range"}
                       className="h-1 bg-think-slider rounded-lg appearance-none cursor-pointer" {...rest} min={min}
                       defaultValue={min} max={max} onChange={onChangeSlider} required/>
                <div className="relative">
                    <div className={`absolute`} style={{
                        left: `calc(${((value - min) / (max-min+2.4)) * 100}%)`,
                    }}>
                        <div className="flex border h-6.25 w-6.25 items-center justify-center  text-xs font-normal text-think-blue-active top-2">
                            {value}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
