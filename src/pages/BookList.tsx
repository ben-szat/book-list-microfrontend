import { Button, Typography } from "@mui/material";
import { GET_BOOKS } from "../apollo/queries/GET_BOOKS";
import { useQuery } from "@apollo/client";
import { Book } from "../types/Book";

const BookList = () => {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_BOOKS);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;
  if (!data) return <Typography>No data found</Typography>;

  return (
    <>
     {data.books.map((book: Book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <p>{book.author}</p>
          <Button variant="contained" color="primary">
            View
          </Button>
        </div>
      ))}
    </>
  );
  
};

export default BookList;
