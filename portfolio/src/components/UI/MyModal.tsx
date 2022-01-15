import { ReactNode } from 'react'
import Modal from '@mui/material/Modal';
import './MyModal.css'
export default function MyModal(props: { open: boolean, handleClose: () => void, children: ReactNode, className?:string }) {
    return (
        <Modal
            open={props.open}
            onBackdropClick={props.handleClose}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={`modal`}
        >
            <div className={`modal-content ${props.className}`}>
                {props.children}
            </div>
        </Modal>
    )
}
