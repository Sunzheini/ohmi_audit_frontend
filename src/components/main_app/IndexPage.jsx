import React from 'react';
import Base from "../Base";
import CardButtonsBar from "../includes/CardButtonsBar";
import ContentContainer from "../includes/ContentContainer";

function IndexPage({
                       page_title,
                       page_name,
                       data_for_content_container_wrapper_top,
                       data_for_content_container_wrapper_bottom
                   }) {
    return (
            <Base
                    page_title={page_title}
                    page_name={page_name}

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
    );
}

export default IndexPage;