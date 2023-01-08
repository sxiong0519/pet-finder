

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

export const createNewPet = (pet) => {
    return fetch(`${baseURL}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(pet)
    }).then(resp => {
        return resp.json();
    })
}

export const updateStatus = (pet, status) => {
    return fetch(`${baseURL}/${pet}`, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            "status": `${status}`
        })
    }).then(resp => {
        return resp.json();
    })
}