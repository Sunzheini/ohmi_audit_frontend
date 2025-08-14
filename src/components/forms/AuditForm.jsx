// AuditForm.js
import React from 'react';

function AuditForm({ handleSubmit }) {
    return (
        <form method="POST"
              encType="multipart/form-data"
              onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name"><b>Name</b></label>
            <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter name"

                // do something every time the input changes
                onChange={(e) => console.log(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default AuditForm;