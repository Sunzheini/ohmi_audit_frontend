// AuditForm.js
import React from 'react';

function AuditForm({ handleSubmit }) {
    return (
        // <form method="POST" encType="multipart/form-data" onSubmit={onSubmit}>
        <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
            <label htmlFor="name"><b>Name</b></label>
            <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter name"
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default AuditForm;