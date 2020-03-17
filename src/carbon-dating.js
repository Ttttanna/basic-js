const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (arguments.length < 1 || typeof sampleActivity !== "string") {
    return false;
  } else {
    sampleActivity = parseFloat(sampleActivity);
    if( isNaN(sampleActivity) || sampleActivity <= 0 || sampleActivity > 15) {
      return false;
    } else {
      let sampleAge = ((Math.log(MODERN_ACTIVITY /sampleActivity)) * HALF_LIFE_PERIOD) / 0.693 ;
      return Math.ceil(sampleAge);
    }
  }  

};
