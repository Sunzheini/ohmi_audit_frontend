export default function handleSubmit(e) {
    e.preventDefault();
    // Process formData or return it
    return new FormData(e.target);
}