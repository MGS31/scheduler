import { useState, useEffect } from "react";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .put(`/api/appointments/${id}`, {
        interview: interview,
      })
      .then((response) => {
        const updatedDays = newDaysArr({ ...state, appointments });
        setState((prev) => ({ ...prev, appointments, days: [...updatedDays] }));
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then((response) => {
      const updatedDays = newDaysArr({ ...state, appointments });
      setState((prev) => ({ ...prev, appointments, days: [...updatedDays] }));
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  /* Helper Function to pull day specific day object for use in the spotsRemaining function */
  function getDay(state) {
    let result = {};
    const days = state.days;
    for (const elem of days) {
      if (elem.name === state.day) {
        result = elem;
      }
    }
    return result;
  }

  function spotsRemaining(state) {
    /* check each appointments object based on the appointments ID per day and verifying if interview is Null*/
    let spots = 0;
    const result = getAppointmentsForDay(state, state.day);
    for (const value of result) {
      if (value.interview === null) {
        spots += 1;
      }
    }
    return spots;
  }

  function newDaysArr(state) {
    const currentDay = getDay(state);
    const spots = spotsRemaining(state);
    currentDay.spots = spots;
    let dayIndex = state.days.findIndex((day) => day.name === state.day);
    const daysArr = [...state.days];
    daysArr[dayIndex] = currentDay;
    return daysArr;
  }

  return { state, setDay, bookInterview, cancelInterview };
}
