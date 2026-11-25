import React from 'react'

function Student() {

    let sno = 1;
    let studentName = 'Kalpana';
    let rollNo = 101;
    let course = 'B.Tech';
    let college = 'St. Marys';

    function showName() {
        alert(studentName);
    }

    function showRollNo() {
        alert(rollNo);
    }

    function showCourse() {
        alert(course);
    }

    function showCollege() {
        alert(college);
    }

    return (
        <div>
            <h2>Student Information</h2>

            <table border="2">
                <tr>
                    <th>S.No</th>
                    <th>Details</th>
                    <th>Information</th>
                    <th>Action</th>
                </tr>

                <tr>
                    <td>1</td>
                    <td>Name</td>
                    <td>{studentName}</td>
                    <td><button onClick={showName}>Click</button></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Roll Number</td>
                    <td>{rollNo}</td>
                    <td><button onClick={showRollNo}>Click</button></td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Course</td>
                    <td>{course}</td>
                    <td><button onClick={showCourse}>Click</button></td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>College</td>
                    <td>{college}</td>
                    <td><button onClick={showCollege}>Click</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Student