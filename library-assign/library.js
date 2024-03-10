class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
  }

  displayAvailableBooks() {
    console.log("Available Books:");
    this.books.forEach(book => {
      if (book.available) {
        console.log(`${book.title} by ${book.author}`);
      }
    });
  }

  borrowBook(title) {
    const book = this.findBook(title);
    if (book) {
      if (book.available) {
        book.available = false;
        console.log(`You have borrowed "${book.title}"`);
      } else {
        console.log(`"${book.title}" is not available for borrowing.`);
      }
    } else {
      console.log(`Book "${title}" not found in the library.`);
    }
  }

  returnBook(title) {
    const book = this.findBook(title);
    if (book) {
      book.available = true;
      console.log(`You have returned "${book.title}"`);
    } else {
      console.log(`Book "${title}" not found in the library.`);
    }
  }

  findBook(title) {
    return this.books.find(book => book.title === title);
  }
}

// Example usage:
const library = new Library();

library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("1984", "George Orwell");

library.displayAvailableBooks();

library.borrowBook("The Great Gatsby");
library.borrowBook("1984");
library.borrowBook("Animal Farm"); // This book is not in the library

library.displayAvailableBooks();

library.returnBook("The Great Gatsby");
library.returnBook("Animal Farm"); // This book is not in the library

library.displayAvailableBooks();
