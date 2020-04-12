function sayHello(person) {
    return "Hello " + person;
}
var user = "Super Employee";
document.getElementById("Something").innerHTML = sayHello(user);
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourly, totalHrs) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Age = age;
        this.PhoneNumber = phoneNumber;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
        this.Hourly = hourly;
        this.TotalHrs = totalHrs;
    }
    Employee.prototype.getFullName = function () {
        return "Full Name: " + this.FirstName + this.LastName + ", " + this.Age + " years old.";
    };
    Employee.prototype.contactInf = function () {
        return "Phone Number: " + this.PhoneNumber;
    };
    Employee.prototype.getAddress = function () {
        return "Address: " + this.State + ", " + this.ZipCode + " Working as " + this.Occupation;
    };
    Employee.prototype.getWeeklyWage = function () {
        var salary = this.Hourly * this.TotalHrs;
        if (this.TotalHrs == 40) {
            return "Weekly Wage: " + "$" + salary;
        }
        else {
            return this.TotalHrs;
        }
    };
    Employee.prototype.addCerts = function (certeficates) {
        return this.Certeficates = certeficates.map(function (certeficate) { return certeficate; });
    };
    return Employee;
}());
var em1 = new Employee("Jon", "Smith", 30, 3214045055, "Georgia", 12345, "Developer", 23, 40);
document.getElementById("emp1").innerHTML = em1.getFullName() + "<br>" + em1.contactInf() + "<br>" + em1.getAddress() + "<br>" +
    em1.getWeeklyWage() + "<br>" + em1.addCerts(["MBA"]);
var em2 = new Employee("Josh", "Andrew", 29, 3334445476, "Canada", 65437, "Programmer", 27, 40);
document.getElementById("emp2").innerHTML = em2.getFullName() + "<br>" + em2.contactInf() + "<br>" + em2.getAddress() + "<br>" +
    em2.getWeeklyWage() + "<br>" + em2.addCerts(["CSM"]);
var em3 = new Employee("Nezu", "Mame", 32, 456 - 132 - 6689, "Alabama", 12345, "Designer", 35, 40);
document.getElementById("emp3").innerHTML = em3.getFullName() + "<br>" + em3.contactInf() + "<br>" + em3.getAddress() + "<br>" +
    em2.getWeeklyWage() + "<br>" + em3.addCerts(["MCSD"]);
// console.log(em1.getFullName());
// console.log(em1.contactInf());
// console.log(em1.getAddress());
// var em2 = new Employee("Josh", "Andrew", 29, 3334445476,"Canada",65437,"Programmer");
// document.getElementById("demo").innerHTML = em1();
// console.log(em2.getFullName());
// console.log(em2.contactInf());
// console.log(em2.getAddress());
// var em3 = new Employee("Nezu", "Mame", 32, 456-132-6689,"Alabama",12345,"Designer");
// console.log(em3.getFullName());
// console.log(em3.contactInf());
// console.log(em3.getAddress());
