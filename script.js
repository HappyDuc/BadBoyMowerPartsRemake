function dropDown() {
  const dropDownButton = document.getElementById("dropDownButton");
  const dropDownResetButton = document.getElementById("dropDownResetButton");
  const headerNavbarDropdown = document.getElementById("headerNavbarDropdown");

  dropDownButton.style.display = "none";
  dropDownResetButton.style.display = "";
  headerNavbarDropdown.style.display = "";
  
}

function dropDownReset() {
  const dropDownButton = document.getElementById("dropDownButton");
  const dropDownResetButton = document.getElementById("dropDownResetButton");
  const headerNavbarDropdown = document.getElementById("headerNavbarDropdown");

  dropDownButton.style.display = "";
  dropDownResetButton.style.display = "none";
  headerNavbarDropdown.style.display = "none";
}


function addFormInputs() {
  let numberOfInputs = document.getElementById("addNumberOfInputs");
  let originalInput = document.getElementById("partNumberInput");
  let partNumberForm = document.getElementById("partNumberForm");
  let count = document.querySelectorAll('#partNumberForm .extraEntries').length;

  for (let i = 0; i < numberOfInputs.value; i++) {
    let newElement = originalInput.cloneNode(true);
    newElement.id = 'id="extraEntry' + String(count + i) + '"';
    newElement.classList.add("extraEntries");
    partNumberForm.appendChild(newElement);
  }
}

function removeFormInput(elementId) {
  let element = document.getElementById(elementId);
  remove(element.parentNode);
}