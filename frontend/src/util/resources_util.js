export const createResource = (resource) =>{
    return $.ajax({
        url: `/api/resources`,
        method: 'POST',
        data : {resource}
    })
}

export const fetchResource = () =>{
    return $.ajax({
        url: `/api/resources`,
        method: 'GET'
    })
}

export const fetchResource = (ResourceId) =>{
    return $.ajax({
        url: `/api/resources/${ResourceId}`,
        method: 'GET'
    })
}

export const updateResource = (resource) => {
    return $.ajax({
        url: `api/resources/${resource.id}`,
        method: 'PATCH',
        data: { resource }
    })
}
export const deleteResource = (ResourceId) => {
    return $.ajax({
        url: `/api/resources/${ResourceId}`,
        method: 'DELETE'
    })
}



