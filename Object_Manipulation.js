const books = [
    {
        title:'This is my first books',
        author:'this is my author first',
        year:1996,
    },
    {
        title:'This is my second books',
        author:'this is my author two',
        year:2023,
    },
    {
        title:'This is my third books',
        author:'this is my author third',
        year:2013,
    }
]

const titles = (books)=>{
    const title = books.map(book=> book.title);
    return title;
}
console.log(titles(books));