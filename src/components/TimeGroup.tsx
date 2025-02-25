import Label from "./Label.tsx";
import {Fragment, useId} from "react";

interface TimeGroupProps {
    onChange: (e) => void;
}

export default function TimeGroup({onChange}: TimeGroupProps)
{
    const id=useId()

    function handleChange(e)
    {
        onChange(e)
    }

    const values=["12:00","14:00","16:00","18:00","20:00"]
    return(
        <div className={"flex flex-col gap-2"}>
            <Label text={"Time"}/>
            <div className={"flex flex-col gap-2"}>
                {values.map((item,index)=>(
                    <div key={index}>
                    <label htmlFor={id+index} className={"peer select-none flex items-center justify-center  border rounded-lg border-think-blue h-11.5 w-19 bg-white has-[:checked]:border-think-blue-active has-[:checked]:border-2"}>
                        {item}
                        <input id={id+index} type={"radio"} className={" hidden"} name={"time"} value={item} onChange={handleChange}/>
                    </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
