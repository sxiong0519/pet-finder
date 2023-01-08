
const baseURL = `https://petstore.swagger.io/v2/store`;

export const getStoreInventory = () => {
    return fetch(`${baseURL}/inventory`, {
        method: "GET"
    }).then(resp => {
        return resp.json();
    })
}

export const createStoreOrder = (order) => {
    return fetch(`${baseURL}/order`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(order)
    }).then(resp => {
        return resp.json();
    });
}