import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 0) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
