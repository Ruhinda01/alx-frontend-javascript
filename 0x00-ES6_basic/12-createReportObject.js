export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employlist) {
      return Object.keys(employlist).length;
    },
  };
}
