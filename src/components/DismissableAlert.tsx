import React from "react";
interface DismissableAlertProps{
    children : string;
    onClose: () => void;
}

const DismissableAlert = ({children, onClose} :DismissableAlertProps) => {

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
       {children}
      <button
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default DismissableAlert;
