/*
We need to start by finding the object in our state.days array who's name matches the provided day. With this information we can now access that specific days appointment array.
Once we have access to the appointment array for the given day, we'll need to iterate through it, comparing where it's id matches the id of states.appointments and return that value.
We should also probably do a bit of validation. If there are no appointments on the given day, our days data will be empty. According to our tests, in a case like this, we should return an empty array.
*/


export function getAppointmentsForDay(state, day) {
  let appointments = [];
  let result = [];
  const days = state.days;
  for (const elem of days) {
    if(elem.name === day) {
      appointments = elem.appointments;
    }
  }
  for (const app of appointments) {
    if(app in state.appointments) {
      result.push(state.appointments[app]);
    }
  }
return result;
 };

 export function getInterviewersForDay(state, day) {
  let interviewers = [];
  let result = [];
  const days = state.days;
  for (const elem of days) {
    if(elem.name === day) {
      interviewers = elem.interviewers;
    }
  }
  for (const inter of interviewers) {
    if(inter in state.interviewers) {
      result.push(state.interviewers[inter]);
    }
  }
return result;
 };

 /*
 ensure returning object containts two keys one for student and one for interviewer.
 interviewier should be a nested object with interviewers details included inside.
 */

 export function getInterview(state, interview) {
  let result = {};
   if(interview === null) {
     return null;
   }
  const interviewer = state.interviewers;
  const id = interview.interviewer;
  if (id in interviewer ){
    result = {
      student : interview.student,
      interviewer: interviewer[id]
    }
    return result;
  }
  return result;
 }