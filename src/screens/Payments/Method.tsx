import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import BackButton from "../../components/BackButton";
import Input from "../../ui/Input";
import { createCredit } from "../../actions/credit";
import { UserAuthContext } from "../../context/UserAuth";

enum ENUM_METHOD {
  VENMO = "VENMO",
  CREDIT_CARD = "CREDIT_CARD",
  PAYPAL = "PAYPAL",
}

export type InputMethodPayments = {
  name: string;
  accountNumber: string;
  lastname: string;
  expiration: string;
  cvv: string;
};

export default function Method() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(UserAuthContext);

  const [methodSelected, setMethodSelected] = useState<ENUM_METHOD>(
    ENUM_METHOD.CREDIT_CARD
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputMethodPayments>({
    defaultValues: {
      accountNumber: "",
      name: "",
      lastname: "",
      expiration: "",
      cvv: "",
    },
  });

  const handleCreateCredit: SubmitHandler<
    InputMethodPayments
  > = async () => {
    try {
      const response = await createCredit({
        schoolId: location.state.schoolId,
        value: location.state.value,
        userId: user.id,
      });

      if (response) {
        toast.success("Purchased credit");
        navigate("/hours-remaining");
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

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

          <form
            onSubmit={handleSubmit(handleCreateCredit)}
            className="mt-3 flex flex-col gap-y-3"
          >
            <div className="space-y-3">
              <Input
                register={register}
                required={true}
                id="accountNumber"
                placeholder="Account number"
              />
              {errors.accountNumber && (
                <p className="text-red-500 text-sm mt-1">
                  Name is required
                </p>
              )}
              <Input
                register={register}
                required={true}
                id="name"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  Name is required
                </p>
              )}
            </div>

            <div>
              <Input
                register={register}
                id="lastname"
                placeholder="Lastname"
                required={true}
              />
              {errors.lastname && (
                <p className="text-red-500 text-sm mt-1">
                  Lastname is required
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-x-3">
              <div>
                <Input
                  register={register}
                  id="expiration"
                  required={true}
                  placeholder="Expiration date"
                />
                {errors.expiration && (
                  <p className="text-red-500 text-sm mt-1">
                    Expiration is required
                  </p>
                )}
              </div>

              <div>
                <Input
                  register={register}
                  id="cvv"
                  required={true}
                  placeholder="CVV"
                />
                {errors.cvv && (
                  <p className="text-red-500 text-sm mt-1">
                    CVV is required
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 h-[50px] bg-darkBlue text-white font-medium text-lg rounded-md"
            >
              Complete purchase
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
