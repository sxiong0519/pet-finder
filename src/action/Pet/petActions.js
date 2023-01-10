

const baseURL = `https://petstore.swagger.io/v2/pet`;


export const getPetById = (pet) => {
    try {
        return fetch(`${baseURL}/${pet.id}`, {
            method: "GET"
        }).then(resp => {
            return resp.json();
        })
    } catch (error) {
        console.error(error);
    }
}

export const getPetByStatus = (stat) => {
    try {
        return fetch(`${baseURL}/findByStatus?status=${stat}`, {
            method: "GET"
        }).then(resp => {
            return resp.json();
        })
    } catch (error) {
        console.error(error);
    }
}

export const createNewPet = (pet) => {
    try { 
        return fetch(`${baseURL}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(pet)
        }).then(resp => {
            return resp.json();
        })
    } catch (error) {
        console.error(error);
    }
}

export const updateStatus = (pet, status) => {
    try {
        return fetch(`${baseURL}/${pet}`, {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: new URLSearchParams({
                "status": `${status}`
            })
        }).then(resp => {
            return resp.json();
        })
    } catch (error) {
        console.error(error);
    }
}