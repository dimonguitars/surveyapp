import React from "react";

export default ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBotom: 5 }} />
      <div className="red-text" style={{ marginBotom: 20 }}>
        {meta.touched && meta.error}
      </div>
    </div>
  );
};
