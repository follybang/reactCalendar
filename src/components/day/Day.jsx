import React from "react";
import Hour from "../hour/Hour";
import PropTypes from "prop-types";

import "./day.scss";

const Day = ({ dataDay, dayEvents, fetchEvents }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );

        return (
          <Hour
            dataDay={dataDay}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
};

export default Day;
