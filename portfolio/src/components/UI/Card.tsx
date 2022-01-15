import {ReactNode} from 'react'
import './Card.css'
export default function Card(props:{children:ReactNode,className?:string}) {
    return (
        <div className={`Card ${props.className ? props.className:""}`}>
            {props.children}
        </div>
    )
}
