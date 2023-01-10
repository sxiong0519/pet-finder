
const baseURL = `https://petstore.swagger.io/v2/user`;


export const userLogin = (user) => {
    try {
        return fetch(`${baseURL}/${user}`, {
            method: "GET"
        }).then(resp => {
            return resp.json();
        });
    } catch (error) {
        console.error(error);
    }
}

export const createNewUser = (user) => {
    try {
        return fetch(`${baseURL}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(resp => {
            return resp.json();
        });
    } catch (error) {
        console.error(error);
    }
}

export const createStoreOrder = (order) => {
    try {
        return fetch(`${baseURL}/order`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(order)
        }).then(resp => {
            return resp.json();
        });
    } catch (error) {
        console.error(error);
    }
}