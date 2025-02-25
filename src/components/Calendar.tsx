import Label from "./Label.tsx";
import {InputHTMLAttributes, useEffect, useId, useState} from "react";
import useMonthCalendar from "../hooks/useMonthCalendar.ts";
import leftArrow from "./../assets/LeftArrow.svg"
import rightArrow from "./../assets/RightArrow.svg"
import TimeGroup from "./TimeGroup.tsx";

interface CalendarProps extends InputHTMLAttributes<HTMLInputElement>
{
    labelDate: string,
    labelTime: string,
    onChange: (e) => void
}

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

export default function Calendar({labelDate, labelTime, onChange, ...rest}: CalendarProps)
{
    const id = useId()

    const [choosenDay, setChoosenDay] = useState<number>(0)
    const [month, setMonth] = useState<number>(new Date().getMonth())
    const [year, setYear] = useState<number>(new Date().getFullYear())
    const weeks: (number | null)[][] = useMonthCalendar(year, month)

    function changeDay(day: number | null)
    {
        if (day !== null)
        {
            setChoosenDay(day)
            const e={
                target:{
                    value:day+" "+(month+1)+" "+year,
                    name:"date"
                }
            }
            onChange(e)
        } else
        {
            setChoosenDay(0)
            const e={
                target:{
                    value: "",
                    name:"date"
                }
            }
            onChange(e)
            const e2={
                target:{
                    value: "",
                    name:"time"
                }
            }
            onChange(e2)
        }
    }

    function changeMonth(increase: boolean)
    {
        if (increase)
        {
            if (month === 11)
            {
                const e={
                    target:{
                        value:choosenDay+" "+1+" "+(year+1),
                        name:"date"
                    }
                }
                onChange(e)
                setYear(year + 1)
                setMonth(0)
            } else
            {
                const e={
                    target:{
                        value:choosenDay+" "+(month+2)+" "+year,
                        name:"date"
                    }
                }
                onChange(e)
                setMonth(month + 1)
            }
        } else
        {
            if (month === 0)
            {
                const e={
                    target:{
                        value:choosenDay+" "+(12)+" "+(year-1),
                        name:"date"
                    }
                }
                onChange(e)
                setYear(year - 1)
                setMonth(11)
            } else
            {
                const e={
                    target:{
                        value:choosenDay+" "+month+" "+year,
                        name:"date"
                    }
                }
                onChange(e)
                setMonth(month - 1)
            }
        }
    }

    return (
        <div className={"flex gap-5"}>
            <div className="flex flex-col gap-2">
                <Label text={labelDate}/>
                <label htmlFor={id}
                       className={"w-81.5 h-73 border border-think-blue rounded-lg bg-white flex flex-col items-center gap-1.5 p-2"}>
                    <div className={"h-8 flex justify-between items-center gap-4 w-full px-5 select-none"}>
                        <img className={"p-2"} src={leftArrow} onClick={() => changeMonth(false)}/>
                        <span>
                            {monthNames[month]} {year}
                        </span>
                        <img className={"p-2"} src={rightArrow} onClick={() => changeMonth(true)}/>
                    </div>
                    <div className={"flex gap-2.5 text-sm font-medium items-center select-none"}>
                        <label className={"w-7 h-7 flex justify-center items-center"}>Mo</label>
                        <label className={"w-7 h-7 flex justify-center items-center"}>Tu</label>
                        <label className={"w-7 h-7 flex justify-center items-center"}>We</label>
                        <label className={"w-7 h-7 flex justify-center items-center"}>Th</label>
                        <label className={"w-7 h-7 flex justify-center items-center"}>Fr</label>
                        <label className={"w-7 h-7 flex justify-center items-center"}>Sa</label>
                        <label className={"w-7 h-7 flex justify-center items-center"}>Su</label>
                    </div>
                    {weeks.map((week, key) => (
                        <div key={key} className={"flex gap-2.5 text-sm font-medium"}>
                            {
                                week.map((day, key2) =>
                                    (<>
                                            <button type={"button"} onClick={() => changeDay(day)}
                                                    key={key2}
                                                    className={`text-sm font-medium w-7 h-7 flex justify-center items-center ${day === choosenDay ? "bg-think-blue-active p-2 rounded-full text-white" : ""}`}>
                                                {day}
                                            </button>
                                        </>
                                    ))}
                        </div>
                    ))
                    }
                </label>
                <input className={"hidden"} id={id} {...rest} type={"date"}/>
            </div>
            {(choosenDay !== 0) &&
                <TimeGroup onChange={onChange}/>
            }
        </div>
    )
}
