import { useContext } from "react";
import { useCredits } from "../../actions/credit";
import BackButton from "../../components/BackButton";
import Exclamation from "../../components/Illustrations/Exclamation";
import HoursRemainingCard from "../../components/Settings/HoursRemaining/Card";
import { UserAuthContext } from "../../context/UserAuth";
import { useNavigate } from "react-router-dom";

export default function HoursRemaining() {
  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const credits = useCredits(user?.id);

  return (
    <div>
      <header className="p-5">
        <BackButton
          title="Hours/classes remaining"
          onClick={() => navigate("/profile")}
        />
      </header>

      <div className="flex flex-col gap-y-5 px-5 mb-5">
        {credits?.data?.length === 0 ? (
          <div className="grid place-items-center h-[calc(100vh_-_149px_-_20px)]">
            <div className="flex flex-col items-center">
              <Exclamation />
              <p className="text-darkBlue mt-3">
                You have no fun planned as of right now.
              </p>
              <button className="mt-3 bg-darkBlue w-full h-[50px] text-lg text-white font-medium rounded-md">
                Booking now
              </button>
            </div>
          </div>
        ) : credits.isLoading ? (
          <div>loading... </div>
        ) : credits.isError ? (
          <div>error</div>
        ) : (
          // eslint-disable-next-line
          credits?.data.map((credit: any, index: number) => (
            <HoursRemainingCard key={index} credit={credit} />
          ))
        )}
      </div>
    </div>
  );
}
