import React, {Component} from 'react'

export default class DefaultKlasa extends Component{
    constructor(){
        super()
        console.log(this)
    }

render(){
    //return <span>Default DefaultKlasa</span>
    return <span>DefaultKlasa {this.props.children}</span>
}
}

export const KlasaOld = React.createClass({
    render: function(){
        return <span>Klasa KlasaOld</span>
    }
})