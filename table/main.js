document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const defaultValue = 'default';

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

        saveNewRecord: function (row) {
            // Select buttons within the specific row
            const okButton = row.querySelector('.btn-success');
            const modifyButton = row.querySelector('.btn-warning');

            for (let i = 1; i < row.children.length; i++) {
                const td = row.children[i];
                const inputElement = td?.children[0];

                if (inputElement) {
                    const value = inputElement.value ?? defaultValue;
                    td.textContent = value;

                    if (i === 1) {
                        // Set the id input to readonly
                        inputElement.readOnly = true;
                    }
                }
            }

            // Set the display of buttons based on the condition
            modifyButton.style.display = 'inline-block';
            okButton.style.display = 'none';

            const actualRecord = this.data.users.find(
                (user) => user.id == row.children[1]?.children[0]?.value
            );
            console.log(actualRecord);
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

            const td = document.createElement('td');
            const okButton = this.createOkButton();
            okButton.classList.add('btn-success-' + user.id); // Add a unique class
            const deleteButton = this.createDeleteButton();
            const modifyButton = this.createModifyButton();
            modifyButton.classList.add('btn-warning-' + user.id); // Add a unique class

            td.appendChild(okButton);
            td.appendChild(deleteButton);
            td.appendChild(modifyButton);
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
