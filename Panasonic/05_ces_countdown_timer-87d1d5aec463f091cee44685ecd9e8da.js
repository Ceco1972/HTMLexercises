/**
 * @function countdown create countdown timer
 *
 * @param {HTMLElement} el DOM element which will be a container for timer.
 * Element should have special [data-end-date] attribute set as a date string
 * in some of the formats Date.parse() method accept '06 Dec 2021'
 * or '19 Dec 2021 16:00:00'.
 */
function countdown(el) {
  var endDate = el.dataset.endDate;

  // No end date - no countdown
  if (!endDate) {
    return;
  }

  function getTimeRemaining(endTime) {
    var total = Date.parse(endTime) - Date.parse(new Date());
    var seconds = Math.floor( (total/1000) % 60 );
    var minutes = Math.floor( (total/1000/60) % 60 );
    var hours = Math.floor( (total/(1000*60*60)) % 24 );
    var days = Math.floor( total/(1000*60*60*24) );

    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  var days = el.querySelector('.countdown__term--days .countdown__value');
  var hours = el.querySelector('.countdown__term--hours .countdown__value');
  var minutes = el.querySelector('.countdown__term--minutes .countdown__value');
  var seconds = el.querySelector('.countdown__term--seconds .countdown__value');

  function updateClock() {
    var t = getTimeRemaining(endDate);
    days.innerHTML = ('0' + t.days).slice(-2);
    hours.innerHTML = ('0' + t.hours).slice(-2);
    minutes.innerHTML = ('0' + t.minutes).slice(-2);
    seconds.innerHTML =  ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeInterval);
      el.classList.add('countdown--zero');
    }
  }

  updateClock();

  var timeInterval = setInterval(updateClock,1000);
}

// Init countdown component.
document.addEventListener('DOMContentLoaded', function() {
  var countdownContainers = document.querySelectorAll('.countdown');
  if (countdownContainers.length) {
    for (var i = 0; i < countdownContainers.length; i++) {
      countdown(countdownContainers[i]);
    }
  }
});
