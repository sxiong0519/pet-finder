
const baseURL = `https://petstore.swagger.io/v2/pet`;


export const getPetById = (pet) => {
    return fetch(`${baseURL}/${pet.id}`, {
        method: "GET"
    }).then(resp => {
        return resp.json();
    })
}

export const getPetByStatus = (stat) => {
    return fetch(`${baseURL}/findByStatus?status=${stat}`, {
        method: "GET"
    }).then(resp => {
        return resp.json();
    })
}
