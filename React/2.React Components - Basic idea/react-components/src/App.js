
import "./App.css";
import Heading from './components/Heading';
import BookList from "./components/BookList";
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
    return (
        <div className="site-wrapper">
            <Heading>Our Custom Library</Heading>
            <Counter />
            
            <BookList />
            <Footer />
        </div>

    );
}

export default App;
