import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

import Button from "../components/Footer/Button";
import Layout from "../components/Layout";
import { UserAuthContext } from "../context/UserAuth";

export default function Profile() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const { user, setUser } = useContext(UserAuthContext);

  const navigate = useNavigate();
  const [showModalLogout, setShowModalLogout] =
    useState<boolean>(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem("access_token") ? true : false);
  }, []);

  return (
    <Layout>
      <Dialog.Root open={showModalLogout}>
        <Dialog.Portal>
          <Dialog.Overlay
            className="DialogOverlay"
            onClick={() => setShowModalLogout(false)}
          />

          <Dialog.Content className="DialogContent">
            <h3 className="text-2xl text-darkBlue font-bold">
              You want to log out?
            </h3>

            <p className="text-neutral-700 mt-2">
              Doing so will result in you being logged out of your
              account and will need to log in again to access it
              again.
            </p>

            <div className="flex items-center gap-x-3 mt-4">
              <button
                onClick={() => setShowModalLogout(false)}
                className="font-medium text-darkBlue border w-full border-darkBlue/90 h-[50px] rounded-md"
              >
                Cancel
              </button>
              <button
                className="font-medium text-white w-full bg-darkBlue h-[50px] rounded-md"
                onClick={() => {
                  navigate("/auth");
                  localStorage.removeItem("access_token");
                  setUser(null);
                }}
              >
                Yes, leave
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {isLogged ? (
        <>
          <header className="flex justify-between items-start p-5">
            <button>
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="120"
                  height="120"
                  rx="60"
                  fill="#EEEEEE"
                />
                <path
                  d="M60 40C62.6522 40 65.1957 41.0536 67.0711 42.9289C68.9464 44.8043 70 47.3478 70 50C70 52.6522 68.9464 55.1957 67.0711 57.0711C65.1957 58.9464 62.6522 60 60 60C57.3478 60 54.8043 58.9464 52.9289 57.0711C51.0536 55.1957 50 52.6522 50 50C50 47.3478 51.0536 44.8043 52.9289 42.9289C54.8043 41.0536 57.3478 40 60 40ZM60 80C60 80 80 80 80 75C80 69 70.25 62.5 60 62.5C49.75 62.5 40 69 40 75C40 80 60 80 60 80Z"
                  fill="#1B4965"
                />
              </svg>
            </button>

            <button
              className="bg-darkBlue grid place-items-center w-[50px] h-[50px] rounded-md"
              onClick={() => setShowModalLogout(true)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z"
                  fill="white"
                />
              </svg>
            </button>
          </header>

          <div className="px-5">
            <h3 className="text-xl text-darkBlue font-bold">
              {user?.name} {user?.lastname}
            </h3>
            <p className="text-[#333]">{user?.email}</p>
          </div>

          <div className="px-5 mt-5">
            <h3 className="text-[28px] font-bold text-darkBlue">
              Settings
            </h3>

            <div className="mt-3">
              <Button title="Past bookings" route="/past-bookings" />
              <Button
                title="Payment methods"
                route="/payments-methods"
              />
              <Button
                title="Hours and classes remaining"
                route="/hours-remaining"
              />
            </div>
          </div>

          <div className="px-5 mt-[30px]">
            <h3 className="text-[28px] font-bold text-darkBlue">
              About us
            </h3>

            <div className="mt-3">
              <Button title="Want to be featured here?" route="" />
              <Button
                externalLink
                title="Legal terms we all love"
                route="https://www.vvassoftware.com/tos"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="p-5">
          <header>
            <h3 className="text-center text-2xl text-darkBlue font-bold">
              Login or Register
            </h3>
            <p className="text-neutral-700 text-center">
              to access an account
            </p>
          </header>

          <div className="mt-5 flex flex-col gap-y-3">
            <button
              className="font-medium text-lg w-full h-[50px] rounded-md bg-darkBlue text-white"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="font-medium text-lg w-full h-[50px] rounded-md bg-white border border-darkBlue/90 text-darkBlue"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>

          <div className="mt-5">
            <h3 className="text-[28px] font-bold text-darkBlue">
              About us
            </h3>

            <div className="mt-3">
              <Button title="Want to be featured here?" route="" />
              <Button
                externalLink
                title="Legal terms we all love"
                route="https://www.vvassoftware.com/tos"
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
