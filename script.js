"use strict"
// Создать класс Person, который будет иметь следующие поля:
// firstName
// lastName
// age
// birthDayDate (в формате ‘YYYY-MM-DD’, например ‘1989-02-03’)
// метод celebrate - который будет выводить возвращать текст “Happy Birthday, let’s celebrate’"
// Класс Employee должен наследовать от Person и иметь следующие поля:
// приватное свойство salary
// jobPosition
// метод getYearSalary (как в прошлой домашке)
// метод celebrate - который будет проверять - если день вашего дня рождения в текущем году выпадает на выходной день - то вернет текст “Happy Birthday, let’s celebrate’". Если же дата рождения выпадает на будний (рабочий) день - то вернет текст “Happy Birthday, but I need to work"
// Создать 1 экземпляр класса Person и 1 экземпляр класса Employee. Сделать вызов метод celebrate у обоих объектов.

class Person {
  constructor(firstName, lastName, age, birthDayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthDayDate = birthDayDate;
  }
  celebrate() {
    return `Happy Birthday, let’s celebrate`;
  }
}

class Employee extends Person{
  #salary = 0;
  constructor(firstName, lastName, age, birthDayDate, jobPosition) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    //this.salary = salary;
  }
  setSalary(value) {
    this.#salary = value;
  }
  getSalary() {
    return this.#salary;
  }
  celebrate() {
    const isWeekend = (date) => {
          let dayOfWeek = new Date(date).getDay();
          return (dayOfWeek === 0 || dayOfWeek === 6);
      }
    if (isWeekend(this.birthDayDate))
      return `Happy Birthday, let’s celebrate`;
        else
      return `Happy Birthday, but I need to work`;
  }
  showYearSalary() {
      return this.#salary * 12;
  };
}

let person = new Person("Adam", "Smith", 33, "2022-03-10");
let employee = new Employee("John", "Brown", 66, "2022-03-13", "Driver");

console.log(person);
console.log(person.celebrate());
console.log(employee);
console.log(employee.celebrate());
employee.setSalary(500);
console.log(employee.showYearSalary());
