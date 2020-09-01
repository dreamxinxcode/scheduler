import React from 'react';

import DayListItem from './DayListItem';


const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
];
  

export default function DayList(props) {
    
    let days = props.days.map(day =>
        <DayListItem 
        id={props.id}
        name={day.name} 
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay} />
    )

    return (
        <ul>{days}</ul>
    );
}