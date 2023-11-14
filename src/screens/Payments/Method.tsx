import { useState } from "react";
import BackButton from "../../components/BackButton";
import Input from "../../ui/Input";
import { useNavigate } from "react-router-dom";

enum ENUM_METHOD {
  VENMO = "VENMO",
  CREDIT_CARD = "CREDIT_CARD",
  PAYPAL = "PAYPAL",
}

export default function Method() {
  const navigate = useNavigate();

  const [methodSelected, setMethodSelected] = useState<ENUM_METHOD>(
    ENUM_METHOD.VENMO
  );

  return (
    <div>
      <header className="p-5">
        <BackButton title="Paymets" />
      </header>

      <div className="px-5">
        <h3 className="text-lg font-bold text-darkBlue">Hi Steve,</h3>
        <p className="text-neutral-700">
          You are one tep closer to fun on the water!
        </p>
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold text-darkBlue">
          Order details
        </h2>

        <div className="flex items-center gap-x-2 mt-2">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="#C0CED8" />
            </svg>
          </div>
          <div className="flex flex-col items-start gap-x-2">
            <p className="text-darkBlue font-bold">1 hour package</p>
            <p className="text-neutral-700">Water Sport School</p>
          </div>
        </div>
      </div>

      <div className="px-5">
        <h2 className="text-2xl font-bold text-darkBlue">
          Select payment method
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-3">
          <button
            onClick={() => setMethodSelected(ENUM_METHOD.PAYPAL)}
            className={`${
              methodSelected === ENUM_METHOD.PAYPAL
                ? "ring-2 ring-darkBlue"
                : "ring-2 ring-transparent"
            } text-lg uppercase font-bold text-darkBlue w-full h-[120px] border-lightBlue border rounded-md`}
          >
            Paypal
          </button>
          <button
            onClick={() => setMethodSelected(ENUM_METHOD.CREDIT_CARD)}
            className={`${
              methodSelected === ENUM_METHOD.CREDIT_CARD
                ? "ring-2 ring-darkBlue"
                : "ring-2 ring-transparent"
            } text-lg uppercase font-bold text-darkBlue w-full h-[120px] border-lightBlue border rounded-md`}
          >
            CREDIT CARD
          </button>
          <button
            onClick={() => setMethodSelected(ENUM_METHOD.VENMO)}
            className={`${
              methodSelected === ENUM_METHOD.VENMO
                ? "ring-2 ring-darkBlue"
                : "ring-2 ring-transparent"
            } text-lg uppercase font-bold text-darkBlue w-full h-[120px] border-lightBlue border rounded-md`}
          >
            venmo
          </button>
        </div>
      </div>

      {methodSelected === ENUM_METHOD.CREDIT_CARD && (
        <div className="p-5 mt-1 pb-8">
          <h2 className="text-2xl font-bold text-darkBlue">
            Credit card details
          </h2>

          <div className="mt-3 flex flex-col gap-y-3">
            <Input placeholder="Name" />
            <Input placeholder="Lastname" />

            <div className="grid grid-cols-2 gap-x-3">
              <Input placeholder="Expiration date" />
              <Input placeholder="CVV" />
            </div>

            <button
              onClick={() => navigate("ticket")}
              className="mt-2 h-[50px] bg-darkBlue text-white font-medium text-lg rounded-md"
            >
              Complete purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
