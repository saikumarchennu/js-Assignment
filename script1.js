const s = window.location.search;
const urlParams = new URLSearchParams(s);
const id = urlParams.get("id");
if (id == null || id == "") {
  window.location.replace("index.html");
}

const localStorageEmployees = JSON.parse(localStorage.getItem("employees"));
var emps =
  localStorage.getItem("employees") !== null ? localStorageEmployees : [];

emp = emps.filter((employee) => employee.id == id)[0];
if (emp == undefined) {
  alert("USER NOT FOUND");
  window.location.replace("index.html");
}

var section = document.querySelector(".employee");
const item = document.createElement("div");
item.classList.add("emp-details");
item.innerHTML = `<a href="index.html" class="back">&larr;BACK</a>
<h2 class="name-header">${
  emp.firstname.toUpperCase() +
  " " +
  emp.middlename.toUpperCase() +
  " " +
  emp.lastname.toUpperCase()
}</h2>
<div class="detail">
  <span class="key"><strong>E-Mail</strong></span>
  <span class="value">${emp.email}</span>
</div>

<div class="detail">
  <span class="key"><strong>Mobile</strong></span>
  <span class="value">${emp.mobile}</span>
</div>

<div class="gen-age">
  <div class="detail gen">
    <span class="key"><strong>Gender</strong></span>
    <span class="value">${emp.gender}</span>
  </div>

  <div class="detail age">
    <span class="key"><strong>Age</strong></span>
    <span class="value">${emp.age}</span>
  </div>
</div>

<div class="team-mang">
  <div class="detail team">
    <span class="key"><strong>Team</strong></span>
    <span class="value">${emp.team}</span>
  </div>

  <div class="detail mang">
    <span class="key"><strong>Manager</strong></span>
    <span class="value">${emp.manager}</span>
  </div>
</div>

<div class="detail">
  <span class="key"><strong>Address</strong></span>
  <span class="value"
    >${
      emp.address1 +
      " " +
      emp.address2 +
      " " +
      emp.city +
      " " +
      emp.state +
      " " +
      emp.pincode
    }</span
  >
</div>

<div class="detail">
  <span class="key"><strong>ID Proof</strong></span>
  <div class="idproof">
    <span class="value">${emp.idtype}</span>
    <span class="value">${emp.idnumber}</span>
  </div>
</div>`;

section.appendChild(item);
