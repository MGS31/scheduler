import React from "react";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";
import Status from "./Status";
import useVisualMode from "components/Hooks/useVisualMode";

import "components/Appointment/styles.scss";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETE = "DELETE";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(()=> {
      transition(SHOW);
    }) 

  };

  function edit(){
    transition(EDIT);
  };

  function confirm(){
    transition(CONFIRM);
  };

  function deleteInterview(){
    transition(DELETE);
    props.cancelInterview(props.id).then(()=> {
      transition(EMPTY);
    })
  };


  return (  
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview && props.interview.student}
          interviewer={props.interview && props.interview.interviewer}
          onDelete={confirm}
          onEdit={edit}
        />
      )}
      {mode === CREATE && 
      <Form 
        student={props.student}
        interviewer={props.interviewer}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={() => back()}
        />}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETE && <Status message="Deleteing" />}
      {mode === CONFIRM && 
      <Confirm 
        message="Are You Sure You Wan't To Delete?"
        onCancel={() => back()}
        onConfirm={deleteInterview}
      />}
      {mode === EDIT && 
      <Form 
      student={props.interview.student}
      interviewers={props.interviewers}
      onSave={save}
      onCancel={() => back()}
      />}
    </article>
  );
}
