// src/components/Alert.jsx

import clsx from "clsx";
import css from "./Alert.module.css";

console.log(css);

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isOutlined]: outlined,
        [css.isElevated]: elevated,
      })}
    >
      {children}
    </p>
  );
};

export default Alert;

// import clsx from "clsx"
// import "./Alert.css";

// const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       { children }
//     </p>
//   );
// };

// export default Alert;
