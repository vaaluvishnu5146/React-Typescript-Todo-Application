interface GreetProps {
  message: string;
}

function GreetFunction(props: GreetProps) {
  console.log("Function component ", props);
  return <p>{props.message}</p>;
}

export default GreetFunction;
