"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

type CalendarProps = {
  selected: Date | null
  onChange: (date: Date | null) => void
  className?: string
}

function Calendar({ selected, onChange, className }: CalendarProps) {
  return (
    <div className={cn("relative", className)}>
      <ReactDatePicker
        selected={selected}
        onChange={onChange}
        inline
        calendarClassName="!bg-white p-3 rounded-md shadow-md"
        dayClassName={(date) =>
          cn(
            buttonVariants({ variant: "ghost" }),
            "size-8 p-0 font-normal",
            date.toDateString() === new Date().toDateString() && "bg-accent text-accent-foreground"
          )
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className={cn(buttonVariants({ variant: "outline" }), "size-7 p-0")}
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="font-medium text-sm">
              {date.toLocaleString("default", { month: "long", year: "numeric" })}
            </span>
            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className={cn(buttonVariants({ variant: "outline" }), "size-7 p-0")}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
      />
    </div>
  )
}

export { Calendar }
