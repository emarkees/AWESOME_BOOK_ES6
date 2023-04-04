import Book  from '/book.js';

class Books {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('bookList')) || [];
  }

  remove = (idSelected) => {
    document.getElementById(idSelected).parentElement.remove();
    this.bookList.splice(this.bookList.findIndex((e) => e.title + e.author === idSelected), 1);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
  }

  add = (title, author) => {
    const item = new Books(title, author)
    this.bookList.push(item);
    item.insertAdjacentHTML(
      'beforeend',
      `
      <div class="itemcontainer"><p class="content">"${item.title}" by ${item.author}</p><button type="button" class="remove shadow" id="${item.title}${item.author}">Remove</button></div>
    `,
    );

    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    const $removeButton = document.getElementById(`${item.title}${item.author}`);
    $removeButton.addEventListener('click', () => {
      this.remove(`${item.title}${item.author}`);
    });
  }

  
  addButton = document.addEventListener('click', () => {
    const bookObj = new Book();
    if (this.title.value !== '' && this.author.value !== '') {
      bookObj.add(this.title.value.trim(), this.author.value.trim());
      this.error.style.display = 'none';
      this.title.value = '';
      this.author.value = '';
    } else {
      this.error.style.display = 'block';
      setTimeout(() => {
        this.error.style.display = 'none';
      }, 1500);
    }
  })
  
  
}export default Books;
