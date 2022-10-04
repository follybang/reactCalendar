import React from "react";
import PropTypes from "prop-types";

import Event from "../event/Event.jsx";
import RedLine from "../redLine/RedLine.jsx";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({ dataHour, hourEvents, fetchEvents, dataDay }) => {
  const dataDayIsNow = new Date().getDate() === dataDay ? true : false;
  let redLine;
  if (new Date().getHours() === dataHour && dataDayIsNow) {
    redLine = <RedLine />;
  } else redLine = null;

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {redLine}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        debugger;
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            fetchEvents={fetchEvents}
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Hour;
