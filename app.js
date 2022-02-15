'use strict';

// --------------------------- global variables ---------------------------

var openHoursArr = hoursOfOperation();
var numOpenHours = openHoursArr.length;
var cookieTosserCustomers = 20; // each cookie tosser can serve 20 customers per hour
var shops = [];
var totals = [];

var salesListContainer =  document.getElementById('sales-lists');
var cookieTosserContainer = document.getElementById('cookie-tosser-lists');

// initiate the totals array with a zero at each time
for (var i = 0; i < openHoursArr.length; i++){
  totals.push(0);
}

var newShop = document.getElementById('newShop');

// --------------------------- global functions ---------------------------

// to create an array of business hours
function hoursOfOperation(){
  var startTime = 6; // shops open at 6am
  var endTime = 9; // shops close at 9pm
  var pm = false;
  var currentTime = startTime;
  var workHours = [];
  while(pm === false || currentTime < endTime){
    if (pm === false && currentTime < 12){
      workHours.push(currentTime + ':00am');
      currentTime++;
    } else if (pm === false && currentTime === 12){
      pm = true;
      workHours.push(currentTime + ':00pm');
      currentTime = 1;
    } else {
      workHours.push(currentTime + ':00pm');
      currentTime++;
    }
  }
  return workHours; // returns an array with all available work hours... eg [6am, 7am, 8am, etc.]
}

// to calculate the total number of cookies at all locations
function calcTotal(){
  var total = 0;
  for (var i = 0; i < totals.length; i++){
    total += totals[i];
  }
  return total;
}


// --------------------------- Other Functions ---------------------------

// to create the table header
var renderHeader = function (container, needsGrandTotals){
  var trEl = document.createElement('tr'); 
  var thEl = document.createElement('th'); 
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for(var i = 0; i < openHoursArr.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = openHoursArr[i];
    trEl.appendChild(thEl);
  }
  if (needsGrandTotals === true){
    thEl = document.createElement('th');
    thEl.textContent = 'Totals';
    trEl.appendChild(thEl);
  }
  container.appendChild(trEl);
};


var renderFooter = function(container, needsGrandTotals){
  var trEl = document.createElement('tr'); // create a table row
  trEl.id = 'footer';
  var tdEl = document.createElement('td'); // create a table data cell
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for(var k = 0; k < totals.length; k++){
    tdEl = document.createElement('td');
    tdEl.textContent = totals[k];
    trEl.appendChild(tdEl);
  }
  if (needsGrandTotals === true){
    tdEl = document.createElement('td');
    tdEl.textContent = calcTotal();
    trEl.appendChild(tdEl);
  }
  container.appendChild(trEl);
};