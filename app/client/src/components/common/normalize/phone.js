const phone = value => {
    const onlyNums = value.replace(/[^\d]/g, '')
    const response = `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)} ${onlyNums.slice(7, 20)}`

if (onlyNums.length <= 10) { return onlyNums }
if (onlyNums.length <= 11) { return (onlyNums.length) ? response : null }
      
} 
export default phone