import React from 'react';
import {useTranslation} from 'react-i18next';


function ContentContainer({
                              data_for_content_container_wrapper_top,
                              data_for_content_container_wrapper_bottom,
                              message
                          }
) {
    const {t} = useTranslation();

    return (
            <>
            {/*<div className="content-container-wrapper">*/}
            {/*    <div className="content-container-wrapper-top">*/}
            {/*        {data_for_content_container_wrapper_top ?*/}
            {/*                (*/}
            {/*                        <form method="POST" encType="multipart/form-data">*/}
            {/*                            {% csrf_token %}*/}
            {/*                            <table>*/}
            {/*                                {% for field in data_for_content_container_wrapper_top %}*/}
            {/*                                <tr>*/}
            {/*                                    <td><b>{{field.label_tag}}</b></td>*/}
            {/*                                    <td>{{field}}</td>*/}
            {/*                                </tr>*/}
            {/*                                {% endfor %}*/}
            {/*                            </table>*/}
            {/*                            <button type="submit" className="btn btn-primary">{% trans "Save" %}</button>*/}
            {/*                        </form>*/}
            {/*                ) : "No forms"*/}
            {/*        }*/}
            {/*    </div>*/}

            {/*    {message &&*/}
            {/*            {message}*/}
            {/*    }*/}

            {/*    <div className="content-container-wrapper-bottom">*/}
            {/*        {data_for_content_container_wrapper_bottom ?*/}
            {/*                (*/}
            {/*                        <table>*/}
            {/*                            <thead>*/}
            {/*                            <tr>*/}
            {/*                                <th>{t('Id')}</th>*/}
            {/*                                <th>{t('Name')}</th>*/}
            {/*                                <th>{t('Description')}</th>*/}
            {/*                                <th>{t('Date')}</th>*/}
            {/*                                <th>{t('Is Active')}</th>*/}
            {/*                                <th>{t('Category')}</th>*/}
            {/*                                <th>{t('Image')}</th>*/}
            {/*                                <th>{t('File')}</th>*/}
            {/*                                <th>{t('Edit')}</th>*/}
            {/*                                <th>{t('Delete')}</th>*/}
            {/*                            </tr>*/}
            {/*                            </thead>*/}

            {/*                            <tbody>*/}
            {/*                            {% for item in data_for_content_container_wrapper_bottom %}*/}
            {/*                            <tr>*/}
            {/*                                <td>{{item.id}}</td>*/}
            {/*                                <td>{{item.name}}</td>*/}
            {/*                                <td>{{item.description}}</td>*/}
            {/*                                <td>{{item.date}}</td>*/}
            {/*                                <td>{{item.is_active}}</td>*/}
            {/*                                <td>{{item.category}}</td>*/}
            {/*                                <td>*/}
            {/*                                    {% if item.image %}*/}
            {/*                                    <img src="{{ item.image.url }}" alt="Image"*/}
            {/*                                         style="width: 50px; height: 50px;"/>*/}
            {/*                                    {% else %}*/}
            {/*                                    {% trans "No Image" %}*/}
            {/*                                    {% endif %}*/}
            {/*                                </td>*/}
            {/*                                <td>*/}
            {/*                                    {% if item.file %}*/}
            {/*                                    <a href="{{ item.file.url }}"*/}
            {/*                                       className="btn btn-primary">{% trans "Download File" %}</a>*/}
            {/*                                    {% else %}*/}
            {/*                                    {% trans "No File" %}*/}
            {/*                                    {% endif %}*/}
            {/*                                </td>*/}
            {/*                                <td>*/}
            {/*                                    <form method="POST">*/}
            {/*                                        {% csrf_token %}*/}
            {/*                                        <button type="submit" name="edit" value="{{ item.id }}"*/}
            {/*                                                className="btn btn-danger">*/}
            {/*                                            {% trans "Edit" %}*/}
            {/*                                        </button>*/}
            {/*                                    </form>*/}
            {/*                                </td>*/}
            {/*                                <td>*/}
            {/*                                    <form method="POST">*/}
            {/*                                        {% csrf_token %}*/}
            {/*                                        <button type="submit" name="delete" value="{{ item.id }}"*/}
            {/*                                                className="btn btn-danger"*/}
            {/*                                                onClick="return confirm('Are you sure?')">*/}
            {/*                                            {% trans "Delete" %}*/}
            {/*                                        </button>*/}
            {/*                                    </form>*/}
            {/*                                </td>*/}
            {/*                            </tr>*/}

            {/*                            <tr>*/}
            {/*                                <td colSpan="10">*/}
            {/*                                    {% if item.file %}*/}

            {/*                                    {# Microsoft's viewer requires publicly accessible URLs for files! #}*/}
            {/*                                    {% if '.doc' in item.file.name|lower %}*/}
            {/*                                        <iframe class="iframe-ms-office"*/}
            {/*                                        src='https://view.officeapps.live.com/op/embed.aspx?src={{ item.file.url }}'*/}
            {/*                                        width='100%' height='600px' frameborder='0'>*/}
            {/*                                        </iframe>*/}
            {/*                                    {% elif '.pdf' in item.file.name|lower %}*/}
            {/*                                        <iframe src="{{ item.file.url }}" width="100%" height="600px">*/}
            {/*                                        <p>Your browser does not support iframes.</p>*/}
            {/*                                        </iframe>*/}
            {/*                                    {% else %}*/}
            {/*                                        text*/}
            {/*                                    {% endif %}*/}
            {/*                                    {% endif %}*/}
            {/*                                        </td>*/}
            {/*                                        </tr>*/}
            {/*                                    {% endfor %}*/}
            {/*                            </tbody>*/}
            {/*                        </table>*/}
            {/*                ) : ({t('Customers')})*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*</div>*/}
</>
)
}

export default ContentContainer;