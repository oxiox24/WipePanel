import Link from "next/link";

export default function serverInfo() {
    return (
        <>
        <div className="tracking-wider">
        <div className="navbar bg-base-100">
  <div className="navbar-start">
  <div className="dropdown z-10">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Create A Server</a></li>
        <li>
          <a>My Servers</a>
          <ul className="p-2">
            <li><a>Server 1</a></li>
            <li><a>Server 2</a></li>
            <li><a>Server 3</a></li>
          </ul>
        </li>
        <li><a>Shop</a></li>
        <li><a>Credit: x$</a></li>
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl" href={"/"}>WipePanel</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Create A Server</a></li>
      <li tabIndex={0}>
        <details>
          <summary>My Servers</summary>
          <ul className="p-2">
            <li><a>Server 1</a></li>
            <li><a>Server 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Shop</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn p-2">Login</a>
  </div>
</div>
<div className="flex items-center justify-center">
<div className="card w-96 shadow-xl bg-slate-700">
  <figure></figure>
  <div className="card-body p-40 w-70">
    <div className="card-actions justify-end">
    </div>
    </div>
  </div>
</div>
<br/>
<div className="flex gap-2 justify-center items-center">
<button className="btn btn-success">Start</button>
<button className="btn btn-warning">Stop</button>
<button className="btn btn-error">Kill</button> 
 </div> 
 </div> 
      </>
    )
}