export default function add (title, author)  {
  
    const item = { title, author };
    this.bookList.push(item);
    $books.insertAdjacentHTML(
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