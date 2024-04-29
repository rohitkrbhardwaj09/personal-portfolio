import React from "react";

const button = (props) => {
  return (
    <button className="ml-6 hover:bg-[var(--base-color)] hover:text-[var(--secondary-color)] hover:border-2 border-2 text-lg px-5 py-2 bg-[var(--primary-color)] rounded-3xl">
      {props.children}
    </button>
  );
};

export default button;
