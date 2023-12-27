document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tableApp = {
        data: {
            users: [
                { id: '3dr4', name: 'Kiss Béla', email: 'bela@printcenter.hu' },

                {
                    id: '4t68',
                    name: 'Nagy Zoltán',
                    email: 'zoltan.nagy@gmail.com',
                },
                {
                    id: 's3gz',
                    name: 'Horváth János',
                    email: 'hjanos@pvckft.hu',
                },
                {
                    id: '87ji',
                    name: 'Szép Judit',
                    email: 'juditszep@alfaholding.com',
                },
                {
                    id: '7iok',
                    name: 'Budavári Kálmán',
                    email: 'b.kalman@gmail.com',
                },
                {
                    id: 'swaf',
                    name: 'Seszták Szabolcs',
                    email: 'szabis@galinfo.hu',
                },
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

        // Function to create a button with an icon
        createIconButton: function (iconClass, buttonClass, clickHandler) {
            const button = document.createElement('button');
            button.classList.add('btn', buttonClass);
            button.style.margin = '5px';

            const icon = document.createElement('i');
            icon.classList.add('bi', iconClass);
            button.appendChild(icon);

            // Add a click event listener to the button
            button.addEventListener('click', clickHandler);

            return button;
        },

        modifyData: function (elements) {
            for (let i = 0; i < elements.length; i++) {
                const textContent = elements[i].textContent.trim();
                if (textContent !== '') {
                    const textBox = document.createElement('input');
                    textBox.type = 'text';
                    textBox.value = textContent;

                    elements[i].textContent = '';
                    elements[i].appendChild(textBox);
                }
            }
        },

        // Function to create a delete button
        createDeleteButton: function () {
            return this.createIconButton('bi-trash', 'btn-danger', function () {
                this.parentElement.parentElement.remove();
            });
        },

        createModifyButton: function () {
            return this.createIconButton(
                'bi-pencil-square',
                'btn-success',
                function () {
                    let childElements =
                        this.parentElement.parentElement.children;
                    tableApp.modifyData(childElements);
                }
            );
        },

        // Function to create a cell for user data
        createCell: function (data) {
            const cell = document.createElement('td');
            cell.textContent = data;
            return cell;
        },

        // Function to generate a table row for a user
        generateTableRow: function (user) {
            const row = document.createElement('tr');
            const td = document.createElement('td');

            for (const key in user) {
                if (user.hasOwnProperty(key)) {
                    row.appendChild(this.createCell(user[key]));
                }
            }

            td.appendChild(this.createDeleteButton());
            row.appendChild(td);
            td.appendChild(this.createModifyButton());
            row.appendChild(td);

            return row;
        },

        // Main function to generate the table
        generateTable: function () {
            const tableBody = document.querySelector('.table tbody');

            for (let i = 0; i < this.data.users.length; i++) {
                const user = this.data.users[i];
                const row = this.generateTableRow(user);
                tableBody.appendChild(row);
            }
        },
    };

    // Call the main function
    tableApp.generateTable();
});
