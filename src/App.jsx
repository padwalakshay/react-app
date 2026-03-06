import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container';
// import Parent from './components/practice/Parent';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary fallback="something went wrong">
      {/* <Parent /> */}
    <Container/>
    </ErrorBoundary>
  )
}

export default App
