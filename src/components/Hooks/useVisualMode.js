import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial])

    function transition(event, replace = false) {
      if (!replace) {
      setMode(event);
      setHistory([...history, event]);
      } else {
        setMode(event);
      }
    }
    function back() {
      if(history.length > 1) {
      const newHist = history.slice(0, history.length - 1);
      setHistory(newHist);
      setMode(newHist[newHist.length - 1])
      } else {
      setMode(history[0]);
      }
    } 


  return { mode, transition, back };
};