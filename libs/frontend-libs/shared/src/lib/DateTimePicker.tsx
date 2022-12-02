import React from 'react';
import {useDate} from "@spst-kniznica-project/frontend-libs/hooks"

function DateTimePicker() {
    const { date, time} = useDate();
    return (
        <>
            <span className="font-bold text-xl ml-8">Aktuálny čas:  {date} {time}</span>
        </>
    )
}

export default DateTimePicker