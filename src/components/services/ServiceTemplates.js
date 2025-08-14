const urls = {
    getAllItems: '/api/items',
    addItem: '/api/items',
    editItem: '/api/items/{id}',
    deleteItem: '/api/items/{id}'
}

async function getAllItems () {
    const response = await fetch(urls['getAllItems']);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

async function addItem (item) {
    const response = await fetch(urls['addItem'], {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

async function editItem (id, item) {
    const response = await fetch(urls['editItem'].replace('{id}', id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

async function deleteItem (id) {
    const response = await fetch(urls['deleteItem'].replace('{id}', id), {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

export {
    getAllItems,
    addItem,
    editItem,
    deleteItem
};