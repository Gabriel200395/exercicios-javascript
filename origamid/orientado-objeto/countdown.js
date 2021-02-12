class CountDown {
  constructor(dataFuture) {
    this.dataFuture = dataFuture;
  }

  get _dataAtual() {
    return new Date();
  }

  get _data() {
    return new Date(this.dataFuture);
  }

  get _dataDiff() {
    return this._data.getTime() - this._dataAtual.getTime();
  }

  get _days() {
    return Math.floor(this._dataDiff / (24 * 60 * 60 * 1000));
  }
  get _hours() {
    return Math.floor(this._dataDiff / (60 * 60 * 1000));
  }

  get _minutes() {
    return Math.floor(this._dataDiff / (60 * 1000));
  }
  get _seconds() {
    return Math.floor(this._dataDiff / 1000);
  }

  get _total() {
    const days = this._days;
    const hours = this._hours % 24;
    const minutes = this._minutes % 60;
    const seconds = this._seconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

const dataNatal = new CountDown("24 december 2021 23:59:59 GMT-0300");
const daysDom = document.querySelector("#dd");
const hoursDom = document.querySelector("#dd1");
const secondsDom = document.querySelector("#dd2");
const minutesDom = document.querySelector("#dd3");

console.log(daysDom);
setInterval(() => {
  const { days, hours, minutes, seconds } = dataNatal._total;
  daysDom.innerHTML = " Dias " + days;
  hoursDom.innerHTML = " Horas " + hours;
  minutesDom.innerHTML = " Minutes " + minutes;
  secondsDom.innerHTML = " Seconds " + seconds;
}, 1000);
