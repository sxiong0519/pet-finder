
const baseURL = `${process.env.REACT_APP_BASEURL}/store`;

export const getStoreInventory = () => {
    return fetch(`${baseURL}/inventory`, {
        method: "GET"
    }).then(resp => {
        return resp.json();
    })
}