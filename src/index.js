import './styles/main.scss'; 

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hola', 'caracola'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());