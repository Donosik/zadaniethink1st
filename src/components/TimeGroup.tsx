import Label from "./Label.tsx";
import {Fragment, useId} from "react";

export default function TimeGroup()
{
    const id=useId()

    const values=["12","14","16","18","20"]
    return(
        <div className={"flex flex-col gap-2"}>
            <Label text={"Time"}/>
            <div className={"flex flex-col gap-2"}>
                {values.map((item,index)=>(
                    <div key={index}>
                    <label htmlFor={id+index} className={"peer select-none flex items-center justify-center  border rounded-lg border-think-blue h-11.5 w-19 bg-white has-[:checked]:border-think-blue-active has-[:checked]:border-2"}>
                        {item}:00
                        <input id={id+index} type={"radio"} className={" hidden"} name={"time"} value={item}/>
                    </label>
                    </div>
                ))}
            </div>
        </div>
    )
}
