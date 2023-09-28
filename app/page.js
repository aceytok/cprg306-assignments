import React from "react";
import Link from "next/link";
import StudentInfo from "./StudentInfo.js";


const Page = () => {
  return (
    <div>
      <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo />
      <Link href="/week2">Week 2</Link>
    </div>
  )
}

export default Page;