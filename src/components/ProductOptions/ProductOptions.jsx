import { useState } from "react";
import "./ProductOptions.css";

const ProductOptions = ({
  options = [],
  radius = "4px",
  shape = "square",
  type = "text",
  value,
  defaultValue,
  onChange,
  name,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? null);
  const selectedValue = value !== undefined ? value : internalValue;

  const selectOption = (option) => {
    if (value === undefined) setInternalValue(option);
    onChange?.(option);
  };

  return (
    <div className="product-options" role="radiogroup" aria-label={name}>
      {options.map((option, index) => (
        <button
          type="button"
          key={`${option}-${index}`}
          className={`product-option product-option-${shape} ${selectedValue === option ? "selected" : ""}`}
          style={{
            borderRadius: shape === "square" ? radius : "50%",
            backgroundColor: type === "color" ? option : undefined,
          }}
          onClick={() => selectOption(option)}
          role="radio"
          aria-checked={selectedValue === option}
          aria-label={type === "color" ? `Cor ${option}` : `Opção ${option}`}
        >
          {type === "text" ? option : ""}
        </button>
      ))}
    </div>
  );
};

export default ProductOptions;
