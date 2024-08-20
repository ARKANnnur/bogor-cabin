"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext({});

const initalState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initalState);
  function resetRange() {
    setRange(initalState);
  }
  function selectRange(day) {
    if (day !== undefined) setRange(day);
  }

  return (
    <ReservationContext.Provider value={{ range, selectRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("context should use in provider");
  return context;
}

export { ReservationProvider, useReservation };
