import { useState } from "react";

function Component() {


  const [text, setText] = useState('');
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <form className="form">
        <input type="text" placeholder="text" className="form-input mb-1" value={text} onChange={(e) =>
          setText(e.target.value)
        } />

        <input type="email" placeholder="email" className="form-input mb-1" value={email} onChange={handleChange
        } />

      </form>
    </div>
  );
}
export default Component;
