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
// ЗАМЕЧАНИЯ
// 1. #salary должен задаваться при инициализации экземпляра класса - то есть в constructore - не нужны отдельные методы для этого
// 2. Функцию isWeekend вообще лучше вынести за пределы класса - так как это просто вспомогательная функция, которая никак не относится к логике класса.
// 3. Тебе нужно передавать дату рождения реальную. Например 1980-03-10. Потом использую методы работы с Date установить текущий год. И затем уже на этой дате проверять isWeekend
// 4. В методу celebrate у дочернего класса ты дублируешь строку Happy Birthday, let’s celebrate - ты можешь вызвать этот метод у родительского класса - тогда не будет дублирования строки


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
  #salary;
  constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
    super(firstName, lastName, age, birthDayDate);
    this.jobPosition = jobPosition;
    this.#salary = salary;
  }
  celebrate() {
    if (isWeekendBirthDayThisYear(this.birthDayDate))
      return super.celebrate();
        else
      return `Happy Birthday, but I need to work`;
  }
  showYearSalary() {
      return this.#salary * 12;
  };
}

function isWeekendBirthDayThisYear(date) {
  let currentYear = new Date().getFullYear();
  let birthDayThisYear = new Date(new Date(date).setFullYear(currentYear));
  let dayOfWeek = new Date(birthDayThisYear).getDay();
  return (dayOfWeek === 0 || dayOfWeek === 6);
}


let person = new Person("Adam", "Smith", 33, "1980-03-10");
let employee = new Employee("John", "Brown", 66, "1980-03-11", "Driver", 500);

console.log(person);
console.log(person.celebrate());
console.log(employee);
console.log(employee.celebrate());
console.log(employee.showYearSalary());

