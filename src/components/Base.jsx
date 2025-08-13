import React from 'react';
import NavigationBar from './includes/NavigationBar';
import MainPageText from "./includes/MainPageText";
import LeftMenuBar from "./includes/LeftMenuBar";
import Footer from "./includes/Footer";

function Base({
                  page_title,
                  page_name,
                  navigation_bar = <NavigationBar/>,
                  main_page_text = <MainPageText page_name={page_name}/>,
                  left_menu_bar = <LeftMenuBar/>,
                  right_bar_container = null,
                  footer = <Footer/>
              }) {

    React.useEffect(() => {
        document.title = page_title || "Base";
    }, [page_title]);

    return (
            <>
                <header className="header">
                    {/*4. Navigation*/}
                    <div className="navigation-container">
                        {navigation_bar}
                    </div>

                    {/*5. Main Page Text*/}
                    <div className="main-page-text-container">
                        {main_page_text}
                    </div>
                </header>

                <main>
                    {/*6. The Page Content*/}
                    <div className="page-content-container">

                        {/*7. Left Bar*/}
                        <div className="left-bar-container">
                            {left_menu_bar}
                        </div>

                        {/*8. Right Bar*/}
                        {right_bar_container}
                    </div>
                </main>

                {/*8. Footer*/}
                <div className="footer-container">
                    {footer}
                </div>
            </>
    );
}

export default Base;