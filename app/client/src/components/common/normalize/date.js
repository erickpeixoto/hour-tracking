const integer = value => {
 if (!value) {
     return value
 }
 return value
     .substr(0, 10)
     .replace(/\D/g, '')
     .replace(/(\d{2})(\d)/, '$1/$2')
     .replace(/(\d{2})(\d)/, '$1/$2')
     .replace(/(\d{4})(\d)/, '$1/$2/$3')
     .substr(0, 10)
} 
export default integer