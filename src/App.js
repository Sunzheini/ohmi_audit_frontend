import IndexPage from "./components/main_app/IndexPage";


function App() {
    return (
            <>
                <IndexPage
                    page_title="Index Page with Card Buttons Bar and Content Container"
                    page_name="Index Page"
                    data_for_content_container_wrapper_top={1}
                    data_for_content_container_wrapper_bottom={2}
                    message={"123123"}
                />
            </>
    );
}

export default App;