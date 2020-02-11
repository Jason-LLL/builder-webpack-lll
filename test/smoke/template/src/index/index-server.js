// import React from 'react';
// import './HelloWorld.less';
// import spng from './img/wechat.png';
// import { a } from './tree-shakeing';

const React = require('react');
const spng = require('./img/wechat.png');
const { a } = require('./tree-shakeing');
require('./HelloWorld.less');

const dataInital = window.initial_data || {};
console.log(dataInital);
console.log(typeof dataInital);
console.log(typeof dataInital === Object);
console.log(dataInital.data);
class HelloWorld extends React.Component {

    constructor() {
        super(...arguments);
    }

    // loadComponent(){
    //     import('./text.js').then( Text =>{
    //         console.log(Text);
    //         this.setState({
    //             Text: Text.default
    //         })
    //     })
    // }

    render() {
        const funcA = a();
        return (
            <div>
                <div className="helloworld-header">{funcA} hello world! this is a  beautiful night!!! i like it!!! do you agree</div>
                <img src={spng} />
            </div>
        )
    }
}

module.exports = <HelloWorld />




