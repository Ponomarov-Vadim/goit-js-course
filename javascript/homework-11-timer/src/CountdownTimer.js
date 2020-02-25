"use strict";

export default class CountdownTimer {
  constructor(params) {
    this.selector = params.selector;
    this.targetDate = params.targetDate;
    this.daysField = document.querySelector(
      `${params.selector} span[data-value="days"]`
    );

    this.hoursField = document.querySelector(
      `${params.selector} span[data-value="hours"]`
    );

    this.minsField = document.querySelector(
      `${params.selector} span[data-value="mins"]`
    );

    this.secsField = document.querySelector(
      `${params.selector} span[data-value="secs"]`
    );
  }

  calculateTime() {
    const time = this.targetDate - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.insertTime(days, hours, mins, secs);
  }

  insertTime(days, hours, mins, secs) {
    this.daysField.textContent = days;
    this.hoursField.textContent = hours;
    this.minsField.textContent = mins;
    this.secsField.textContent = secs;
  }

  decreaseTime() {
    let days = this.daysField.textContent;
    let hours = this.hoursField.textContent;
    let mins = this.minsField.textContent;
    let secs = this.secsField.textContent;
    if (secs === "0") {
      if (mins === "0") {
        if (hours === "0") {
          if (days === "0") {
            alert("Время истекло!");
            return false;
          } else {
            hours = "23";
            mins = "59";
            secs = "59";
            days--;
          }
        } else {
          mins = "59";
          secs = "59";
          hours--;
        }
      } else {
        secs = "59";
        mins--;
      }
    } else {
      secs--;
    }
    this.insertTime(days, hours, mins, secs);
    return true;
  }
}
