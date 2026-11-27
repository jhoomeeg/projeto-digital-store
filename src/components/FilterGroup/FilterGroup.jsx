import "./FilterGroup.css";

const FilterGroup = ({ title, inputType = "checkbox", options = [], name, value, onChange }) => (
  <fieldset className="filter-group">
    <legend>{title}</legend>
    {options.map((option, index) => {
      const optionValue = option.value ?? option.text;
      const checked = Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
      return (
        <label key={optionValue || index}>
          <input
            type={inputType}
            name={name || title}
            value={optionValue}
            checked={onChange ? checked : undefined}
            onChange={onChange ? (event) => onChange(optionValue, event.target.checked) : undefined}
          />
          <span>{option.text}</span>
        </label>
      );
    })}
  </fieldset>
);

export default FilterGroup;
