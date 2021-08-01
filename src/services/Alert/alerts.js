import Swal from 'sweetalert2';

export const showSuccess = (title,text) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'success',
        confirmButtonColor: '#30a0d3'
    })
}

export const showError = (title,text) => {
    Swal.fire({
        title: title,
        text: text,            
        icon: 'error',
        confirmButtonColor: '#d33'
    })
}

export const showInfo = (title,text,confirmText) => {
    Swal.fire({
        title: title,
        text: text,
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText
    })  
}

export const showConfirm = ({title, text, confirmText}) => {
    return Swal.fire({
        title: title,
        text: text,
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText
    })  
}