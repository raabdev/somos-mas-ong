import React, { useContext } from 'react'
import UseForm from './components/UseForm'

const CategoriesForm = () => {

    const { isEditing, categoryDetails } = useContext(CategoriesContext)/* contexto traido de categoriesService.js */

    if (isEditing) {
        return <UseForm isEditing={isEditing} categoryEdit={categoryDetails} title="Editar categoria" /> 
    } else {
        return <UseForm isEditing={isEditing} title="Nueva categoria"/>
    }
    
}

export default CategoriesForm