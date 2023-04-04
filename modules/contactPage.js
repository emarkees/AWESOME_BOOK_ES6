export default function contactPage() {
  contactPage.addEventListener('click', () => {
    booksSection.style.display = 'none';
    contactSection.style.display = 'none';
    newSection.style.display = 'block';
  });
}
