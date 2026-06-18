/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {

    let hourAngle = (hour * 30) + (minutes * 0.5);
    let minuteAngle = minutes * 6;
    console.log(hourAngle, minuteAngle)
    let diff = Math.abs(hourAngle - minuteAngle);

    return Math.min(diff, 360 - diff);
};