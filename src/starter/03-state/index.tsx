import { useState } from "react";


function Component() {
  const [text, setText] = useState('shake and bake')
  const [list, setList] = useState([]);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center"
        onClick={() =>
          setText('wow')
        }
      >
        {text}
      </button>
    </div>
  );
}
export default Component;
