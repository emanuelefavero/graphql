import './App.css'
import { useQuery, gql } from '@apollo/client'

// NOTE: REMEMBER TO IMPLEMENT APOLLO PROVIDER IN main.jsx
// TIP: OPEN http://localhost:4000/graphql TO TEST QUERIES AND MUTATIONS

// Define a GraphQL query
const GET_BOOKS = gql`
  query {
    books {
      name
    }
  }
`

function App() {
  // Use the useQuery hook to make GraphQL queries from within the component
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  const books = data.books

  return (
    <>
      <h1>GraphQL Data</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
