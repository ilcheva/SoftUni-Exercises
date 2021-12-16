import { Component } from "react";
import bookService from "../services/bookService";
import Book from './Book';


class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    bookClicked(title) {
        console.log(`This book ${title} has been added to basket!`);
    }
    componentDidMount() {
        bookService.getAll()
            .then(books =>
                this.setState(() => ({ books }))
            )
    }
    render() {

        return (
            < div className="book-list" >
                <h2>Our Book Collection</h2>

                {this.state.books.map(x => {
                    return <Book
                        key={x.id}
                        title={x.title}
                        description={x.description}
                        clickHandler={this.bookClicked.bind(this, x.title)} />
                })}
                {/* <Book title={this.props.title} description="wizards and stuff" />
                <Book title="Programming with Js" description="Guide to programming" />
                <Book title="Klara and the Sun" description="androids with dreams" /> */}

            </div >
        )
    }
}
export default BookList