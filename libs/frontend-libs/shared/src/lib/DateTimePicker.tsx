import React from 'react';
import {useDate} from "libs/frontend-libs/hooks/src/lib/useDate"

function DateTimePicker() {
    const { date, time} = useDate();
    return (
        <>
            <span className="font-bold text-xl ml-8">Aktuálny čas:  {date} {time}</span>
        </>
    )
}

export default DateTimePicker
