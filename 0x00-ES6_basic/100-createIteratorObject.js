export default function createIteratorObject(report) {
  const employees = [];

  for (const dep of Object.keys(report.allEmployees)) {
    for (const emp of report.allEmployees[dep]) {
      employees.push(emp);
    }
  }
  return employees;
}
