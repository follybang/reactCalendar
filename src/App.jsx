import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import moment from "moment/moment.js";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";
import { getEvents, createEvent } from "./gateway/gateway.js";
import "./common.scss";
import { getDateTime } from "../src/utils/dateUtils.js";

class App extends Component {
  state = {
    weekStartDate: new Date(),
    isModalOpen: false,
    events: [],
  };

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    getEvents().then((data) => {
      this.setState({
        events: data,
      });
    });
  };

  onToday = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  onNextWeek = () => {
    this.setState({
      weekStartDate: new Date(moment(this.state.weekStartDate).add(7, "days")),
    });
  };

  onPreviousWeek = () => {
    this.setState({
      weekStartDate: new Date(
        moment(this.state.weekStartDate).subtract(7, "days")
      ),
    });
  };

  onModalChange = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  onEventCreate = (event, data) => {
    const { title, date, startTime, endTime, description } = data;
    event.preventDefault();
    createEvent({
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    }).then(() => {
      this.fetchEvents();
    });
    this.onModalChange();
    console.log(this.state.events);
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekStartDate={weekStartDate}
          onToday={this.onToday}
          onNextWeek={this.onNextWeek}
          onPreviousWeek={this.onPreviousWeek}
          onModalChange={this.onModalChange}
        />
        <Calendar
          weekDates={weekDates}
          events={this.state.events}
          fetchEvents={this.fetchEvents}
        ></Calendar>

        {this.state.isModalOpen ? (
          <Modal
            onModalChange={this.onModalChange}
            onEventCreate={this.onEventCreate}
          />
        ) : null}
      </>
    );
  }
}

export default App;
