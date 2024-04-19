// export const Mailbox = ({ username, messages }) => {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && <p>You have {messages.length} unread messages</p>}
//     </>
//   );
// };

// src/components/Alert.jsx

import clsx from "clsx";
import "./Alert.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};
