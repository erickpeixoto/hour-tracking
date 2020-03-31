const cnpj = value => {
    const onlyNums = value.replace(/[^\d]/g, '')
    const response = `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`

if (onlyNums.length <= 13) { return onlyNums }
else
 return (onlyNums.length) ? response : null 
      
} 
export default cnpj