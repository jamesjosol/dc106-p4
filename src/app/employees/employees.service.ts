

export class EmployeesService {
    getEmployees() {
        let employees = [
            {name: "Mark Joseph Guerra", age:23, gender:"Male", specialty:"Programmer"},
            {name: "Johnny Solidad", age:31, gender:"Male", specialty:"Product Designer"},
            {name: "Rose Anne Garcia", age:26, gender:"Female", specialty:"Programmer"},
            {name: "Alexander Jay Moreno", age:21, gender:"Male", specialty:"Account Executive"},
            {name: "Andrea Valencia", age:19, gender:"Female", specialty:"Support Technician"},
            {name: "Rodel Jose Salazar", age:30, gender:"Male", specialty:"Programmer"},
            {name: "Latonya Lynch", age:24, gender:"Female", specialty:"Web Designer"},
            {name: "Maria Hansen", age:28, gender:"Female", specialty:"Product Designer"},
            {name: "George Villarino", age:22, gender:"Male", specialty:"System Adminstrator"},
            {name: "Evangeline Lynn", age:33, gender:"Female", specialty:"Programmer"}
        ];
        return employees;
    }
}