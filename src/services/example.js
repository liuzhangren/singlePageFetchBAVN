import axios from 'axios'

export async function fetchData(data) {
  debugger
  const res =  await axios.post('http://47.52.238.29/asset', {
    user: ''
  })
  console.log(res.data)
  return res
}