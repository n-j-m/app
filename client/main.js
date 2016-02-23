import component from './component';

/**
 * The main renderer function
 */
function main() {
  const rootEl = document.querySelector('#root');

  rootEl.appendChild(component({name: 'Nick'}));
}

document.addEventListener('DOMContentLoaded', main);