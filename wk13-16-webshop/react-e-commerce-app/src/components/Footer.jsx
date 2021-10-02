import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-sub-container">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>demo@thegreenery.com</p>
            </div>
            <div className="footer-sub-container">
                
                <p>Live Demo by Manon Heijmans </p>
            </div>
            <div className="footer-sub-container">
                <FontAwesomeIcon icon={faPhone} />
                <p>0123-456789</p>
            </div>
        </div>
        
    )
}
