import { useState } from "react";

type Link = {
  id: number,
  url: string,
  text: string,
}
const navLinks: Link[] = [
  {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    text: 'react training',
    // remove text property to see the error
  },
]

function Component() {
  const [text, setText] = useState('shake and bake')
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button className="btn btn-center"
        onClick={() =>
          setLinks([...links, { id: 4, url: 'hello', text: 'hi' }])
        }
      >
        {text}
      </button>
    </div>
  );
}
export default Component;
