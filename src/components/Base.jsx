import NavigationBar from './includes/NavigationBar';
import MainPageText from "./includes/MainPageText";
import LeftMenuBar from "./includes/LeftMenuBar";
import Footer from "./includes/Footer";

function Base({page_title, right_bar_container = null}) {
    return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                    <title>{page_title || "Base"}</title>
                </head>

                <body>
                    <header className="header">
                        {/*4. Navigation*/}
                        <div className="navigation-container">
                            <NavigationBar/>
                        </div>

                        {/*5. Main Page Text*/}
                        <div className="main-page-text-container">
                            <MainPageText/>
                        </div>
                    </header>

                    <main>
                        {/*6. The Page Content*/}
                        <div className="page-content-container">

                            {/*7. Left Bar*/}
                            <div className="left-bar-container">
                                <LeftMenuBar/>
                            </div>

                            {/*8. Right Bar*/}
                            <div className="right-bar-container">
                                {right_bar_container}
                            </div>
                        </div>
                    </main>

                    {/*8. Footer*/}
                    <div className="footer-container">
                        <Footer/>
                    </div>
                </body>
            </html>
    );
}

export default Base;