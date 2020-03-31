const integer = value => {
    value = value.replace(/\D/g, '')
    value = value !== '' ? value : ''
    return value
} 
export default integer