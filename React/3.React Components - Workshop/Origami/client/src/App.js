import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import * as postService from './services/postService';

import Header from './Components/Header';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Footer from './Components/Footer';
import style from './App.module.css';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            })
    }

    render() {
        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Menu />
                    <Main posts={this.state.posts} />
                </div>
                <Footer />
            </div>
        )
    }
}
// function App() {
//     return (
//         <div className={style.app}>
//             <Header />
//             <div className={style.container}>
//                 <Menu />
//                 <Main />
//             </div>
//             <Footer />
//         </div>
//     );
// }


export default App;
