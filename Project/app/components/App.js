import React,{Component} from 'react'
import DefaultKlasa from './Klase'
import PropsParent from './PropsParent.js'
import ComponentState from './ComponentState'
import ComponentWithStyle from './compcss'
import Attendence from './studenti/StudentList'

const poruka = 'Ovo je nova porukaaaa'
const element = (<span>Pozz iz React-a</span>)
const element1 = (<span>{poruka}</span>)

const element2 = React.createElement(
    'h2',
    {className: 'pozdrav'},
    'React.createElement - Hello, worldddd!'
)

const element3 = (
    <div>
        {element2}
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
)

export default class App extends Component{
    render(){
        //return <span>Pozz iz React-a</span>
        //return element
        //return element1
        //return element2
        //return element3
        //return element3
        //return <div>{element1}{element2}{element3}</div>
        //return <DefaultKlasa/>
         //return  <DefaultKlasa ime={'misko'}>Neki children {element2}</DefaultKlasa>     
         //return <ComponentWithStyle/>
         //return <PropsParent />
         //return <ComponentState />
         return <Attendence />
    }
}