import mysql from 'mysql';

//Create connection
const connection = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'hyfuser',
  password : 'hyfpassword',
});

//Connect
connection.connect(err => {
  if(err){
      throw err
  }
  console.log('Mysql Connected...');
});

// Drop Database
connection.query('DROP DATABASE IF EXISTS meetup', (err, results) => {
  if (err) throw err;
  console.log('Database dropped !');
});


//Create Databases
connection.query("CREATE DATABASE meetup", (err, result) => {
  if (err) throw err;
  console.log("Database created!");
});

// Use the database
connection.query('USE meetup', (err, results) => {
  if (err) throw err;
  console.log('Database selected!');
});

// Create tables in the database
connection.query("CREATE TABLE Invitee (invitee_no INT, invitee_name TEXT, invited_by varchar(20))", (err, result) => {
  if (err) throw err;
  console.log("Table created!");
});

connection.query("CREATE TABLE Room (room_no INT, room_name text, floor_number INT)", (err, result) => {
  if (err) throw err;
  console.log("Table created!");
});

connection.query("CREATE TABLE Meeting (meeting__no INT, meeting_title TEXT, starting_time TIME, ending_time TIME, room_no INT)", (err, result) => {
  if (err) throw err;
  console.log("Table created!");
});

// Insert data into the tables
const invitee = [
  [1, 'Timmy', 'Roq'],
  [2, 'Zendaya', 'Tom'],
  [3, 'Elio', 'Oliver'],
  [4, 'Romeo', 'Juliet'],
  [5, 'Dexter', 'Deb'],
];

connection.query('INSERT INTO Invitee VALUES ?', [invitee], (err, result) => {
  if (err) throw err;
  console.log("Data inserted!");
});

const room = [
  [3, 'Conference Room', 2],
  [6, 'Ocean Room', 3],
  [10, 'Jungle Room', 5],
  [1, 'Beach Room', 1],
  [7, 'Coconut Room', 3],
];

connection.query('INSERT INTO Room VALUES ?', [room], (err, result) => {
  if (err) throw err;
  console.log("Data inserted!");
});

const meeting = [
  [1, 'Meeting 1', '12:00:00', '13:15:00', 3],
  [2, 'Meeting 2', '13:30:00', '14:45:00', 6],
  [3, 'Meeting 3', '15:00:00', '16:15:00', 10],
  [4, 'Meeting 4', '16:30:00', '17:45:00', 1],
  [5, 'Meeting 5', '18:00:00', '19:00:00', 7],
];

connection.query('INSERT INTO Meeting VALUES ?', [meeting], (err, result) => {
  if (err) throw err;
  console.log("Data inserted!");
});