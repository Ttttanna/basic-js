module.exports = function repeater(str, options) {
    if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
    }

    if (options.separator === undefined) {
      options.separator = "+";
    }

    if (options.addition === undefined) {
      options.addition = "";
    }

    if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
    }

    if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
    }

    let substr = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length);
    let answer = (str + substr + options.separator).repeat(options.repeatTimes).slice (0, -options.separator.length);
    return answer;
 
};
  