function Pagination() {
    return (
            <>
                {/*<div className="pagination">*/}
                {/*    <span className="step-links">*/}
                {/*        {% if page_obj.has_previous %}*/}
                {/*        <a href="?page=1" className="btn btn-sm btn-outline-primary">&laquo; {% trans "first" %}</a>*/}
                {/*            <a href="?page={{ page_obj.previous_page_number }}"*/}
                {/*               className="btn btn-sm btn-outline-primary">{% trans "previous" %}</a>*/}
                {/*        {% endif %}*/}

                {/*        <span className="current">*/}
                {/*            {% trans "Page" %} {{page_obj.number}} of {{page_obj.paginator.num_pages}}.*/}
                {/*        </span>*/}

                {/*        {% if page_obj.has_next %}*/}
                {/*        <a href="?page={{ page_obj.next_page_number }}"*/}
                {/*           className="btn btn-sm btn-outline-primary">{% trans "next" %}</a>*/}
                {/*            <a href="?page={{ page_obj.paginator.num_pages }}"*/}
                {/*               className="btn btn-sm btn-outline-primary">{% trans "last" %} &raquo;</a>*/}
                {/*        {% endif %}*/}
                {/*    </span>*/}
                {/*</div>*/}
            </>
    )
}

export default Pagination;