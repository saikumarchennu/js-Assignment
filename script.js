var addEmp = document.querySelector(".add-emp");
var modal = document.querySelector(".modal-bg");
var close = document.querySelector(".close-bg");
var form = document.querySelector(".emp-form");
var emp = document.querySelector("article");

form.addEventListener("submit", addEmployee);

addEmp.addEventListener("click", function () {
  document.forms["emp-form"]["gender"].value = null;
  document.forms["emp-form"]["team"].value = null;
  document.forms["emp-form"]["id-type"].value = null;
  modal.classList.add("modal-bg-active");
});

close.addEventListener("click", removeClass);

function removeClass() {
  modal.classList.remove("modal-bg-active");
}

const localStorageEmployees = JSON.parse(localStorage.getItem("employees"));

var emps =
  localStorage.getItem("employees") !== null ? localStorageEmployees : [];

function addEmployee(e) {
  e.preventDefault();
  var fname = document.forms["emp-form"]["first-name"];
  var mname = document.forms["emp-form"]["middle-name"];
  var lname = document.forms["emp-form"]["last-name"];
  var mail = document.forms["emp-form"]["email"];
  var phone = document.forms["emp-form"]["mobile"];
  var gen = document.forms["emp-form"]["gender"];
  var age = document.forms["emp-form"]["age"];
  var team = document.forms["emp-form"]["team"];
  var mang = document.forms["emp-form"]["mang"];
  var addr1 = document.forms["emp-form"]["addr-1"];
  var addr2 = document.forms["emp-form"]["addr-2"];
  var city = document.forms["emp-form"]["city"];
  var state = document.forms["emp-form"]["state"];
  var pin = document.forms["emp-form"]["pincode"];
  var idt = document.forms["emp-form"]["id-type"];
  var idn = document.forms["emp-form"]["id-number"];

  const item = {
    id: Math.floor(Math.random() * 1000),
    firstname: fname.value,
    middlename: mname.value,
    lastname: lname.value,
    email: mail.value,
    mobile: phone.value,
    gender: gen.value,
    age: age.value,
    team: team.value,
    manager: mang.value,
    address1: addr1.value,
    address2: addr2.value,
    city: city.value,
    state: state.value,
    pincode: pin.value,
    idtype: idt.value,
    idnumber: idn.value,
  };

  fname.value = null;
  mname.value = null;
  lname.value = null;
  mail.value = null;
  phone.value = null;
  gen.value = null;
  age.value = null;
  team.value = null;
  mang.value = null;
  addr1.value = null;
  addr2.value = null;
  city.value = null;
  state.value = null;
  pin.value = null;
  idt.value = null;
  idn.value = null;

  emps.push(item);
  addEmployeeDOM(item);
  updateLocalStorage();
  removeClass();
}

function updateLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(emps));
}

function addEmployeeDOM(employee) {
  const item = document.createElement("div");
  item.classList.add("employee-details");
  item.innerHTML = `<span class="e-name">${
    employee.firstname + " " + employee.lastname
  }</span><span class="e-gen">${employee.gender}</span><span class="e-age">${
    employee.age
  }</span><span class="e-team">${employee.team}</span><span class="e-mang">${
    employee.manager
  }</span><button class="view-det" onclick="openDetails(${
    employee.id
  })">DETAILS</button><button class="del-emp" onclick="removeEmployee(${
    employee.id
  })">DELETE</button>`;

  emp.appendChild(item);
}

function removeEmployee(id) {
  emps = emps.filter((employee) => employee.id !== id);
  updateLocalStorage();
  init();
}

function openDetails(id) {
  window.open("details.html?id=" + id, "_self");
}

function init() {
  emp.innerHTML = "";
  emps.forEach(addEmployeeDOM);
}

init();
