import { useState } from "react";

export default function Playground() {
  const [show, setShow] = useState<boolean>(true);
  return (
    <div>
      {show ? <h1>Showing all</h1> : <h1>Hiding all</h1>}
      <Controlls setShow={setShow} />
    </div>
  );
}

function Controlls(props: { setShow: (show: boolean) => void }) {
  return (
    <div>
      <button onClick={() => props.setShow(true)}>Show</button>
      <button onClick={() => props.setShow(false)}>Hide</button>
    </div>
  );
}
