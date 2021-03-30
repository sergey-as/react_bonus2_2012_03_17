import React, {Component} from 'react';

class PictureComponent extends Component {
    render() {
        // console.log(this.props.msg);
        let {msg, iUrl, txt} = this.props;

        return (
            <div>
                <h3>{msg}</h3>
                {/*<img src="../../Bart_Simpson_200px.png" alt="Bart_Simpson_200px"/>*/}
                <img src={iUrl} alt=""/>
                <p>{txt}</p>
            </div>
        );
    }
}

export default PictureComponent;