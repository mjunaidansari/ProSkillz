import axios from "axios"

const baseUrl = 'http://192.168.29.78:3000/api/otp'

let token = null

const setToken = newToken => {
	token = `Bearer ${newToken}`
}

const generate = async phone => {
	console.log(`${baseUrl}/generate`)
	const response = await axios.post(`${baseUrl}/generate`, { phone })
	console.log(response.data)
	return response.data
}

export default { setToken, generate }