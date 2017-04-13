import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

require('../styles/style.css')
require('../styles/animation.css')
export default class ComponentWithStyle extends Component{
    render(){
        return(
            /*<span style = {{color:'red', fontSize:20}}>
                text text text 
                <a style={true?{color:'orange'}:{color:'green'}} className='link'>New</a>
                <br/>
                <a className={true?'link2':'link'}>New2</a>

            </span>*/
            <ReactCSSTransitionGroup
                component = 'div'
                transitionName = 'animation-slide'
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <div key={1} style={{color:'gray', fontSize:22}}> Ovo je animacija NEW 2 </div>
            </ReactCSSTransitionGroup>
        )
    }
}