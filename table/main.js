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
        createIconButton: function (
            iconClass,
            buttonClass,
            display,
            clickHandler
        ) {
            const button = document.createElement('button');
            button.classList.add('btn', buttonClass);
            button.style.margin = '5px';
            button.style.display = display;

            const icon = document.createElement('i');
            icon.classList.add('bi', iconClass);
            button.appendChild(icon);

            // Add a click event listener to the button
            button.addEventListener('click', clickHandler);

            return button;
        },

        createDeleteButton: function () {
            return this.createIconButton(
                'bi-trash',
                'btn-danger',
                'inline-block',
                function () {
                    this.parentElement.remove();
                }
            );
        },

        modifyData: function (row) {
            const okButton = row.querySelector('.btn-success');
            const modifyButton = row.querySelector('.btn-warning');

            if (okButton && modifyButton) {
                okButton.style.display = 'inline-block';
                modifyButton.style.display = 'none';
            }

            for (let i = 1; i < row.children.length; i++) {
                const td = row.children[i];
                const textContent = td.textContent.trim();

                if (textContent !== '') {
                    const textBox = document.createElement('input');
                    textBox.type = 'text';

                    // Set the id input to readonly
                    textBox.readOnly = i === 1;

                    textBox.value = textContent;

                    // Remove the text content
                    td.textContent = '';

                    td.appendChild(textBox);
                }
            }
        },

        // Function to register new user data
        registerNewUser: function () {
            const row = document.querySelector('.table tbody').insertRow(-1);
        },

        saveNewRecord: function (row) {
            const defaultValue = '';
            for (let i = 1; i < 3; i++) {
                const td = row?.children[i];
                const value =
                    row?.children[i]?.children[0]?.value ?? defaultValue;
                td.textContent = value;

                // Update the User data with the new values
                tableApp.data.users[i][td.id] = value;
            }

            // Set the display of buttons based on the condition
            const okButton = row.querySelector('.btn-success');
            const modifyButton = row.querySelector('.btn-warning');

            if (okButton && modifyButton) {
                okButton.style.display = 'none';
                modifyButton.style.display = 'inline-block';
            }
        },

        createOkButton: function () {
            return this.createIconButton(
                'bi-person-fill-check',
                'btn-success',
                'none',
                function () {
                    return tableApp.saveNewRecord(
                        this.parentElement.parentElement
                    );
                }
            );
        },

        createModifyButton: function () {
            return this.createIconButton(
                'bi-pencil-square',
                'btn-warning',
                'inline-block',
                function () {
                    let row = this.parentElement.parentElement;
                    tableApp.modifyData(row);
                }
            );
        },

        // Function to create a cell for user data
        createCell: function (data) {
            const cell = document.createElement('td');
            cell.textContent = data;
            return cell;
        },

        generateTableRow: function (user) {
            const row = document.createElement('tr');

            for (const key in user) {
                if (user.hasOwnProperty(key)) {
                    row.appendChild(this.createCell(user[key]));
                }
            }

            const okTd = document.createElement('td');
            const okButton = this.createOkButton();
            okButton.classList.add('btn-success'); // Add a common class
            okTd.appendChild(okButton);

            const deleteTd = document.createElement('td');
            const deleteButton = this.createDeleteButton();
            deleteTd.appendChild(deleteButton);

            const modifyTd = document.createElement('td');
            const modifyButton = this.createModifyButton();
            modifyButton.classList.add('btn-warning'); // Add a common class
            modifyTd.appendChild(modifyButton);

            row.appendChild(okTd);
            row.appendChild(deleteTd);
            row.appendChild(modifyTd);

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
