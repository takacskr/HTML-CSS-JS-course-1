document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  class User {
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  }

  const tableApp = {
    data: {
      users: [
        { id: '3dr4', name: 'Kiss Béla', email: 'bela@printcenter.hu' },

        { id: '4t68', name: 'Nagy Zoltán', email: 'zoltan.nagy@gmail.com' },
        { id: 's3gz', name: 'Horváth János', email: 'hjanos@pvckft.hu' },
        { id: '87ji', name: 'Szép Judit', email: 'juditszep@alfaholding.com' },
        { id: '7iok', name: 'Budavári Kálmán', email: 'b.kalman@gmail.com' },
        { id: 'swaf', name: 'Seszták Szabolcs', email: 'szabis@galinfo.hu' },
        {
          id: '5rgz',
          name: 'Hédervári Henrietta',
          email: 'h.heni@gkesekollok.com',
        },
        {
          id: 'bhu6',
          name: 'László Károly',
          email: 'karolylaci@vendettaemail.hu',
        },
      ],
    },

    generateTbody: function (users) {
      const tbody = document.createElement('tbody');

      for (let i = 0; i < users.length; i++) {
        const tr = document.createElement('tr');

        for (let key in users[i]) {
          const td = document.createElement('td');
          td.textContent = users[i][key];
          tr.appendChild(td);
        }

        tbody.appendChild(tr);
      }
      return tbody;
    },

    generateThead: function (users) {
      const thead = document.createElement('thead');
      const tr = document.createElement('tr');

      for (const key in users[0]) {
        const th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.textContent = key;
        tr.appendChild(th);
      }
      thead.appendChild(tr);
      return thead;
    },

    generateTable: function (users) {
      const table = document.createElement('table');
      table.classList.add(
        'table',
        'table-dark',
        'table-striped',
        'table-hover'
      );

      const thead = this.generateThead(users);
      const tbody = this.generateTbody(users);

      table.appendChild(thead);
      table.appendChild(tbody);

      const col = document.querySelector('.column');
      col.appendChild(table);
    },
  };

  const users = tableApp.data.users.map((user) => {
    return new User(user.id, user.name, user.email);
  });

  tableApp.generateTable(users);
});
