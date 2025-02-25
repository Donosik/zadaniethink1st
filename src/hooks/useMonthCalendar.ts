import {useMemo} from "react";

function getDaysInMonth(year:number,month:number): number {
    return new Date(year, month+1,0).getDate();
}

function getFirstDayOffset(year:number,month:number):number{
    const offset=new Date(year, month, 1).getDay();
    return (7 + offset - 1) % 7
}

function getMonthInArray(year:number,month:number){
    const weeks:(number|null)[][]=[]
    let currentWeek:(number|null)[] = new Array(getFirstDayOffset(year,month)).fill(null)
    for(let i=1;i<=getDaysInMonth(year,month);i++)
    {
        currentWeek.push(i)
        if(currentWeek.length===7){
            weeks.push(currentWeek)
            currentWeek=[]
        }
    }
    if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
            currentWeek.push(null);
        }
        weeks.push(currentWeek);
    }
    return weeks
}

export default function useMonthCalendar(year:number,month:number)
{
    return useMemo(()=>getMonthInArray(year,month),[year,month])
}
