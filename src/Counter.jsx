import React from "react";

function Counter(props) {
  console.log(props.data, "counter apply");
  return (
    <div>
      <h1>counter Function</h1>
    </div>
  );
}

export default React.memo(Counter);
