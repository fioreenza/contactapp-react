import React from "react";

export default function Input ({ type, name, placeholder }) {
  const inputRef = React.useRef(null);
    return (
        <input
          className="main_container_input"
          name={name}
          type={type}
          ref={inputRef}
          placeholder={placeholder}
        />
    );
}