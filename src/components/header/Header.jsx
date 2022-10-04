import React from "react";

import { getDisplayedMonth } from "../../utils/dateUtils";
import "./header.scss";

const Header = ({
  weekStartDate,
  onNextWeek,
  onPreviousWeek,
  onToday,
  onModalChange,
}) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={onModalChange}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={onToday}>
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={onPreviousWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={onNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {getDisplayedMonth(weekStartDate)}
        </span>
      </div>
    </header>
  );
};

export default Header;
