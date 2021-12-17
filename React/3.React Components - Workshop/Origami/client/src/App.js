
import Header from './Components/Header'
import Menu from './Components/Menu'
import style from './App.module.css';

function App() {
    return (
        <div className={style.app}>
            <Header />
            <Menu />
        </div>
    );
}

export default App;
