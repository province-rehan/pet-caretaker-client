import React, { useEffect, useState } from "react";

const UsePetReceiver = (email) => {
  const [isReceiver, setIsReceiver] = useState(false);
  const [isReceiverLoading, setIsReceiverLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://petcaretaker-server.vercel.app/user/role/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsReceiver(data.isReceiver);
          setIsReceiverLoading(false);
        });
    }
  }, [email]);
  return [isReceiver, isReceiverLoading];
};

export default UsePetReceiver;
