# GraphQL

This is a cheat sheet repo for GraphQL, a query language for APIs

#### GraphQL vs REST

- With REST, the client has to make multiple requests to get the data it needs. With GraphQL, the client can specify exactly what data it needs in a single request.

## Run the server

```bash
npm i
npm run dev
```

- The server will be running on `http://localhost:4000/`

## Open the GraphQL playground

- Open the GraphQL playground on `http://localhost:4000/graphql`

## Run the frontend app configured with Apollo Client

> Note: Make sure the server is running

```bash
cd client
npm i
npm run dev
```

- The frontend app will be running on `http://localhost:5173/`

> Now you can go in `App.jsx` and start writing your queries and mutations

## GraphQL queries

> A GraphQL query is used to read or fetch values while a mutation is used to write or post values

- Fetch all books

```graphql
{
  books {
    id
    name
  }
}
```

- Fetch all books with their authors

```graphql
{
  books {
    id
    name
    author {
      name
    }
  }
}
```

- Fetch a single book

```graphql
{
  book(id: 1) {
    id
    name
    author {
      name
    }
  }
}
```

### GraphQL mutations

- Add a book

```graphql
mutation {
  addBook(name: "The Pragmatic Programmer", authorId: 1) {
    id
    name
  }
}
```

- Delete a book

```graphql
mutation {
  deleteBook(id: 1) {
    name
  }
}
```
