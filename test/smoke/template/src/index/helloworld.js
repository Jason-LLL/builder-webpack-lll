import React from 'react';
import './HelloWorld.less';
import spng from './img/wechat.png';
import { a } from './tree-shakeing';

export default class HelloWorld extends React.Component {

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




