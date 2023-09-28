import React from "react";
import StudentInfo from "../StudentInfo.js";

export default function HomeWeek2() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-4xl">My Shopping List</h1>
                <StudentInfo />
            </div>
        </main>
    )
}

