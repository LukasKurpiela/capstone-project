import React from 'react';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

// :root {
//     --primary: #3acbf7;
// }

// .btn {
//     padding: 8px 20px;
//     border-radius: 4px;
//     outline: none;
//     border: none;
//     cursor: pointer;
// }

// .btn:hover {
//     padding: 8px 20px;
//     transition: all 0.3s ease-out;
//     background: #fff;
//     color: #6568F4;

// }

// .btn--primary {
//     background-color: var(--primary);
// }

// .btn--outline {
//     background-color: transparent;
//     color: #fff;
//     padding: 8px 20px;
//     border-radius: 4px;
//     border: 1px solid var(--primary);
//     transition: all 0.3s ease-out;

// }

// .btn--medium {
//     padding: 8px 20px;
//     border-radius: 4px;
//     font-size: 18px;
//     color: #fff
// }

// .btn--large {
//     padding: 12px 26px;
//     border-radius: 4px;
//     font-size: 20px;
//     color: #fff
// }