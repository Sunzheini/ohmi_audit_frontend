function base() {
    return (
            <>
                {/*{# {% load static %} means that we can use the static files in the templates #}*/}
                {/*{% load static %}*/}

                {/*{# Load the i18n template tag library to enable internationalization #}*/}
                {/*{% load i18n %}*/}

                {/*{# We have access to the request object in the templates, so we can check if the user is authenticated #}*/}
                {/*{% if request.user.is_authenticated %}*/}
                {/*{% elif request.user.is_anonymous %}*/}
                {/*{% elif request.user.is_superuser %}*/}
                {/*{% endif %}*/}

                {/*<*/}
                {/*!DOCTYPE html>*/}
                {/*<html lang="en">*/}
                {/*<head>*/}
                {/*    <meta charset="UTF-8"/>*/}
                {/*    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>*/}
                {/*    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>*/}

                {/*    <title>*/}
                {/*        {# 1. Page Title (On the explorer tab) #}*/}
                {/*        {% block page_title %} {% endblock %}*/}
                {/*    </title>*/}

                {/*    {# Common Styles #}*/}
                {/*    <link rel="stylesheet" href="{% static 'css/reset.css' %}">*/}
                {/*        <link rel="stylesheet"*/}
                {/*              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>*/}
                {/*        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>*/}
                {/*        <link rel="stylesheet" href="{% static 'css/style.css' %}">*/}

                {/*            {# 2. Additional Styles #}*/}
                {/*            {% block additional_styles %}*/}
                {/*            <link rel="stylesheet" href="{% static 'css/components/navigation_bar.css' %}">*/}
                {/*                <link rel="stylesheet" href="{% static 'css/components/buttons.css' %}">*/}
                {/*                    <link rel="stylesheet" href="{% static 'css/components/left_menu_bar.css' %}">*/}
                {/*                        <link rel="stylesheet"*/}
                {/*                              href="{% static 'css/components/card-buttons-bar.css' %}">*/}
                {/*                            <link rel="stylesheet"*/}
                {/*                                  href="{% static 'css/components/content_container.css' %}">*/}
                {/*                                <link rel="stylesheet" href="{% static 'css/components/tables.css' %}">*/}
                {/*                                    <link rel="stylesheet"*/}
                {/*                                          href="{% static 'css/components/forms.css' %}">*/}
                {/*                                        <link rel="stylesheet"*/}
                {/*                                              href="{% static 'css/components/footer.css' %}">*/}
                {/*                                            <link rel="stylesheet"*/}
                {/*                                                  href="{% static 'css/components/task_status.css' %}">*/}
                {/*                                                {% endblock %}*/}

                {/*                                                {# 3. Additional JS #}*/}
                {/*                                                {% block additional_js %} {% endblock %}*/}

                {/*                                                {# Common JS #}*/}
                {/*                                                {#    <script type="text/javascript" src="{% static 'css/custom_functions.js' %}"></script>#}*/}
                {/*</head>*/}

                {/*<body>*/}
                {/*<header class="header">*/}
                {/*    {# 4. Navigation #}*/}
                {/*    {% block nav %}*/}
                {/*    <div class="navigation-container">*/}
                {/*        {% include "includes/navigation_bar.html" %}*/}
                {/*    </div>*/}
                {/*    {% endblock %}*/}

                {/*    {# 5. Main Page Text #}*/}
                {/*    {% block main_page_text %}*/}
                {/*    <div class="main-page-text-container">*/}
                {/*        {% include 'includes/main_page_text.html' %}*/}
                {/*    </div>*/}
                {/*    {% endblock %}*/}
                {/*</header>*/}

                {/*<main>*/}
                {/*    {# 6. The Page Content #}*/}
                {/*    {% block page_container %}*/}
                {/*    <div class="page-content-container">*/}

                {/*        {# 7. Left Bar #}*/}
                {/*        {% block left_bar %}*/}
                {/*        <div class="left-bar-container">*/}
                {/*            {% include "includes/left_menu_bar.html" %}*/}
                {/*        </div>*/}
                {/*        {% endblock %}*/}

                {/*        {# 8. Right Bar #}*/}
                {/*        {% block right_bar %}*/}
                {/*        <div class="right-bar-container"></div>*/}
                {/*        {% endblock %}*/}
                {/*    </div>*/}
                {/*    {% endblock %}*/}
                {/*</main>*/}

                {/*{# 8. Footer #}*/}
                {/*{% block footer %}*/}
                {/*<div class="footer-container">*/}
                {/*    {% include "includes/footer.html" %}*/}
                {/*</div>*/}
                {/*{% endblock %}*/}
                {/*</body>*/}
                {/*</html>*/}
            </>
    );
}