import React, { useState } from 'react'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(dayjs())
    const today = dayjs()

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="p-6">
                
                <div className="flex items-center justify-between mx-10 mb-6">
                    <h3 className="text-[#EA2F14] font-semibold">
                        Welcome, BECERA, IRIAN HARYLL CARIDO (ID Number: 20)
                    </h3>

                    <button className="px-6 py-2 bg-[#EA2F14] text-[#FCEF91] font-bold rounded-lg hover:bg-[#E6521F] transition">
                        Logout
                    </button>
                </div>

                <div className="mx-10 flex flex-col items-start">
                    <div className="bg-white shadow-lg rounded-xl p-4">
                        <DateCalendar
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            sx={{
                                bgcolor: "#FCEF91",
                                borderRadius: "12px",
                                p: 2,
                                width: "320px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",

                                "& .MuiPickersDay-root": {
                                    color: "#EA2F14",
                                    fontWeight: "bold",
                                },
                                "& .Mui-selected": {
                                    backgroundColor: "#FB9E3A !important",
                                    color: "white",
                                },
                                "& .MuiPickersCalendarHeader-label": {
                                    color: "#E6521F",
                                    fontWeight: "bold",
                                },
                                "& .MuiPickersArrowSwitcher-root button": {
                                    color: "#EA2F14",
                                },
                            }}
                        />
                    </div>

                    <p className="mt-4 text-lg font-semibold text-gray-700">
                        Current Date: {today.format("MMMM DD, YYYY")}
                    </p>
                </div>
            </div>
        </LocalizationProvider>
    )
}

export default Calendar
