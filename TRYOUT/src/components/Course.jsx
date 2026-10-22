import React from 'react'


function FreeCourse() {
    const name = "Alpha";
    return (
    <div>Free Course: {name}</div>
    );
}

function PaidCourse() {
    const name = "Beta";
    return (
    <>
    <div>Paid Course: {name}</div>
    </> 
    );
}

function Course() {
    return (
    <>
    <div>Course</div>
    <FreeCourse />
    <PaidCourse />
    </>
    );
}

export default Course;
