// src/components/Alert.jsx

import "./Alert.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert", variant];

  if (outlined) { 
    classNames.push("is-outlined");
  }

  if (elevated) { 
    classNames.push("is-elevated");
  }

  return <div className={classNames.join(" ")}>{children}</div>
};

export default Alert;