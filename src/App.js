import React, {Component} from 'react';
import PictureComponent from "./components/PictureComponent";
import Header from "./components/Header/Header";
import User from "./components/User/User";

// let data = [
//     {msg: 'Hello 1', iUrl: '../../Bart_Simpson_200px.png', txt: 'asdkjfh'},
//     {msg: 'Hello 2', iUrl: '../../Bart_Simpson_200px.png', txt: 'o;kmnklnm'},
//     {msg: 'Hello 3', iUrl: '../../Bart_Simpson_200px.png', txt: 'weuirweuit'},
//     {msg: 'Hello 4', iUrl: '../../Bart_Simpson_200px.png', txt: 'pqweio0u9asfdn'},
// ]

class App extends Component {

    state = {
        users: []
    }

    constructor(props, context) {
        super(props, context);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value});
            });
    }

    render() {
        console.log('render');
        let {users} = this.state;
        return (
            <div>
                {/*<PictureComponent msg ={'Hello 1'} iUrl={'../../Bart_Simpson_200px.png'}/>*/}
                {/*<PictureComponent msg ={'Hello 2'} iUrl={'../../Bart_Simpson_200px.png'}/>*/}
                {/*<PictureComponent msg ={'Hello 3'} iUrl={'../../Bart_Simpson_200px.png'}/>*/}
                {/*<PictureComponent msg ={'Hello 4'} iUrl={'../../Bart_Simpson_200px.png'}/>*/}
                <Header/>
                {/*{*/}
                {/*    // data.map(value => (<PictureComponent msg={value.msg} iUrl={value.iUrl}/>))*/}
                {/*    data.map(value => (<PictureComponent {...value}/>))*/}
                {/*}*/}

                {
                    users.map(value => <User item={value}/>)
                }
            </div>
        );
    }
}

export default App;