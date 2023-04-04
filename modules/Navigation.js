// Access the Nav List

const addPage = document.querySelector('.addpage');
const contactPage = document.querySelector('.acontact');
const listPage = document.querySelector('.listpage');
const newSection = document.querySelector('.newbooks');


// Access the section to display or not 

listPage.addEventListener ('click', () => {
  booksSection.style.display = 'none';
  contactSection.style.display = 'none';
  newSection.style.display = 'block';
});

addPage.addEventListener('click', () => {
  booksSection.style.display = 'none';
  contactSection.style.display = 'none';
  newSection.style.display = 'block';
});

contactPage.addEventListener('click', () => {
  booksSection.style.display = 'none';
  contactSection.style.display = 'none';
  newSection.style.display = 'block';
});