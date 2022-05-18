import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full" : props.spots === 0,
  });


  const formatSpots = function(num) {
    let result = '';
    if(num === 0) {
      result += "no spots remaining"
      return result;
    }
    if(num === 1) {
      result += "1 spot remaining"
      return result;
    }
    if(num > 1) {
      result = num + ` spots remaining` 
      return result;
    }
  }

  return(
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className={"text--regular"}>{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
