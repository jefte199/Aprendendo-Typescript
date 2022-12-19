const arr = [{key: 0},{key: 1},{key: 2}]

function isString (value: unknown): value is string {
  if (typeof value === "string"){
    return true
  } else {
    return false
  }
}

if (isString(arr)) {
  console.log("string")
}else {
  console.log("no string")
}

console.log(arr instanceof Array)
