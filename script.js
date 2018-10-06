var bookTableButton = document.querySelector('.book-a-table');
var tables = {
  1: {email: 'dnstaver@gmail.com'}, 
  2: null, 
  3: {email: 'andrew@gmail.com'}, 
  4: null, 
  5: null, 
  6: {email: 'kek@cheburek.com'}, 
  7: null, 8: null, 9: null, 10: null 
};

var numberOfTablesSpan = document.getElementById('number');
var bookNow = document.getElementById('book-now');

numberOfTablesSpan.innerHTML = getNumberOfFreeTables();

bookTableButton.addEventListener('click', handleBookTableClick);
bookNow.addEventListener('click', handleBookNowClick);

function handleBookTableClick() {
  var email = prompt('Write your email, please');

  bookTable(email);
}

function handleBookNowClick() { 
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var partyNumber = document.getElementById('party-number').value;

  bookTable(email, name, date, partyNumber);
}

function bookTable(email, name, date, partyNumber) { 
  if(email != '') {
    var tableToBook = findTableNumberToBook();
    alert(
      'Booking confirmation sent to your mailbox ' + email + '. ' +
      'Your table is N' + tableToBook
    );

    tables[tableToBook] = {email: email, name: name, date: date, partynumber: partyNumber};
    updateTableCounter();
  }
}

function findTableNumberToBook() {
  for(var tableNumber in tables) {
    if(tables[tableNumber] == null) {
      return tableNumber;
    }
  }
}

function getNumberOfFreeTables() {
  var counter = 0;

  for(var tableNumber in tables) {
    if(tables[tableNumber] == null) {
      counter += 1;
    }
  }
  return counter;
}

var getFreeTable = document.querySelector('.get-free-table');
getFreeTable.addEventListener('click', function() {
  var reservedTables = [];

  for(var table in tables) {
    if(tables[table] !== null) {
      reservedTables.push(table);
    }
  }

  if(reservedTables.length > 0) {
    var random = reservedTables[Math.floor(Math.random() * reservedTables.length)];
    tables[random] = null;
    updateTableCounter();
  }
});

function updateTableCounter() {
  numberOfTablesSpan.innerHTML = getNumberOfFreeTables();
}