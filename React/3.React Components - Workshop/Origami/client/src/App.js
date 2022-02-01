import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import * as postService from './services/postService';

import Header from './Components/Header';
import Menu from './Components/Menu';
import Main from './Components/Main';
import Footer from './Components/Footer';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import style from './App.module.css';


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            selectedPost: null,
        }
    }
    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            })
    }
    onMenuItemClick(id) {
        this.setState({ selectedPost: id })
    }
    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts
        } else {
            return [this.state.posts.find(x => x.id === this.state.selectedPost)]
        }
    }

    render() {
        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Menu onMenuItemClick={this.onMenuItemClick.bind(this)} />
                    <Switch>
                        <Route path="/" exact>
                            <Main posts={this.getPosts()} />
                        </Route>
                        <Route path="/about" component={About} />
                        <Route path="/contact-us" component={ContactUs} />
                    </Switch>
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
