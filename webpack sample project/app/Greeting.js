import React, { Component } from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入
class Greeter extends Component {
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
                <h1>hehe</h1>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter