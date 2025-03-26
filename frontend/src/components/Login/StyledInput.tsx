import * as React from 'react';

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password';
}

// 👇 Wrap the component with forwardRef
export const StyledInput = React.forwardRef<HTMLInputElement, StyledInputProps>(
  ({ type, ...props }, ref) => {
    return (
      <div className="input-container">
        <input type={type} className="input" ref={ref} {...props} />
        <style jsx>{`
          .input-container {
            width: 90%;
            height: 40px;
            border-radius: 10px;
            border-width: 1px;
            border-color: #67a6d9;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
            padding: 0 15px;
            background-color: #a8d1e7;
          }
          .input {
            width: 100%;
            height: 100%;
            background-color: transparent;
            color: rgb(10, 71, 104);
            font-size: 16px;
            font-family: Roboto;
            font-weight: 700;
            border: none;
            outline: none;
            border-radius: 10px;
          }
          .input::placeholder {
            color: #0a4768;
            opacity: 0.7;
          }
        `}</style>
      </div>
    );
  }
);

// ✅ Add a display name (helpful for debugging in React DevTools)
StyledInput.displayName = 'StyledInput';
