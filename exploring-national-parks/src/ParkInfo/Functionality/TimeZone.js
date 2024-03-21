import { DateTime } from 'luxon';

export const updateTimes = function () { 
  const locations = document.querySelectorAll('section.times div') // for the div tag locations, select all 4 of them

  locations.forEach(zone => { // update the output tags for their timezones
    const output = zone.querySelector("output") //get output HTML tag for each timezone
    const timezone = zone.getAttribute("data-timezone") // pull in the string

    const now = DateTime.now().setZone(timezone) // get time with Luxon API, get different zones

    output.innerHTML = now.toFormat('HH:mm:ss') // format

  });
};