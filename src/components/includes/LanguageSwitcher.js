function LanguageSwitcher() {
    return (
            <>
                {/*<div className="lang">*/}
                {/*    <form id="language-form" action="{% url 'set_language' %}" method="post">*/}
                {/*        {% csrf_token %}*/}
                {/*        <input name="next" type="hidden" value="{{ request.get_full_path }}"/>*/}
                {/*        <label>*/}
                {/*            <select name="language" id="language-selector">*/}
                {/*                {% get_current_language as current_lang %}*/}
                {/*                {% get_available_languages as LANGUAGES %}*/}
                {/*                {% for code, name in LANGUAGES %}*/}
                {/*                <option value="{{ code }}" {% if code == current_lang %} selected{% endif %}>*/}
                {/*                    {{name}} ({{code}})*/}
                {/*                </option>*/}
                {/*                {% endfor %}*/}
                {/*            </select>*/}
                {/*        </label>*/}
                {/*    </form>*/}
                {/*</div>*/}

                {/*<script>*/}
                {/*    document.getElementById('language-selector').addEventListener('change', function() {*/}
                {/*    document.getElementById('language-form').submit();*/}
                {/*});*/}
                {/*</script>*/}
            </>
    )
}