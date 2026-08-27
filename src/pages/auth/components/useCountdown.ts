import { useEffect, useState } from "react";

/** Live mm:ss countdown for OTP / lockout timers ("00:42", "14:32").
 *  Restarts whenever `initialSeconds` changes, or whenever `resetKey` changes —
 *  the latter is how W-06 restarts an identical 00:59 window each time a new
 *  code is sent. */
export function useCountdown(
  initialSeconds: number,
  running = true,
  resetKey: unknown = null,
): number {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [prevInitial, setPrevInitial] = useState(initialSeconds);
  const [prevKey, setPrevKey] = useState(resetKey);
  if (prevInitial !== initialSeconds || prevKey !== resetKey) {
    setPrevInitial(initialSeconds);
    setPrevKey(resetKey);
    setSeconds(initialSeconds);
  }
  useEffect(() => {
    if (!running) return;
    const id = setInterval(
      () => setSeconds((current) => (current > 0 ? current - 1 : 0)),
      1000,
    );
    return () => clearInterval(id);
  }, [running]);
  return seconds;
}

export function formatSeconds(total: number): string {
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}
