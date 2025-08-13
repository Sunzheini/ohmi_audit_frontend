function renderField(field) {
  switch(field.type) {
    case 'text':
      return (
        <input
          type="text"
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
        />
      );
    case 'select':
      return (
        <select
          value={field.value}
          onChange={(e) => field.onChange(e.target.value)}
        >
          {field.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case 'checkbox':
      return (
        <input
          type="checkbox"
          checked={field.value}
          onChange={(e) => field.onChange(e.target.checked)}
        />
      );
    case 'file':
      return (
        <input
          type="file"
          onChange={(e) => field.onChange(e.target.files[0])}
        />
      );
    default:
      return <input
        type="text"
        value={field.value}
        onChange={(e) => field.onChange(e.target.value)}
      />;
  }
}

export default renderField;