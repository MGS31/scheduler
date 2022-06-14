# Interview Scheduler

Interview Scheduler is a single page REACT app allowing users to book an appointment with an interviewer from a designated list.
Each day has a number of time slots allowing the individual to add, edit and delete their interviews between M-F; 12p - 5p.
For each day there is a set amount of time slots that are dynamically updated as the slots are filled with appointments.


## Each interview allows a unique student name + selection of interviewers.

![Main Page Preview]()
![Preview of entering new appointment]()

## The saved interviews will appear in blue locking the timeslots

![Final look at saved appointment]()

## You can edit an interview to select a new interviewer or change your name.

![Edit button for interviews]()
![Showcase of an interview being edited]()

## You can also delete an interivew freeing the time slot for another student to book a time.

![Preview of the interview delete button]()
![Preview of the warning for the interview to be deleted]()

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