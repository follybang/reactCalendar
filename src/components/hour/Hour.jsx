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
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;

        return (
          <Event
            fetchEvents={fetchEvents}
            key={id}
            id={id}
            //calculating event height = duration of event in minutes
            height={
              (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(dateFrom).getMinutes()}
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
};

export default Hour;
