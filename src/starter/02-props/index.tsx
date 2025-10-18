

type ComponentProps = {
  name: string;
  id: number;
}

function Component(props: ComponentProps) {


  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>ID: {props.id}</h2>
    </div>
  );
}
export default Component;
