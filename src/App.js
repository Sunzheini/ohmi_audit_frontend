import ComponentExample from "./components/ComponentExample";
import IndexPage from "./components/main_app/IndexPage";


function App() {
    return (
            <>
                {/*<ComponentExample/>*/}
                <IndexPage
                    page_title="Index Page with Card Buttons Bar and Content Container"
                    page_name="Index Page"
                    data_for_content_container_wrapper_top={1}
                    data_for_content_container_wrapper_bottom={2}
                />
            </>
    );
}

export default App;