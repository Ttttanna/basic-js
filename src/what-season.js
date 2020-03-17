module.exports = function getSeason(date) {

  if (arguments.length < 1) {
    return 'Unable to determine the time of year!';
  } else {
    if (Object.prototype.toString.call(date) === '[object Date]') {
      if (date.getMonth() > 1 && date.getMonth() < 5) {
        return "spring";
      } else if (date.getMonth() > 4 && date.getMonth() < 8) {
        return "summer";
      } else if (date.getMonth() > 7 && date.getMonth() < 11) {
        return "fall";
      } else return "winter";
    } else {
      throw new Error();
    }
  }
};
