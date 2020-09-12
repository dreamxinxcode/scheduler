import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        setState((state) => ({
          ...state,
          days: [...all[0].data],
          appointments: { ...all[1].data },
          interviewers: { ...all[2].data },
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    // Decrement spots
    const days = [...state.days];
    for (let day of days) {
      if (day.appointments.includes(id)) {
        day.spots--;
      }
    }

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then(() => {
        setState({ ...state, appointments, days })
      });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    // Increment spots
    const days = [...state.days];
    for (let day of days) {
      if (day.appointments.includes(id)) {
        day.spots++;
      }
    }

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments, days }));
  };
  
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}
