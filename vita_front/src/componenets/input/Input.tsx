import React from "react"
import "./Input.module.css"

interface InputProps {
  title: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({title, placeholder}) => {

return (
    <>
      <div className="input-container">
        <h2 className="title">{title}</h2>
        <input className="text-input form-control" type="text" placeholder={placeholder}/>

      </div>

    </>
  );
};

export default Input;


