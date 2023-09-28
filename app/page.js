import React from "react";
import Link from "next/link";
import StudentInfo from "./StudentInfo.js";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li><Link href="/week2">Week 2</Link></li>
        </ul>
      </div>
    </main>
  )
}