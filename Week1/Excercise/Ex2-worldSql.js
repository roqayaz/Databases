import mysql from 'mysql';

//Create connection
const connection = mysql.createConnection({
  host     : 'localhost',
  port     :  3306,
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'world'
});

//Connect
connection.connect();

// 1- What are the names of countries with population greater than 8 million?
connection.query('SELECT name FROM country WHERE population > 8000000', (err, result) => {
    if (err) throw err;
    const countries = result.map(country => country.name);
    console.log(`The names of countries with population greater than 8 million are: ${countries}.`);
  });

// 2- What are the names of countries that have “land” in their names?
connection.query('SELECT name FROM country WHERE name LIKE "%land%"', (err, result) => {
    if (err) throw err;
    const countries = result.map(country => country.name);
    console.log(`The names of countries that have "land" in their names are: ${countries}.`);
  });

// 3- What are the names of the cities with population in between 500,000 and 1 million?
connection.query('SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000', (err, result) => {
    if (err) throw err;
    const cities = result.map(city => city.name);
    console.log(`The names of cities with population between 500000 and 1 million are: ${cities}.`);
  });

// 4- What's the name of all the countries on the continent ‘Europe’?
connection.query('SELECT name FROM country WHERE continent = "Europe"', (err, result) => {
    if (err) throw err;
    const countries = result.map(country => country.name);
    console.log(`The names of countries on the Europe are: ${countries}.`);
  });

// 5- List all the countries in the descending order of their surface areas.
connection.query('SELECT name FROM country ORDER BY surfacearea DESC', (err, result) => {
    if (err) throw err;
    const countries = result.map(country => country.name);
    console.log(`The names of countries in descending order of their surface area are: ${countries}.`);
  });

// 6- What are the names of all the cities in the Netherlands?
connection.query('SELECT name FROM city WHERE countryCode = "NLD"', (err, result) => {
    if (err) throw err;
    const cities = result.map(city => city.name);
    console.log(`The names of cities of Netherland are: ${cities}.`);
  });

// 7- What is the population of Rotterdam?
connection.query('SELECT population FROM city WHERE name = "Rotterdam"', (err, result) => {
    if (err) throw err;
    const population = result[0].population;
    console.log(`Population of Rotterdam is: ${population}`);
  });

// 8- What's the top 10 countries by Surface Area?
connection.query('SELECT name FROM country ORDER BY surfacearea DESC LIMIT 10', (err, result) => {
    if (err) throw err;
    const countries = result.map(country => country.name);
    console.log(`The top 10 countries by Surface Area are: ${countries}`);
  });

// 9- What's the top 10 most populated cities?
connection.query('SELECT name FROM city ORDER BY population DESC LIMIT 10', (err, result) => {
    if (err) throw err;
    const cities = result.map(city => city.name);
    console.log(`The top 10 most populated cities are: ${cities}`);
  });

// 10- What is the population number of the world?
connection.query('SELECT SUM(population) AS total FROM country', (err, result) => {
    if (err) throw err;
    const population = result[0].total;
    console.log(`The world's population is: ${population}`);
  });
