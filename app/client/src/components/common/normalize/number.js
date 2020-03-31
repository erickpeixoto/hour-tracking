const number = value => {
    let data = value.replace(/\D/g, '')
    data = data.replace(/(\d{2})$/, ',$1')
    data = data.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    data = data !== '' ? data : ''

    return data
} 
export default number