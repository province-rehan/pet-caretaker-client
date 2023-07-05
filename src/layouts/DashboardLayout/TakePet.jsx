import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const TakePet = () => {
  const { user } = useContext(AuthContext);
  const [adoptedPets, setAdoptedPets] = useState([]);
  console.log(adoptedPets);
  useEffect(() => {
    fetch(`https://petcaretaker-server.vercel.app/adoptiondata?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdoptedPets(data));
  }, [user.email]);
  return (
    <div>
      <p className="text-3xl font-medium text-center my-5">Adopted Pets</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Pet Owner Name</th>
              <th>Pet Owner Phone Number</th>
              <th>Pet Receiver Name</th>
              <th>Pet Name</th>
              <th>Pet Category</th>
              <th>Daily Feeding Time</th>
              <th>Adoption Starting Date</th>
              <th>Adoption Ending Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {adoptedPets.map((adoptedPet, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{adoptedPet?.ownerName}</td>
                <td>{adoptedPet?.ownerPhone}</td>
                <td>{adoptedPet?.petReceiverName}</td>
                <td>{adoptedPet?.petName}</td>
                <td>{adoptedPet?.petCategory}</td>
                <td>{adoptedPet?.dailyFeeding}</td>
                <td>{adoptedPet?.adoptionStartDate}</td>
                <td>{adoptedPet?.adoptionEndDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TakePet;
