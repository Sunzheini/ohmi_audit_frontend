import React from 'react';
import {Link} from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import {useAuth} from "../../context/AuthContext";


function NavigationBar() {
    // const {isAuthenticated} = useAuth(); // Get auth state
    const {isAuthenticated} = true

    return (
            <>
                <nav className="navigation">
                    <ul className="navigation-list" role="list">
                        <li className="navigation-list-item">
                            <Link className="navigation-list-item-link" to="/">
                                <i className="fas fa-home navigation-list-item-icon"></i>
                            </Link>
                        </li>

                        <li className="navigation-list-item">
                            <Link className="navigation-list-item-link" to="/">
                                <i className="fas fa-users navigation-list-item-icon"></i>
                            </Link>
                        </li>

                        <li className="navigation-list-item">
                            <Link className="navigation-list-item-link" to="/">
                                <i className="fas fa-users navigation-list-item-icon"></i>
                            </Link>
                        </li>

                        {isAuthenticated ?
                                (
                                        <li className="navigation-list-item">
                                            {/*logout*/}
                                            <Link className="navigation-list-item-link" to="/">
                                                <i className="fa-solid fa-door-open"></i>
                                            </Link>
                                        </li>
                                ) : (
                                        <li className="navigation-list-item">
                                            {/*login*/}
                                            <Link className="navigation-list-item-link" to="/">
                                                <i className="fa-solid fa-plus"></i>
                                            </Link>
                                        </li>
                                )
                        }
                    </ul>

                    <LanguageSwitcher />
                </nav>
            </>
    )
}

export default NavigationBar;