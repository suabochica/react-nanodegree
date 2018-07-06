# MyReads Project Solution

This is my final assessment project for Udacity's React Fundamentals course.

### Run the project

The zip file not have the `node_modeules` folder so to run the project please run:

1. `npm i`
2. `yarn start` or `npm start`

### Components

- `<Booklist />` Stateless Component that represent a list of books. Sort the books in their respective shelf.
- `<Bookshelf />` Stateless Component that represent a bookshelf.
- `<Book />`, Stateless Component that represent a book with a title, an author and a cover.
- `<Search />` Statefull Component that retrieve the query a executes the search.
- `<Shelfchanger />` Statless Component that hande the event to change the book shelf

### Hierarchy Components
```js
    <App>
        <Booklist>
            <Bookshelf> // x3
                <Book>
                    <Shelfchanger>
                    <Shelfchanger />
                <Book />
            <Bookshelf />
        <Booklist />
        <Search>
            <Book>
                <Shelfchanger>
                <Shelfchanger />
            <Book />
        <Search />
    <App />
```

### Events
- `onChangeBookshelf`: change a book shelf
- `onInputChangeEvent`: retrieve the query to execute the search.