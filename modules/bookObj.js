import Books from './Books'; // assuming that Books class is imported from another file

export default function bookObj() {
  const bookObj = new Books();
  this.addButton.addEventListener('click', () => {
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
  });
}
