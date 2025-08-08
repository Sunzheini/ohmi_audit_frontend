import React from 'react';
import { useTranslation } from 'react-i18next';


function LeftMenuBar() {
    const { t } = useTranslation();

    return (
            <>
                <div className="left-menu-bar">
                    <button className="left-menu-bar-button" onClick={() => window.location.href = "/"}>
                        <i className="fa-solid fa-handshake-angle left-menu-bar-button-icon"></i>
                        <span className="left-menu-bar-button-text">{t('Customers')}</span>
                    </button>

                    <button className="left-menu-bar-button" onClick={() => window.location.href = "/"}>
                        <i className="fa-brands fa-audible left-menu-bar-button-icon"></i>
                        <span className="left-menu-bar-button-text">{t('Audits')}</span>
                    </button>

                    <button className="left-menu-bar-button" onClick={() => window.location.href = "/"}>
                        <i className="fa-solid fa-glasses left-menu-bar-button-icon"></i>
                        <span className="left-menu-bar-button-text">{t('Auditors')}</span>
                    </button>

                    <button className="left-menu-bar-button" onClick={() => window.location.href = "/"}>
                        <i className="fa-solid fa-book left-menu-bar-button-icon"></i>
                        <span className="left-menu-bar-button-text">{t('Documents')}</span>
                    </button>

                    <button className="left-menu-bar-button" onClick={() => window.location.href = "/"}>
                        <i className="fa-solid fa-group-arrows-rotate"></i>
                        <span className="left-menu-bar-button-text">{t('Async example')}</span>
                    </button>
                </div>
            </>
    )
}

export default LeftMenuBar;