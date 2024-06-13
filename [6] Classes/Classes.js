class Book {
  constructor(name, author, releaseYear) {
    this.name = name
    this.author = author
    this.releaseYear = releaseYear
  }
  showBookInfo() {
    console.log(`Название книги: ${this.name}`)
    console.log(`Автор книги: ${this.author}`)
    console.log(`Год публикации: ${this.releaseYear}`)
  }
}

class Ebook extends Book {
  constructor(name, author, releaseYear, bookPrice) {
    super(name, author, releaseYear)
    this.bookPrice = bookPrice
  }
  showBookInfo() {
    super.showBookInfo()
    console.log(`Цена книги: ${this.bookPrice}\n`)
  }
}

const firstEBook = new Ebook(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  1925,
  6.99
)
firstEBook.showBookInfo()

const secondEBook = new Ebook(
  'Catch Me If You Can',
  'Frank Abagnale Jr.',
  1980,
  9.99
)
secondEBook.showBookInfo()
