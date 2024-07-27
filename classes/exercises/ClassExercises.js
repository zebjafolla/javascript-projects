// Define your Book class here:
const todaysDate = 2024;

class Book{
    constructor(title, author, copyRightDate, isbn, numberPages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyRightDate = copyRightDate;
        this.isbn = isbn;
        this.numberPages = numberPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
    check(timesCheckOut){
        if(timesCheckOut > 100)
        {
            discared = true;
        }
    }
        
    
}

class Manual extends Book{
    constructor(title, author, copyRightDate, isbn, numberPages, timesCheckedOut, discarded)
    {
        super(title, author, copyRightDate, isbn, numberPages, timesCheckedOut, discarded);
        }
    
    check(){
        if (todaysDate - this.copyRightDate > 5)
            {
                this.discarded = true;
                return `${this.title} has been discarded because it is older than 5 years old`;
            }
    }
}

class Novel extends Book{
    constructor(title, author, copyRightDate, isbn, numberPages, timesCheckedOut, discarded)
    {
        super(title, author, copyRightDate, isbn, numberPages, timesCheckedOut, discarded);
    }
    checkOut(times){
        this.timesCheckedOut += times;
        return `${this.title} has been checked out ${this.timesCheckedOut} times.`;
    } 
}


// Define your Manual and Novel classes here:


// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
let shuttleManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "No");



// Code exercises 4 & 5 here:

console.log(prideAndPrejudice.checkOut(5));
console.log(shuttleManual.check(this.copyRightDate));