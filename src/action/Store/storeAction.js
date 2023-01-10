
const baseURL = `https://petstore.swagger.io/v2/store`;


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