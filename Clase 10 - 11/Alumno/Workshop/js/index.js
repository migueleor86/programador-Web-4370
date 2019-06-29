window.onload = function () {
  // constants 
  const KEY_STORE = 'keyStore'
  // bring elements
  var firstName = document.getElementById('firstName')
  var lastName = document.getElementById('lastName')
  var email = document.getElementById('email')
  var dni = document.getElementById('dni')
  var addStudentButton = document.getElementById('addStudentButton')
  var mainList = document.getElementById('mainList')
  // bind events validations
  firstName.onblur = validateNotEmpty
  lastName.onblur = validateNotEmpty
  email.onblur = validateEmail
  dni.onblur = validateDni
  addStudentButton.onclick = addStudent
  // initialize
  addStudentButton.disabled = true
  var dataStore = getDataStore(KEY_STORE)
  renderStudentsList(mainList, dataStore)
  // render functions
  function renderStudentsList(list, students) {
    for (var i = 0; i < students.length; i++) {
      console.log(students[i])
      list.appendChild(createStudentNode(students[i]))
    }
  }

  function createStudentNode(student) {
    var li = document.createElement('li')
    li.className = 'list-group-item'
    var h1 = document.createElement('h1')
    h1.innerHTML = student.firstName + ' ' + student.lastName
    var h3 = document.createElement('h3')
    h3.innerHTML = 'DNI: ' + student.dni
    var p = document.createElement('p')
    p.innerHTML = `E-mail: ${student.email}`
    li.appendChild(h1)
    li.appendChild(h3)
    li.appendChild(p)
    return li
  }

  function getDataStore(key) {
    var store = getLocalList(key)
    if (!store) {
      setLocalList(key, [])
    } else {
      return store
    }
    return []
  }
  // data manipulation
  function addStudent() {
    var student = getStudentFromForm()
    dataStore.push(student)
    // actualiza en el local store la info nueva
    setLocalList(KEY_STORE, dataStore)
    clearStudentForm()
    mainList.appendChild(createStudentNode(student))
    addStudentButton.disabled = true
  }

  function clearStudentForm() {
    firstName.value = ''
    lastName.value = ''
    dni.value = ''
    email.value = ''
  }

  function getStudentFromForm() {
    return {
      firstName: firstName.value,
      lastName: lastName.value,
      dni: dni.value,
      email: email.value,
    }
  }
  // localStorage functions
  function setLocalList(key, array) {
    var valorKey = typeof key === 'string'
    var valorArray = Array.isArray(array)
    if (!valorKey || !valorArray) {
      return false
    }
    arrayStr = JSON.stringify(array)
    localStorage.setItem(key, arrayStr)
    return true
  }

  function getLocalList(key) {
    var nombreKey = typeof key === 'string'
    if (!nombreKey) {
      return false
    }
    var value = localStorage.getItem(key)
    if (!value) { // value === null
      return false
    }
    var parsedArray = JSON.parse(value)
    Array.isArray(parsedArray)
    if (Array.isArray(parsedArray)) {
      return parsedArray
    }
    return false
  }
  // validations
  function allValidationsOk() {
    var allValids = document.getElementsByClassName('is-valid')
    if (allValids.length === 4) {
      addStudentButton.disabled = false
    }
  }

  function dniExists(dni) {
    for (var i = 0; i < dataStore.length; i++) {
      if (dataStore[i].dni === dni) {
        return true
      }
    }
    return false
  }

  function validateDni(event) {
    var inputNode = event.target
    var value = event.target.value
    var dni = parseInt(value)
    if (isNaN(dni) || dni <= 100000 || dniExists(value)) {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
      inputNode.value = ''
    } else {
      inputNode.classList.add('is-valid')
      inputNode.classList.remove('is-invalid')
    }
    allValidationsOk()
  }

  function validateEmail(event) {
    var inputNode = event.target
    var value = event.target.value
    if (value.indexOf('.') > -1 && (value.indexOf('@') > -1)) {
      inputNode.classList.add('is-valid')
      inputNode.classList.remove('is-invalid')
    } else {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
    }
    allValidationsOk()
  }

  function validateNotEmpty(event) {
    var inputNode = event.target
    var value = inputNode.value
    if (stringIsNotEmpty(value)) {
      inputNode.classList.add('is-valid')
      inputNode.classList.remove('is-invalid')
    } else {
      inputNode.classList.add('is-invalid')
      inputNode.classList.remove('is-valid')
    }
    allValidationsOk()
  }

  function stringIsNotEmpty(string) {
    if (string.length > 0) {
      return true
    }
    return false
  }
}