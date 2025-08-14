import IndexPage from "./components/main_app/IndexPage";
import AuditForm from "./components/forms/AuditForm";
import handleSubmit from "./helper_functions/HandleSubmit";
import dummyAuditsData from "./helper_functions/DummyAuditsData";
import {useAuth} from "./context/AuthContext";


function App() {
    // Authentication context
    const { isAuthenticated, login } = useAuth();

    return (
            <>
                <IndexPage
                    page_title="Index Page with Card Buttons Bar and Content Container"
                    page_name="Index Page"
                    // data_for_content_container_wrapper_top={<AuditForm onSubmit={handleSubmit}/>}      // i.e. Audit form
                    data_for_content_container_wrapper_top={<AuditForm handleSubmit={handleSubmit}/> }       // i.e. Audit form
                    data_for_content_container_wrapper_bottom={dummyAuditsData}   // Audit list table
                    message={"123123"}
                />
            </>
    );
}

export default App;