function handleEdit(event, itemId) {
    if (event) {
        event.preventDefault(); // For form buttons
        event.stopPropagation(); // Prevent event bubbling
        console.log(event.target); // Access the clicked element
    }

    console.log('Edit button clicked for item with ID:', itemId);
    // Here you can implement the logic to handle the edit action
}

export default handleEdit;