
class Book {
    constructor(id, title, ISBN, publishedDate, author, price){
        this.id = id;
        this.title = title;
        this.isbn = ISBN;
        this.publishedDate = publishedDate;
        this.publisher = publisher;
        this.page = page;
        
    }

    save(){
        collection.push(this);
        console.log(this);
    }
}