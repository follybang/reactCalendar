import React from "react";
import Day from "../day/Day";
import PropTypes from "prop-types";

import "./week.scss";

const Week = ({ weekDates, events, fetchEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom) > new Date(dayStart) &&
            new Date(event.dateTo) < new Date(dayEnd)
        );

        return (
          <Day
            fetchEvents={fetchEvents}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
};

Week.defaultProps = {
  events: null,
};

export default Week;
