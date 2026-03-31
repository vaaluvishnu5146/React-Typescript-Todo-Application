export default function Sidebar(props: { message: string }) {
  return (
    <div className="sidebar">
      <p>{props.message}</p>
    </div>
  );
}
