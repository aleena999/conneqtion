// Function to format the mobile number as XXX-XXX-XXXX
function formatMobileNumber(number) {
    const formattedNumber = number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    return formattedNumber;
}

// Function to format the date as MM-DD-YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
    return formattedDate;
}

// Function to validate all the fields and show it on table
document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var employeeId = document.getElementById('employeeId').value;
    var employeeName = document.getElementById('employeeName').value;
    var employeeBirthdate = document.getElementById('dateOfBirth').value;
    var gender = document.getElementById('gender').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var department = document.getElementById('department').value;

    if (!employeeName || !employeeId || !employeeBirthdate || !gender || !mobileNumber || !department) {
        alert('Please fill in all the fields.');
        return;
    }

    const formattedMobileNumber = formatMobileNumber(mobileNumber);
    const formattedBirthdate = formatDate(employeeBirthdate);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${employeeId}</td>
    <td>${employeeName}</td>
                <td>${formattedMobileNumber}</td>
                <td>${gender}</td>
                <td>${formattedBirthdate}</td>
                <td>${department}</td>
            `;
    document.getElementById('employeeTableBody').appendChild(newRow);

    // Reset the form
    document.getElementById('employeeForm').reset();
});

// Function to filter the table based on user input
document.getElementById('filterInput').addEventListener('keyup', function (event) {
    const filterInput = document.getElementById('filterInput').value.toUpperCase();
    const tableRows = document.querySelectorAll('#employeeTableBody tr');

    tableRows.forEach(row => {
        const employeeName = row.getElementsByTagName('td')[1].innerText.toUpperCase();
        if (employeeName.includes(filterInput)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});