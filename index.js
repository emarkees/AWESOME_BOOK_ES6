import { DateTime } from './modules/luxon.js';


  const getTime = document.getElementById('time');
  const date = DateTime.now(); 
  const dateTime = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  getTime.innerHTML = dateTime;
 


/*const currentTime = document.getElementById('time');
const date = DateTime.now();
const dateTime = date.toFormat('EEE d MMM yyyy h:mm:ss a');
currentTime.innerHTML = dateTime;
*/




