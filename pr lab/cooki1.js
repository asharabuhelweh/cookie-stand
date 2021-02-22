//lab 06

'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//declaration object name seattle
const Seattle = {
  maxCustomers: 65,
  minCustomers: 23,
  AvgCookie: 6.3,
  cookies: [],
  totalx: 0,
  generateRandomNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookies.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.AvgCookie));

    }
  },

  render: function () {

    const parentElement = document.getElementById('container');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = 'Seattle';

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      this.totalx = this.totalx + this.cookies[i];
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + ' ' + this.cookies[i];
    }
    let total = document.createElement('li');
    total.textContent = 'total ' + this.totalx + ' cookies';
    ulElement.appendChild(total);

  }
}
Seattle.generateRandomNumber();
Seattle.render();



//declaration object name Tokyo

const Tokyo = {
  maxCustomers: 24,
  minCustomers: 3,
  AvgCookie: 1.2,
  cookies: [],
  totalx: 0,
  generateRandomNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookies.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.AvgCookie));

    }
  },


  render: function () {

    const parentElement = document.getElementById('container');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = 'Tokyo';

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      this.totalx = this.totalx + this.cookies[i];
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + ' ' + this.cookies[i];
    }
    let total = document.createElement('li');
    total.textContent = 'total ' + this.totalx + ' cookies';
    ulElement.appendChild(total);

  }
}
Tokyo.generateRandomNumber();
Tokyo.render();


//declaration object name Dubai

const Dubai = {
  maxCustomers: 38,
  minCustomers: 11,
  AvgCookie: 3.7,
  cookies: [],
  totalx: 0,
  generateRandomNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookies.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.AvgCookie));

    }
  },


  render: function () {

    const parentElement = document.getElementById('container');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = 'Dubai';

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      this.totalx = this.totalx + this.cookies[i];
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + ' ' + this.cookies[i];
    }
    let total = document.createElement('li');
    total.textContent = 'total ' + this.totalx + ' cookies';
    ulElement.appendChild(total);

  }
}
Dubai.generateRandomNumber();
Dubai.render();

//declaration object name Paris


const Paris = {
  maxCustomers: 38,
  minCustomers: 20,
  AvgCookie: 2.3,
  cookies: [],
  totalx: 0,
  generateRandomNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookies.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.AvgCookie));

    }
  },



  render: function () {

    const parentElement = document.getElementById('container');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = 'Paris';

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      this.totalx = this.totalx + this.cookies[i];
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + ' ' + this.cookies[i];
    }
    let total = document.createElement('li');
    total.textContent = 'total ' + this.totalx + ' cookies';
    ulElement.appendChild(total);

  }
}
Paris.generateRandomNumber();
Paris.render();



//declaration object name Lima

const Lima = {
  maxCustomers: 16,
  minCustomers: 2,
  AvgCookie: 4.6,
  cookies: [],
  totalx: 0,
  generateRandomNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.cookies.push(Math.ceil(getRandomInt(this.minCustomers, this.maxCustomers) * this.AvgCookie));

    }
  },



  render: function () {

    const parentElement = document.getElementById('container');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = 'Lima';

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      this.totalx = this.totalx + this.cookies[i];
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + ' ' + this.cookies[i];
    }
    let total = document.createElement('li');
    total.textContent = 'total ' + this.totalx + ' cookies';
    ulElement.appendChild(total);

  }
}
Lima.generateRandomNumber();
Lima.render();