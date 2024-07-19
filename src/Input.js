import React from "react";

const InputComponent = ({ text, setText, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;

// const InputComponent = ({ text, setText }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   );
// };

// export default InputComponent;
