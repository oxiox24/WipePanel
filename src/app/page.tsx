"use client"
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react';


export default function Home() {
  return (
   <>
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
    <a className="btn btn-ghost normal-case text-xl">WipePanel</a>
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
<div>
<h1 className='flex items-center justify-center'>Overview</h1>
<br/>
<div className='flex items-center justify-center'>
<div className="card w-96 bg-neutral text-neutral-content  ">
  <div className="card-body items-center text-center ">
    <h2 className="card-title">Minecraft-01</h2>
    <p>Ram: 4g</p>
    <p>Disk: 64g</p>
    <p>Cpu: 400%</p>
    <p>Location : UK</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Start</button>
      <button className="btn btn-ghost">More...</button>
      </div>
    </div>
  </div>
</div>
  <br/>
  <br/>
  <br/>
  <div className='flex items-center justify-center'>
<div className="stats bg-primary text-primary-content">

  <div className="stat">
    <div className="stat-title">Account balance</div>
    <div className="stat-value">$20</div>
    <div className="stat-actions">
      <button className="btn btn-sm btn-success">Add funds</button>
      </div>
    </div>
  </div>
  </div>
  
</div>
   </>
  );
}
