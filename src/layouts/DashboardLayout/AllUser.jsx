import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AllUser = () => {
  const { user } = useContext(AuthContext);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch(`https://petcaretaker-server.vercel.app/user`)
      .then((res) => res.json())
      .then((data) => setEmails(data));
  }, [user?.email]);
  // console.log(emails);

  return (
    <div>
      <p className="text-2xl uppercase font-medium mb-5 text-center">Users</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Role</th>
              <th>Birth Certificate No.</th>
              <th>NID No.</th>
              <th>Birth Certificate Image</th>
            </tr>
          </thead>
          <tbody className="">
            {emails.map((email, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{email.userName}</td>
                <td>{email.userEmail}</td>
                <td>{email.phone}</td>
                <td>{email.location}</td>
                <td>{email.role}</td>
                <td>{email.birthCertificateNumber}</td>
                <td>{email.nidNumber ? email.nidNumber : "Not Found"}</td>
                <td>
                  <a href={email.birthCertificatePhoto} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
