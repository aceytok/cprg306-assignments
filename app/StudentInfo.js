import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
    const name = "Ace Manuyag";
    const courseSection = "CPRG 306 D";
    const githubRepo = "https://github.com/aceytok/cprg306-assignments";

    return (
        <div>
            <p>Name: {name}</p>
            <p>Course Section: {courseSection}</p>
            <p>Github: <Link href={githubRepo}>{githubRepo}</Link></p>
        </div>
    )
}

export default StudentInfo;