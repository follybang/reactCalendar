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
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  fetchEvents: PropTypes.func.isRequired,
};

Week.defaultProps = {
  events: null,
};

export default Week;
