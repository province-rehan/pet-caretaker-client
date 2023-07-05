import React, { useEffect, useState } from "react";

const UsePetOwener = (email) => {
  const [isOwner, setIsOwner] = useState(false);
  const [isOwnerLoading, setIsOwnerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://petcaretaker-server.vercel.app/user/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsOwner(data.isOwner);
          setIsOwnerLoading(false);
        });
    }
  }, [email]);
  return [isOwner, isOwnerLoading];
};

export default UsePetOwener;
