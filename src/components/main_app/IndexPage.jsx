import React from 'react';
import Base from "../Base";
import CardButtonsBar from "../includes/CardButtonsBar";
import ContentContainer from "../includes/ContentContainer";

function IndexPage({page_title = "Index Page"}) {
    return (
            <>
                <Base
                        page_title={page_title}

                        right_bar_container={
                            <div className="right-bar-container">
                                <div className="card-buttons-bar-container">
                                    <CardButtonsBar/>
                                </div>

                                <div className="content-container">
                                    <ContentContainer/>
                                </div>
                            </div>}
                />
            </>
    );
}

export default IndexPage;