
import Header from './Components/Header'
import Menu from './Components/Menu'
import Main from './Components/Main'
import Footer from './Components/Footer'
import style from './App.module.css';

function App() {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Menu />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
