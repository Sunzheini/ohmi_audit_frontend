function AuditForm() {
    return (
        <form method="POST" encType="multipart/form-data" className="audit-form">
            <div className="form-grid">
                <div className="form-group">
                    <label htmlFor="name"><b>Name</b></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-control"
                        placeholder="Enter name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description"><b>Description</b></label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        className="form-control"
                        placeholder="Enter description"
                        rows={4}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="date"><b>Date</b></label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="is_active" className="checkbox-label">
                        <input
                            type="checkbox"
                            id="is_active"
                            name="is_active"
                            className="form-checkbox"
                        />
                        <span><b>Is Active</b></span>
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="category"><b>Category</b></label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        required
                        className="form-control"
                        placeholder="Enter category"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image"><b>Image</b></label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        className="form-control"
                        accept="image/*"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="file"><b>File</b></label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        className="form-control"
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">Save</button>
        </form>
    );
}

export default AuditForm;