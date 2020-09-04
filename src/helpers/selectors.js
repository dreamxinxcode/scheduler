import Appointment from "components/Appointment";

export function getAppointmentsForDay(state, day) {
    let filteredDays = [];
    let appointmentList = [];

    filteredDays = state.days.filter(item => item.name === day)

    if (filteredDays.length > 0) {
        for (let appointment of filteredDays[0].appointments) {
            appointmentList.push(state.appointments[appointment]);
        }
    }

    return appointmentList;
};