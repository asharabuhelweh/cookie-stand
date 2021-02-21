'use strict';

let workingHOUR= ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

const Seattle = {
  maxCustomers: 65,
  minCustomers: 23,
  AvgCookie: 6.3,
  cookies:[],
  total:0,
  generateRandomNumber: function () {
    for(let i=0; i<workingHOUR.length;i++){
    this.cookies.push(getRandomInt(this.maxCustomers, this.minCustomers) * this.AvgCookie);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },



  render: function () {

    const parentElement = document.getElementById('container');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = 'SEATTLE';

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < workingHOUR.length; i++) {

      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${workingHOUR[i]}:${this.cookies}`;
    }
    console.log(Seattle);
  

  }}
  Seattle.render();

  
  
  
    




