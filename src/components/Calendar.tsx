"use client";

import * as React from "react";

import { Calendar } from "@/src/components/ui/calendar";

export type CalendarProps = {};

export const CalendarComponent = (props: CalendarProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
