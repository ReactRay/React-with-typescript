import { useState } from "react";

function Component() {


  const [text, setText] = useState('');
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data);
  }
  return (
    <div>
      <h2>React & Typescript</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="text" className="form-input mb-1" value={text}
          name='text'
          onChange={(e) =>
            setText(e.target.value)
          } />

        <input type="email" placeholder="email"
          name='email'
          className="form-input mb-1" value={email} onChange={handleChange
          } />

        <button className="btn" type="submit">submit</button>

      </form>
    </div>
  );
}
export default Component;
