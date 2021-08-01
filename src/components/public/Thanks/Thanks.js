import React from 'react'
import Title from '../Title/Title'

import './thanks.css';

export const Thanks = () => {
    return (
        <>
            <Title 
                title="Gracias"
            />

            <p
                className="subtitle"
            >
                Le agradecemos mucho su contribución a la recaudación. Su generosidad beneficiará directamente a muchas familias
            </p>
        </>
    )
}
