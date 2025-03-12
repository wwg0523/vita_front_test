import React from "react"
import "./Input.css"

interface InputProps {
  title: string;
  subtitle : string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({title,subtitle, placeholder}) => {

return (
    <>
      <div className="input-container">
        <h2 className="title">{title}</h2>
        <p className="sub-title" >{subtitle}</p>
        <input className="text-input form-control " type="text" placeholder={placeholder}/>
{/* value,  */}
      </div>

    </>
  );
};

export default Input;


