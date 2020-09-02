import React, { useState } from 'react';

import InterviewerList from 'components/InterviewerList';


export default function Form(props) {

  const [interviewer, setInterviewer] = useState({});

  return (
    <InterviewerList interviewers={[]} setInterviewer={setInterviewer} />
  );
}