import React, { useState } from 'react'
import styles from "./modal.module.scss";

const Modal =()=>{
    const [open, setOpen]=useState(true)
    const closeModal=()=>{
        setOpen((prev)=>!prev)
    }

    return(
        <>
        { !!open && <div className={styles.modal}>
            <div className={styles.modal_header}>Modal Header
            

            <span className={styles.modal_close} onClick={closeModal}>x</span>
            </div>
            <div className={styles.modal_content}>Modal Content</div>
            <div className={styles.modal_footer}>Modal Footer</div>
        </div>}
        </>
    )
}

export default Modal

