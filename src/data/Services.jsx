const url = await( import.meta.env.VITE_api_url);

export async function getAllContacts() {
    const request = await fetch(url);
    const response = await request.json();
    return response;
}

export async function getClientById(id) {
    const request = await fetch(url+`/${id}`);
    const response = await request.json();
    return response;
}

export async function addContact(data){
    try {
        const request = await fetch(
            url+`/`, {
                method: "POST",
                body: JSON.stringify(data),
                headers:{
                    "Content-Type": "application/json"
                }
            }
        )
        await request.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updateClient(data, id) {
    try {
        const request = await fetch (url+`/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        await request.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteClinet(id) {
    try {
        const request = await fetch (url+`/${id}`, {
            method: 'DELETE'
        })
        await request.json();
    } catch (error) {
        console.log(error);
    }
}