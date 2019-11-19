import axios from 'axios'

export async function fetchData(data) {
  const res =  await axios.post('http://47.52.238.29/asset', {
    user: data
  }, {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  })
  return res
}