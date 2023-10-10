import React from "react";

const User = ({userData}) => {
    console.log("탔니?");
    console.log(userData);
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>

    );
}

const UserList = () => {
    const users = [
        { name: "kim", email: "kim@gmail.com" },
        { name: "park", email: "park@gmail.com" },
        { name: "yoo", email: "yoo@gmail.com" },
        { name: "gwon", email: "gwon@gmail.com" }
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    );
};

export default UserList;