// import the class book from book.js modules

import Books from './books.js';

// Access the Nav List

const $title = document.querySelector('.title');
const $author = document.querySelector('.author');
const $addButton = document.querySelector('.addbutton');
const $error = document.querySelector('.error');
const $addPage = document.querySelector('.addpage');
const $contactPage = document.querySelector('.acontact');
const $listPage = document.querySelector('.listpage');
const $booksSection = document.querySelector('.books');
const $newSection = document.querySelector('.newbooks');
const $contactSection = document.querySelector('.contactinfo');
const bookObj = new Books();

// Access the section to display or not
const Navigation = () => {
  $addButton.addEventListener('click', () => {
    if ($title.value !== '' && $author.value !== '') {
      bookObj.add($title.value.trim(), $author.value.trim());
      $error.style.display = 'none';
      $title.value = '';
      $author.value = '';
    } else {
      $error.style.display = 'block';
      setTimeout(() => {
        $error.style.display = 'none';
      }, 1500);
    }
  });

  $listPage.addEventListener('click', () => {
    $booksSection.style.display = 'none';
    $contactSection.style.display = 'none';
    $newSection.style.display = 'block';
  });

  $addPage.addEventListener('click', () => {
    $booksSection.style.display = 'none';
    $contactSection.style.display = 'none';
    $newSection.style.display = 'block';
  });

  $contactPage.addEventListener('click', () => {
    $booksSection.style.display = 'none';
    $contactSection.style.display = 'none';
    $newSection.style.display = 'block';
  });
}; export default Navigation;
