 function sayHello(person: string){
    return "Hello " + person;
 }
var user = "Super Employee";

document.getElementById("Something").innerHTML = sayHello(user);

interface EmployeeOption{
    FirstName: string;
    LastName: string;
    Age:number;
    PhoneNumber: number;
    State:  string;
    ZipCode: number;
    Occupation: string;
    getFullName():string;
    getAddress(): number | string;
}

class Employee implements EmployeeOption{ 
    FirstName: string;
    LastName: string;
    Age: number;
    PhoneNumber: number;
    State:  string;
    ZipCode: number;
    Occupation: string;
    Hourly: number;
    TotalHrs: number;
    Certeficates: string[];
 
 constructor(firstName:  string, lastName: string, age?: number, phoneNumber?: number, state?:  string, zipCode?: number, occupation?: string, hourly?: number, totalHrs?: number){
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
    getFullName(){
        return "Full Name: "+ this.FirstName  + this.LastName+ ", " + this.Age + " years old.";
    }
    contactInf(){
        return "Phone Number: " + this.PhoneNumber;
    }
    getAddress(){
        return "Address: "+ this.State + ", " + this.ZipCode + " Working as " + this.Occupation;
    } 

    getWeeklyWage(){
        let salary = this.Hourly * this.TotalHrs;
        if(this.TotalHrs == 40){
            return "Weekly Wage: " + "$" + salary;
        }else{
            return  this.TotalHrs;
        }
    }
    addCerts(certeficates){

      return  this.Certeficates = certeficates.map(certeficate => certeficate);   
    } 
        
}

let em1 = new Employee("Jon", "Smith", 30, 3214045055,"Georgia", 12345, "Developer", 23, 40);
document.getElementById("emp1").innerHTML = em1.getFullName() + `<br>` + em1.contactInf()+`<br>` + em1.getAddress() + `<br>` + 
em1.getWeeklyWage() + `<br>` + em1.addCerts(["MBA"]);

let em2 = new Employee("Josh", "Andrew", 29, 3334445476,"Canada",65437,"Programmer", 27, 40);
document.getElementById("emp2").innerHTML = em2.getFullName() + `<br>` + em2.contactInf()+`<br>` + em2.getAddress() + `<br>` + 
em2.getWeeklyWage() + `<br>` + em2.addCerts(["CSM"]);
let em3 = new Employee("Nezu", "Mame", 32, 456-132-6689,"Alabama",12345,"Designer", 35, 40);
document.getElementById("emp3").innerHTML = em3.getFullName() + `<br>` + em3.contactInf()+`<br>` + em3.getAddress() + `<br>` + 
em2.getWeeklyWage() + `<br>` + em3.addCerts(["MCSD"]);



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
   


 