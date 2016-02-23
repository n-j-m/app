
/**
 * hello component.
 * renders an h1 saying hello to the given name prop.
 * @param  {object} options.name The name we're saying hi to
 * @return {DOMElement}          The generated DOMElement
 */
export default function component({name}) {
  const h1 = document.createElement('h1');

  h1.appendChild(document.createTextNode(`hi, ${name} :}`));

  return h1;
}