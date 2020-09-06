export function getAppointmentsForDay(state, day) {
  let appointmentList = [];

  const filteredDays = state.days.filter((item) => item.name === day);

  if (filteredDays.length) {
    for (let appointment of filteredDays[0].appointments) {
      appointmentList.push(state.appointments[appointment]);
    }
  }

  return appointmentList;
}

export function getInterview(state, interview) {
  if (interview) {
    return {
      ...interview,
      interviewer: state.interviewers[interview.interviewer],
    };
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  let interviewersList = [];
  const appointmentList = getAppointmentsForDay(state, day);
  console.log(appointmentList)

  if (appointmentList && state.appointments['1'].hasOwnProperty('interview')) {
    for (let appointment in appointmentList) {
      if (state.appointments.hasOwnProperty(appointment) && state.appointments[appointment].interview) {
          interviewersList.push(state.appointments[appointment].interview.interviewer)
      }
    }
  }

  return interviewersList;
}
