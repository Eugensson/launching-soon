"use client";

import { useEffect, useState } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Clock = () => {
  const [targetTime, setTargetTime] = useState<number | null>(null);

  useEffect(() => {
    const launchDate = new Date("2026-01-01T00:00:00+02:00");
    setTargetTime(launchDate.getTime());
  }, []);

  return (
    <>
      {targetTime && (
        <FlipClockCountdown
          to={targetTime}
          className="flipClock mb-20"
          style={{
            fontFamily: "Orbitron",
            fontWeight: 700,
          }}
        />
      )}
    </>
  );
};

export default Clock;
