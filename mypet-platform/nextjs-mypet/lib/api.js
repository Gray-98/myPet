import axios from 'axios'

const ApiDriver = async (method, path, options) => {
	const url = `http://127.0.0.1:8080${path}`

	return await axios({method, url, ...options})
}

class Api {
	async getHealth() {
		const {data} = await ApiDriver('get', '/health?name=Admin')

		return data
	}
}

export default new Api()
