# Interview Scheduler

Interview Scheduler is a single page REACT app allowing users to book an appointment with an interviewer from a designated list.
Each day has a number of time slots allowing the individual to add, edit and delete their interviews between M-F; 12p - 5p.
For each day there is a set amount of time slots that are dynamically updated as the slots are filled with appointments.


## Each interview allows a unique student name + selection of interviewers.

![Main Page Preview](https://github.com/MGS31/scheduler/blob/master/docs/Screenshot%202022-06-14%20at%206.31.44%20PM.png?raw=true)
![Preview of entering new appointment](https://github.com/MGS31/scheduler/blob/master/docs/Screenshot%202022-06-14%20at%206.32.19%20PM.png?raw=true)

## The saved interviews will appear in blue locking the timeslots

![Final look at saved appointment](https://github.com/MGS31/scheduler/blob/master/docs/Screenshot%202022-06-14%20at%206.32.51%20PM.png?raw=true)

## You can edit an interview to select a new interviewer or change your name.

![Edit button for interviews](https://github.com/MGS31/scheduler/blob/master/docs/Screenshot%202022-06-14%20at%206.32.33%20PM.png?raw=true)

## You can also delete an interivew freeing the time slot for another student to book a time.

![Preview of the warning for the interview to be deleted](https://github.com/MGS31/scheduler/blob/master/docs/Screenshot%202022-06-14%20at%206.33.00%20PM.png?raw=true)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependancies
- axios
- classnames
- normalize.css
- react
- react-dom
- react-hooks-testing-library
- react-scripts