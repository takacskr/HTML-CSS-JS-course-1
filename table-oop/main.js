// Define a User class
class User {
  id = 0;
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Data array
const usersData = [
  { id: '3dr4', name: 'Kiss Béla', email: 'bela@printcenter.hu' },
  { id: '4t68', name: 'Nagy Zoltán', email: 'zoltan.nagy@gmail.com' },
  { id: 's3gz', name: 'Horváth János', email: 'hjanos@pvckft.hu' },
  { id: '87ji', name: 'Szép Judit', email: 'juditszep@alfaholding.com' },
  { id: '7iok', name: 'Budavári Kálmán', email: 'b.kalman@gmail.com' },
  { id: 'swaf', name: 'Seszták Szabolcs', email: 'szabis@galinfo.hu' },
  { id: '5rgz', name: 'Hédervári Henrietta', email: 'h.heni@gkesekollok.com' },
  { id: 'bhu6', name: 'László Károly', email: 'karolylaci@vendettaemail.hu' },
];

// Generate the table dynamically
function generateTable(data) {
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');

  // Create table header
  Object.keys(data[0]).forEach((key) => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // Create table rows
  data.forEach((item) => {
    const tr = document.createElement('tr');

    Object.values(item).forEach((value) => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });

  document.body.appendChild(table);
}
// Convert data to User objects
const users = usersData.map((user) => new User(user.id, user.name, user.email));
// Generate and display the table
generateTable(users);
