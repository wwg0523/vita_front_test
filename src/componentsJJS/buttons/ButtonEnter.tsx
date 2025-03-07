import React from 'react';
import styles from './ButtonEnter.module.css';

interface ButtonEnterProps {
  text: string;
  styleID: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonEnter: React.FC<ButtonEnterProps> = ({
  text,
  styleID,
  onClick,
  disabled = false,
  type = 'button'
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${styles[styleID]}`}
    >
      {text}
    </button>
  );
};

export default ButtonEnter;
