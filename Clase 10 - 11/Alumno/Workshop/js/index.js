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
  var deleteDni = document.getElementById('deleteDni')
  var deleteStudentButton = document.getElementById('deleteStudentButton')
  var searchStudentButton = document.getElementById('searchStudentButton')
  var searchText = document.getElementById('searchText')
  var searchList = document.getElementById('searchList')

  // bind events validations, asignamos el evento
  firstName.onblur = validateNotEmpty
  lastName.onblur = validateNotEmpty
  email.onblur = validateEmail
  dni.onblur = validateDni
  addStudentButton.onclick = addStudent
  deleteStudentButton.onclick = deleteStudent
  searchStudentButton.onclick = searchStudent

  // initialize
  addStudentButton.disabled = true // deshabilito el boton , viene habilitado por defecto
  var dataStore = getDataStore(KEY_STORE) // traer la info de datastore, guardada en forma string
  renderStudentsList(mainList, dataStore)

  // render functions

  function renderStudentsList(list, students) { // crea una un estudiante en las lista del DOM
    while (list.hasChildNodes()) { // mientras haya hijos en list
      list.removeChild(list.firstChild); // remueve el hijo de list
    }
    for (var i = 0; i < students.length; i++) { // iterando el data store
      console.log(students[i])
      list.appendChild(createStudentNode(students[i]))
    }
  }

  function createStudentNode(student) { // crea un nodos Student y lo devuelve
    var li = document.createElement('li')
    li.id = student.dni
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

  function getDataStore(key) { //
    var store = getLocalList(key)
    if (!store) {
      setLocalList(key, [])
    } else {
      return store
    }
    return []
  }

  // data manipulation
  function addStudent() { // se ejecuta cuando haga clic en el boton
    var student = getStudentFromForm()
    dataStore.push(student) // .push mete un elemento nuevo en el array
    // actualiza en el local store la info nueva
    setLocalList(KEY_STORE, dataStore) // meter el dataStore actulizada en el KEY_STORE
    clearStudentForm() // limpia la info para no volverla a agregar con el boton
    mainList.appendChild(createStudentNode(student)) // crear el node para el li creado
    addStudentButton.disabled = true // deshabilito el boton
  }

  function deleteStudent() {
    // tomar el valor del input dniDelete (ya esta declarada)

    // buscar ese valor en el dataStore
    var dniTobedeleted = deleteDni.value // almacena el valor de deleteDni en la var dniTobedeleted
    if (removeStudentFromDatastore(dataStore, dniTobedeleted)) { // si removeStudentFromDatastore es true
      // persistir dataStore en localStore 
      setLocalList(KEY_STORE, dataStore) // persistir, actualiza el localStore reemplanzadola por la info del dara store
      // remover el student del dom 
      var liToBeRemoved = document.getElementById(dniTobedeleted)
      liToBeRemoved.remove()
    }
  }

  function searchStudent() {
    // necesito el texto del student que busco searchText.value
    var textToBeSearched = searchText.value
    var studentsWhoMatchSearch = []
    // buscar en el dataStore los elementos que coincidan con la busqueda
    for (var i = 0; i < dataStore.length; i++) {
      var student = dataStore[i];
      var isInFirstName = student.firstName.indexOf(textToBeSearched) > -1
      var isInLastName = student.lastName.indexOf(textToBeSearched) > -1
      var isInEmail = student.email.indexOf(textToBeSearched) > -1
      var isInDni = student.dni.indexOf(textToBeSearched) > -1
      if (isInFirstName || isInLastName || isInEmail || isInDni) {
        studentsWhoMatchSearch.push(student)
      }
      renderStudentsList(searchList, studentsWhoMatchSearch)
    }
  }


  function removeStudentFromDatastore(dataStore, dni) {
    for (var i = 0; i < dataStore.length; i++) {
      var student = dataStore[i];
      if (student.dni === dni) { // si el dni almacenado  en el datastor conside con el dni  ingresado
        dataStore.splice(i, 1); // elimina 1 elemento en la picision i del array, i es la posicion de dni en el array que conincide
        return true
      }
    }
    return false
  }

  function clearStudentForm() {
    firstName.value = ''
    lastName.value = ''
    dni.value = ''
    email.value = ''
  }

  function getStudentFromForm() {
    return {
      firstName: firstName.value, // firstName:  es la key y firstName.value  es valor
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

  function getLocalList(key) { // verifica la  key
    var nombreKey = typeof key === 'string'
    if (!nombreKey) {
      return false
    }
    var value = localStorage.getItem(key) // interactua con el local store
    if (!value) { // value === null
      return false
    }
    var parsedArray = JSON.parse(value) // parsea la info del local store
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

  function dniExists(dni) { // si el dni exite 
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