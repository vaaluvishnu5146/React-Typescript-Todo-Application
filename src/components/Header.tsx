import { Link } from "react-router";

export default function Header() {
  return (
    <div className="h-[5%] flex px-5 items-center bg-grey">
      <div className="w-[20%]">Logo</div>
      <div className="w-[80%] flex justify-end gap-x-5">
        <Link to={"/"}>Task</Link>
        <Link to={"/tags"}>Tags</Link>
        <Link to={"/archived"}>Archived</Link>
        <Link to={"/settings"}>Settings</Link>
      </div>
    </div>
  );
}
