function handleSubmit(event) {
    if (event) {
        event.preventDefault(); // For form buttons
        event.stopPropagation(); // Prevent event bubbling
        console.log(event.target); // Access the clicked element
    }
}

export default handleSubmit;