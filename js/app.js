'use strict';

let hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];
const parentElement = document.getElementById( 'container' );

let table = document.createElement( 'table' );
parentElement.appendChild( table );

let totaly = [];

function City( name, maxCustomers, minCustomers, AvgCookie ) {
  this.maxCustomers = maxCustomers;
  this.minCustomers = minCustomers;
  this.AvgCookie = AvgCookie;
  this.cookies = [];
  this.totalx = 0;
  this.name = name;
}

City.prototype.generateRandomNumber = function () {
  for ( let i = 0; i < hours.length; i++ ) {
    this.cookies.push(
      Math.ceil(
        getRandomInt( this.minCustomers, this.maxCustomers ) * this.AvgCookie
      )
    );
  }
  for ( let i = 0; i < hours.length; i++ ) {
    this.totalx += this.cookies[i];
  }

  City.prototype.header = function () {
    const tr = document.createElement( 'tr' );
    table.appendChild( tr );

    const trLoction = document.createElement( 'th' );
    tr.appendChild( trLoction );
    trLoction.textContent = 'Location';

    for ( let i = 0; i < hours.length; i++ ) {

      const thElement = document.createElement( 'th' );
      tr.appendChild( thElement );
      thElement.textContent = hours[i];
    }
    const trDaily = document.createElement( 'th' );
    tr.appendChild( trDaily );
    trDaily.textContent = 'Daily Location Total';
  };


  City.prototype.rowS = function () {
    const tr = document.createElement( 'tr' );
    table.appendChild( tr );

    const trLoction = document.createElement( 'th' );
    tr.appendChild( trLoction );
    trLoction.textContent = this.name;

    for ( let i = 0; i < hours.length; i++ ) {
      const tdElement = document.createElement( 'td' );
      tr.appendChild( tdElement );

      tdElement.textContent = this.cookies[i];
    }
    const tdTotal = document.createElement( 'td' );
    tr.appendChild( tdTotal );
    tdTotal.textContent = this.totalx;
  };
};

City.prototype.footer = function () {
  const totalyrow = document.createElement( 'tr' );
  const totalslabel = document.createElement( 'th' );
  totalslabel.textContent = 'Totals';
  totalyrow.appendChild( totalslabel );

  for ( let i = 0; i < hours.length; i++ ) {
    totaly[i] =
      Seattle.cookies[i] +
      Tokyo.cookies[i] +
      Dubai.cookies[i] +
      Paris.cookies[i] +
      Lima.cookies[i];
    const totalycol = document.createElement( 'td' );
    totalycol.textContent = totaly[i];
    totalyrow.appendChild( totalycol );
  }
  table.appendChild( totalyrow );

  let finaltotal =
    Seattle.totalx + Tokyo.totalx + Dubai.totalx + Paris.totalx + Lima.totalx;
  const finaltotalcell = document.createElement( 'td' );
  finaltotalcell.textContent = finaltotal;
  totalyrow.appendChild( finaltotalcell );
};




const Seattle = new City( 'Seattle', 65, 23, 6.3 );
const Tokyo = new City( 'Tokyo', 24, 3, 1.2 );
const Dubai = new City( 'Dubai', 38, 11, 3.7 );
const Paris = new City( 'Paris', 38, 20, 2.3 );
const Lima = new City( 'Lima', 16, 2, 4.6 );

Seattle.generateRandomNumber( 23, 65 );
Tokyo.generateRandomNumber( 3, 24 );
Dubai.generateRandomNumber( 11, 38 );
Paris.generateRandomNumber( 20, 38 );
Lima.generateRandomNumber( 2, 16 );

Seattle.header();
Seattle.rowS();
Tokyo.rowS();
Dubai.rowS();
Paris.rowS();
Lima.rowS();
Lima.footer();

console.log( Seattle );
console.log( Tokyo );
console.log( Dubai );
console.log( Paris );
console.log( Lima );

function getRandomInt( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min ) + min ); //The maximum is exclusive and the minimum is inclusive
}
