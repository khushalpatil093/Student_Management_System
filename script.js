let selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    let formData = readFormData();
    if(selectedRow == null){
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    let formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["gpa"] = document.getElementById("gpa").value;
    formData["age"] = document.getElementById("age").value;
    formData["degree"] = document.getElementById("degree").value;
    return formData;
}

function insertNewRecord(data) {
    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.gpa;
    cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
            cell5.innerHTML = data.degree, `<button onClick="onEdit(this)"><img src="./Assets/edit 1.svg"></button> <button onClick="onDelete(this)"><img src="./Assets/trash-2 1.svg"></button>`;
    cell6 = newRow.insertCell(5);
            cell6.innerHTML = `<button onClick="onEdit(this)"><img src="./Assets/edit 1.svg"></button> <button onClick="onDelete(this)"><img src="./Assets/trash-2 1.svg"></button>`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.gpa;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.degree;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('myTable').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("gpa").value = '';
    document.getElementById("age").value = '';
    document.getElementById("degree").value = '';
    document.getElementById("searchInput").value = '';
    selectedRow = null;
}

function searchRecords() {
    let search = document.getElementById('searchInput').value.toLowerCase();
    let table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    let rows = table.getElementsByTagName("tr");

    for(let i=0; i<rows.length; ++i) {
        let cells = rows[i].getElementsByTagName('td');
        let found = false;

        for(let j=0; j<cells.length; ++i) {
            let cellValue = cells[j].innerHTML.toLowerCase();
            
            if(cellValue.includes(search)) {
                found = true;
                break;
            }
        }
        if(found) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
