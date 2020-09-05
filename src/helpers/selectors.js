export function getAppointmentsForDay(state, day) {
    let appointmentList = [];

    const filteredDays = state.days.filter(item => item.name === day)

    if (filteredDays.length) {
        for (let appointment of filteredDays[0].appointments) {
            appointmentList.push(state.appointments[appointment]);
        }
    }

    return appointmentList;
};