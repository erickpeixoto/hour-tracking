const zip = value => {
  if (!value) {
    return value
  }
 
  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 7) {
    return `${onlyNums.slice(0, 2)}${onlyNums.slice(2)}`
  }
    return `${onlyNums.slice(0, 2)}${onlyNums.slice(2, 5)}-${onlyNums.slice(
    5,
    8
  )}`
}

export default zip