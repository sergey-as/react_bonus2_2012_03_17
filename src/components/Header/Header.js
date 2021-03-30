import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    // greeting = () => {console.log('hello');};
    state = {counter: 0};

    increment = () => {
        this.setState({counter: ++this.state.counter})
        console.log(this.state.counter);
    };

    render() {
        console.log('render');
        return (
            <div className={'target'}>
                {/*<button>click me</button>*/}
                <button
                    // onClick={this.greeting}>
                    onClick={this.increment}>
                    {/*click me {this.counter}*/}
                    click me {this.state.counter}
                </button>
            </div>
        );
    }
}

export default Header;