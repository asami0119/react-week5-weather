import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDay()];
  const hours = props.date.getHours();
  if (hours < 0) {
    hours = `0${hours}`;
  }

  const minutes = props.date.getMinutes();
  if (minutes < 0) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
