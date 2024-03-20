const locations = document.querySelectorAll('section.times div') // for the div tag locations, select all 4 of them

const updateTimes = function () { 
  locations.forEach(zone => { // update the output tags for their timezones
    const output = zone.querySelector("output") //get output HTML tag for each timezone
    const timezone = zone.getAttribute("data-timezone") // pull in the string

    const now = luxon.DateTime.now().setZone(timezone) // get time with Luxon API, get different zones

    output.innerHTML = now.toFormat('HH:mm:ss') // format

  })
}

updateTimes() 
// update the time every second
setInterval(function () {
  updateTimes()
}, 1000) 