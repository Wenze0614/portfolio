import React,{ReactNode} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './MyAccordion.css'
import { useState } from 'react';
type AccordionProps = {
    fillColor?:string,
    className?:string,
    label?:string,
    children?:ReactNode
}
export default function MyAccordion(props:AccordionProps) {
    const [active, setActive] = useState(false)
    return (
        <div className={`accordion-container ${props.className? props.className:''}`} >
            <div className={`accordion-background ${active&&"active"}`}></div>
            <Accordion className="accordion-item" onClick={()=>{console.log('clicked');setActive(!active)}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h3>{props.label}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        {props.children}
                    </AccordionDetails>
                </Accordion>
        </div>
    )
}
