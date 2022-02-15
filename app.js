'let seattle' = {
  location: 'Seattle',
  minCustHourly: 23,
  maxCustHourly: 65,
  aveCookiePer: 6.3,
  custPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    }
  },
  getCookiesSoldPerHour: function () {
    for (let j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
    }
  },
  getTotalCookies: function () { //This should total all the cookies sold.
    for (let l = 0; l < storeHours.length; l++) {
      this.totalCookies += this.cookiesSoldPerHour[l];
    }
  }
};

let tokyo = {
  location: 'Tokyo',
  minCustHourly: 3,
  maxCustHourly: 24,
  aveCookiePer: 1.2,
  custPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    }
  },
  getCookiesSoldPerHour: function () {
    for (let j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
    }
  },
  getTotalCookies: function () { //This should total all the cookies sold.
    for (let l = 0; l < storeHours.length; l++) {
      this.totalCookies += this.cookiesSoldPerHour[l];
    }
  }
};

let dubai = {
  location: 'Dubai',
  minCustHourly: 11,
  maxCustHourly: 38,
  aveCookiePer: 3.7,
  custPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    }
  },
  getCookiesSoldPerHour: function () {
    for (let j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
    }
  },
  getTotalCookies: function () { //This should total all the cookies sold.
    for (let l = 0; l < storeHours.length; l++) {
      this.totalCookies += this.cookiesSoldPerHour[l];
    }
  }
};

let paris = {
  location: 'Paris',
  minCustHourly: 20,
  maxCustHourly: 38,
  aveCookiePer: 2.3,
  custPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    }
  },
  getCookiesSoldPerHour: function () {
    for (let j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
    }
  },
  getTotalCookies: function () { //This should total all the cookies sold.
    for (let l = 0; l < storeHours.length; l++) {
      this.totalCookies += this.cookiesSoldPerHour[l];
    }
  }
};

let lima = {
  location: 'Lima',
  minCustHourly: 2,
  maxCustHourly: 16,
  aveCookiePer: 4.6,
  custPerHour: [],
  cookiesSoldPerHour: [],
  totalCookies: 0,
  getCustPerHour: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(randPerHour(this.minCustHourly, this.maxCustHourly));
    }
  },
  getCookiesSoldPerHour: function () {
    for (let j = 0; j < storeHours.length; j++) {
      this.cookiesSoldPerHour.push(Math.floor(cookiesPerHour(this.custPerHour[j], this.aveCookiePer)));
    }
  },
  getTotalCookies: function () { //This should total all the cookies sold.
    for (let l = 0; l < storeHours.length; l++) {
      this.totalCookies += this.cookiesSoldPerHour[l];
    }
  }
};

// DOM 
// TO DO, Make render into a re-usable function so you can simply call it with the object name, to render the list in HTML

seattle.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = seattle.location;
  cookieList.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  cookieList.appendChild(ulElem);
  seattle.getCustPerHour();
  seattle.getCookiesSoldPerHour();
  seattle.getTotalCookies();
  for (let i = 0; i < storeHours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(total);
};

tokyo.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = tokyo.location;
  cookieList.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  cookieList.appendChild(ulElem);
  tokyo.getCustPerHour();
  tokyo.getCookiesSoldPerHour();
  tokyo.getTotalCookies();
  for (let i = 0; i < storeHours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(total);
};

dubai.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = dubai.location;
  cookieList.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  cookieList.appendChild(ulElem);
  dubai.getCustPerHour();
  dubai.getCookiesSoldPerHour();
  dubai.getTotalCookies();
  for (let i = 0; i < storeHours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(total);
};

paris.render = function () {
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = paris.location;
  cookieList.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  cookieList.appendChild(ulElem);
  paris.getCustPerHour();
  paris.getCookiesSoldPerHour();
  paris.getTotalCookies();
  for (let i = 0; i < storeHours.length; i++) {
    let liElem = document.createElement('li');
    liElem.textContent = `${storeHours[i]}: ${this.cookiesSoldPerHour[i]} cookies`;
    ulElem.appendChild(liElem);
  }
  let total = document.createElement('li');
  total.textContent = `Total: ${this.totalCookies} cookies`;
  ulElem.appendChild(total);
};
