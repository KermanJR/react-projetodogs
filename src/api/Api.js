export const API_URL = 'https://dogsapi.origamid.dev/json'
//export const API_URL_TEST = 'https://dogsapi.origamid.teste/json'


//Retorna o token do usuário
export function TOKEN_POST(body){
    return{
        url: API_URL + '/jwt-auth/v1/token',
        options: {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}

//Retorna o usuário pelo token
export function USER_GET(token){
    return{
        url: API_URL + '/api/user',
        options: {
            method: 'GET',
            headers:{
                Authorization: 'Bearer ' + token
            },
            
        }
    }
}

//Cria novo usuário
export function USER_POST(body){
    return{
        url: API_URL + '/api/user',
        options: {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
            
        }
    }
}

//Valida o token do usuário para auto login
export function TOKEN_VALIDADE_POST(token){
    return{
        url: API_URL + '/jwt-auth/v1/token/validate',
        options: {
            method: 'POST',
            headers:{
                Authorization: 'Bearer ' + token
            },
            
        }
    }
}

export function PHOTO_POST(formData, token){
    return{
        url: API_URL + '/api/photo',
        options: {
            method: 'POST',
            headers:{
                Authorization: 'Bearer ' + token
            },
            body: formData
            
        }
    }
}

export function PHOTOS_GET({page, total, user}){
    return{
        url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}

export function PHOTO_GET(id){
    return{
        url: `${API_URL}/api/photo/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store'
        }
    }
}