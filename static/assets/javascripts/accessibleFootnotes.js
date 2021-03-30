/**
 * Make Hugo's footnotes accessible.
 */

/**
 * Add a title to the footnotes wrapper.
 *
 * @param {Element} footnotes - Footnotes wrapper.
 * @param {String} title - Text for the title element.
 * @param {String} id - ID for the title element.
 */
const addTitle = (footnotes, title, id) => {
  if (!footnotes || !title || !id) return;

  const element = document.createElement('h2');
  const text = document.createTextNode(title);

  element.appendChild(text);
  element.classList.add('u-hidden-visually');
  element.setAttribute('id', id);

  footnotes.insertBefore(element, footnotes.firstChild);
};

/**
 * Set attribute to HTML selector.
 *
 * @param {String} selector - Selector to set attribute for.
 * @param {String} attribute - Attribute to set.
 * @param {String} value - Value for the attribute.
 */
const setAttributeValue = (selector, attribute, value) => {
  if (!selector || !attribute || !value) return;

  const items = document.querySelectorAll(selector);

  if (!items.length) return;

  for (const item of items) {
    item.setAttribute(attribute, value);
  }
};

/**
 * @param {String} selector - Selector of the footnotes wrapper.
 * @param {String} title - Title for screen readers.
 * @param {String} returnText - 'Back to content' text.
 */
export default function({
  selector = '.footnotes',
  title = 'Footnotes',
  returnText = 'Back to content'
} = {}) {
  const footnotes = document.querySelector(selector);
  const id = 'footnotes-label';

  if (!footnotes) return;

  addTitle(footnotes, title, id);
  setAttributeValue('.footnote-ref a', 'aria-describedby', id);
  setAttributeValue('.footnote-return', 'aria-label', returnText);
}
