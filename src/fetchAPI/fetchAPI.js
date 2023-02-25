function getUser() {
    return new Promise((resolve, reject) => {
        let url = 'http://localhost:8080/users'
        let config = { method: "GET" }
        fetch(url, config)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(error => reject(error))
    })
}

//path params vs query path và body
export {
    getUser
}