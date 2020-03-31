import moment from "moment";

const integer = value => {
 if (!value) {
     return value
 }

else if(value instanceof Date) {
 value = moment(value, 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
}

 return value
     .substr(0, 5)
     .replace(/\D/g, '')
     .replace(/(\d{2})(\d)/, '$1:$2')
     .replace(/(\d{2})(\d)/, '$1:$2')
     .substr(0, 8)
} 
export default integer