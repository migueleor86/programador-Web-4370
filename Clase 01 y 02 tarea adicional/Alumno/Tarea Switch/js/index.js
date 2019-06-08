var caracter = prompt('Insertar Caracter')
var caracterMinuscula = caracter.toLowerCase()

switch(caracterMinuscula){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Es una vocal')
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'ñ':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
        console.log('Es una consonante')
        break;
        default:
            console.log('Es un simbolo: $')
            break;

}

