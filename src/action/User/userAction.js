
const baseURL = `https://petstore.swagger.io/v2/user`;


export const userLogin = (user) => {
    return fetch(`${baseURL}/${user}`, {
        method: "GET"
    }).then(resp => {
        return resp.json();
    });
}

export const createNewUser = (user) => {
    return fetch(`${baseURL}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    }).then(resp => {
        return resp.json();
    });
}