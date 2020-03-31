const number = value => {
    let data = value.replace(/\D/g, '')
    data = data !== '' ? data : ''

    return data
} 
export default number