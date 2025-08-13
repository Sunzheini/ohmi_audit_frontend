import React from 'react';
import {useTranslation} from 'react-i18next';
import renderField from "../../helper_functions/RenderField";
import handleEdit from "../../helper_functions/HandleEdit";
import handleDelete from "../../helper_functions/HandleDelete";


function ContentContainer({
                              data_for_content_container_wrapper_top,
                              data_for_content_container_wrapper_bottom,
                              message
                          }
) {
    const {t} = useTranslation();

    return (
            <>
                <div className="content-container-wrapper">
                    <div className="content-container-wrapper-top">
                        {data_for_content_container_wrapper_top ?
                                (
                                        <form method="POST" encType="multipart/form-data">
                                            <table>
                                                {data_for_content_container_wrapper_top.map((field) => (
                                                        <tr key={field.name || field.id}>
                                                            <td><b>{field.label}</b></td>
                                                            <td>
                                                                {renderField(field)}
                                                            </td>
                                                        </tr>
                                                ))}
                                            </table>
                                            <button type="submit" className="btn btn-primary">{t("Save")}</button>
                                        </form>
                                ) : "No forms"
                        }
                    </div>

                    {message &&
                            {message}
                    }

                    <div className="content-container-wrapper-bottom">
                        {data_for_content_container_wrapper_bottom ? (
                                <table>
                                    <thead>
                                    <tr>
                                        <th>{t('Id')}</th>
                                        <th>{t('Name')}</th>
                                        <th>{t('Description')}</th>
                                        <th>{t('Date')}</th>
                                        <th>{t('Is Active')}</th>
                                        <th>{t('Category')}</th>
                                        <th>{t('Image')}</th>
                                        <th>{t('File')}</th>
                                        <th>{t('Edit')}</th>
                                        <th>{t('Delete')}</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {data_for_content_container_wrapper_bottom.map((item) => (
                                            <React.Fragment key={item.id}>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.description}</td>
                                                    <td>{new Date(item.date).toLocaleDateString()}</td>
                                                    <td>{item.is_active ? t('Yes') : t('No')}</td>
                                                    <td>{item.category}</td>
                                                    <td>
                                                        {item.image ? (
                                                                <img
                                                                        src={item.image}
                                                                        alt={t('Image')}
                                                                        style={{width: '50px', height: '50px'}}
                                                                />
                                                        ) : (
                                                                t('No Image')
                                                        )}
                                                    </td>
                                                    <td>
                                                        {item.file ? (
                                                                <a
                                                                        href={item.file}
                                                                        className="btn btn-primary"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                >
                                                                    {t('Download File')}
                                                                </a>
                                                        ) : (
                                                                t('No File')
                                                        )}
                                                    </td>
                                                    <td>
                                                        <button
                                                                onClick={() => handleEdit(item.id)}
                                                                className="btn btn-danger"
                                                        >
                                                            {t('Edit')}
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                                onClick={() => {
                                                                    if (window.confirm(t('Are you sure?'))) {
                                                                        handleDelete(item.id);
                                                                    }
                                                                }}
                                                                className="btn btn-danger"
                                                        >
                                                            {t('Delete')}
                                                        </button>
                                                    </td>
                                                </tr>

                                                {item.file && (
                                                        <tr>
                                                            <td colSpan="10">
                                                                {item.file.toLowerCase().endsWith('.doc') ? (
                                                                        <iframe
                                                                                className="iframe-ms-office"
                                                                                src={`https://view.officeapps.live.com/op/embed.aspx?src=${item.file}`}
                                                                                width="100%"
                                                                                height="600px"
                                                                                frameBorder="0"
                                                                                title={item.name}
                                                                        />
                                                                ) : item.file.toLowerCase().endsWith('.pdf') ? (
                                                                        <iframe
                                                                                src={item.file}
                                                                                width="100%"
                                                                                height="600px"
                                                                                title={item.name}
                                                                        >
                                                                            <p>{t('Your browser does not support iframes.')}</p>
                                                                        </iframe>
                                                                ) : (
                                                                        t('text')
                                                                )}
                                                            </td>
                                                        </tr>
                                                )}
                                            </React.Fragment>
                                    ))}
                                    </tbody>
                                </table>
                        ) : (
                                <p>{t('No audits found')}</p>
                        )}
                    </div>
                </div>
            </>
    )
}

export default ContentContainer;