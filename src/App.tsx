import ApolloProviderWrapper from './context/ApolloProvider';
import BookList from './pages/BookList';

const App = () => {
  return (
    <ApolloProviderWrapper>
      <BookList />
    </ApolloProviderWrapper>
  );
};

export default App;
