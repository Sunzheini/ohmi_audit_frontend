import React from 'react';
import NavigationBar from './includes/NavigationBar';
import MainPageText from "./includes/MainPageText";
import LeftMenuBar from "./includes/LeftMenuBar";
import Footer from "./includes/Footer";

function Base({
                  page_title,
                  page_name,
                  navigation_bar = <NavigationBar/>,
                  main_page_text = <MainPageText page_name={page_name} />,
                  left_menu_bar = <LeftMenuBar/>,
                  right_bar_container = null,
                  footer = <Footer/>
              })
{
    return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                    {/*1. Page Title (On the explorer tab)*/}
                    <title>{page_title || "Base"}</title>
                </head>

                <body>
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
                            <div className="right-bar-container">
                                {right_bar_container}
                            </div>
                        </div>
                    </main>

                    {/*8. Footer*/}
                    <div className="footer-container">
                        {footer}
                    </div>
                </body>
            </html>
    );
}

export default Base;