import React, { useContext } from "react";
import NavigationBar from "../../pages/Shared/NavigationBar/NavigationBar";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import UseAdmin from "../../hooks/UseAdmin";
import UsePetOwener from "../../hooks/UsePetOwener";
import UsePetReceiver from "../../hooks/UsePetReceiver";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isOwner] = UsePetOwener(user?.email);
  const [isReceiver] = UsePetReceiver(user?.email);

  return (
    <div>
      <NavigationBar />
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content justify-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-44 h-full bg-white text-base-content">
            {/* Sidebar content here */}

            {!isAdmin && (
              <>
                <li className="mt-2">
                  <Link className="" to="/dashboard/orderpetfood">
                    Ordered Pet Food
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className="" to="/dashboard/addreview">
                    Add Review
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                {" "}
                <li className="mt-2">
                  <Link className="" to="/dashboard/allusers">
                    All Users
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className="" to="/dashboard/allorders">
                    All Orders
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className="" to="/dashboard/allpayment">
                    All Payments
                  </Link>
                </li>
              </>
            )}

            {isOwner && (
              <li className="mt-2">
                <Link className="" to="/dashboard/postpet">
                  Post pet for adoption
                </Link>
              </li>
            )}

            {isReceiver && (
              <li className="mt-2">
                <Link className="" to="/dashboard/takepet">
                  Take Pet
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
