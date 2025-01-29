import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";

function UserList() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("http://localhost:16800/api/v1/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  console.log("user", users);

  return (
    <>
      <h1 className="text-xl font-medium mb-5">User List</h1>

      <div className="overflow-x-auto w-full">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users?.map((user) => {
              return (
                <Table.Row
                  key={user.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
}

export default UserList;
