let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    describe: function() {
      console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
  };
  
  // Call the method
  book.describe();
  