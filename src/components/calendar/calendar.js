import React, { Component } from "react";
import {
  createTodo,
  getAll,
  getById,
  updateById,
  deleteById,
  deleteAll
} from "../../services/todo.service";
import PickyDateTime from "react-picky-date-time";
import "./calendar.scss";
import TodoModal from "./todo/todoModal";

class Calendar extends Component {
  state = {
    showPickyDateTime: true,
    date: "30",
    month: "01",
    year: "2000",
    hour: "03",
    minute: "10",
    second: "40",
    meridiem: "PM"
  };

  async componentDidMount() {}

  onYearPicked(res) {
    const { year } = res;
    this.setState({ year: year });
  }

  onMonthPicked(res) {
    const { month, year } = res;
    this.setState({ year: year, month: month });
  }

  onDatePicked(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
    return <TodoModal show={this.state.show}></TodoModal>;
  }

  onResetDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onResetDefaultDate(res) {
    const { date, month, year } = res;
    this.setState({ year: year, month: month, date: date });
  }

  onSecondChange(res) {
    this.setState({ second: res.value });
  }

  onMinuteChange(res) {
    this.setState({ minute: res.value });
  }

  onHourChange(res) {
    this.setState({ hour: res.value });
  }

  onMeridiemChange(res) {
    this.setState({ meridiem: res });
  }

  onResetTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onResetDefaultTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  onClearTime(res) {
    this.setState({
      second: res.clockHandSecond.value,
      minute: res.clockHandMinute.value,
      hour: res.clockHandHour.value
    });
  }

  // just toggle your outter component state to true or false to show or hide <PickyDateTime/>
  openPickyDateTime() {
    this.setState({ showPickyDateTime: true });
  }

  onClose() {
    this.setState({ showPickyDateTime: false });
  }

  render() {
    const {
      showPickyDateTime,
      date,
      month,
      year,
      hour,
      minute,
      second,
      meridiem
    } = this.state;

    return (
      <div className="calendar">
        <TodoModal></TodoModal>
        <PickyDateTime
          size="m"
          mode={0}
          locale="en-us"
          show={true}
          onClose={() => this.onClose()}
          onYearPicked={res => this.onYearPicked(res)}
          onMonthPicked={res => this.onMonthPicked(res)}
          onDatePicked={res => this.onDatePicked(res)}
          onResetDate={res => this.onResetDate(res)}
          onResetDefaultDate={res => this.onResetDefaultDate(res)}
          onSecondChange={res => this.onSecondChange(res)}
          onMinuteChange={res => this.onMinuteChange(res)}
          onHourChange={res => this.onHourChange(res)}
          onMeridiemChange={res => this.onMeridiemChange(res)}
          onResetTime={res => this.onResetTime(res)}
          onResetDefaultTime={res => this.onResetDefaultTime(res)}
          onClearTime={res => this.onClearTime(res)}
        />
      </div>
    );
  }
}

export default Calendar;
