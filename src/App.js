import IndexPage from "./components/main_app/IndexPage";
import AuditForm from "./components/forms/AuditForm";
import handleSubmit from "./helper_functions/HandleSubmit";


function App() {
    return (
            <>
                <IndexPage
                    page_title="Index Page with Card Buttons Bar and Content Container"
                    page_name="Index Page"
                    // data_for_content_container_wrapper_top={<AuditForm onSubmit={handleSubmit}/>}      // i.e. Audit form
                    data_for_content_container_wrapper_top={<AuditForm handleSubmit={handleSubmit}/> }       // i.e. Audit form
                    data_for_content_container_wrapper_bottom={[1, 2, 3]}   // Audit list table
                    message={"123123"}
                />
            </>
    );
}

export default App;