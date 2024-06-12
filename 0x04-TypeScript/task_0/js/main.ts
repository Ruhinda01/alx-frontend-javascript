interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Ruhinda",
    lastName: "Ricky",
    age: 27,
    location: "Kampala",
};

const student2: Student = {
    firstName: "Busingye",
    lastName: "Hazel",
    age: 24,
    location: "Nairobi",
};

const studentsList: Student[] = [student1, student2];

document.addEventListener("DOMContentLoaded", () => {
    const table = document.createElement("table");
    table.border = "1";

    const headerRow = document.createElement("tr");
    const header1 = document.createElement("th");
    header1.textContent = "First Name";
    const header2 = document.createElement("th");
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);

    studentsList.forEach((student) => {
        const row = document.createElement("tr");

        const firstName = document.createElement("td");
        firstName.textContent = student.firstName;
        row.appendChild(firstName);

        const location = document.createElement("td");
        location.textContent = student.location;
        row.appendChild(location);

        table.appendChild(row);
    });

    document.body.appendChild(table);
});
