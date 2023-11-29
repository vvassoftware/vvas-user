import dayjs from "dayjs";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

// eslint-disable-next-line
export default function Review({ review }: any) {
  return (
    <div className="py-5 border-b border-darkBlue/40">
      <div className="flex items-center gap-x-3">
        <div className="w-12 h-12 bg-lightBlue rounded-full"></div>
        <div>
          <h4 className="text-sm font-bold text-darkBlue">
            {review.user.name}
          </h4>
          {/* <p className="text-sm text-darkBlue">September 12, 2023</p> */}
          <p className="text-sm text-darkBlue">
            {dayjs(review.createdAt).format("MMMM DD, YYYY")}
          </p>
        </div>
      </div>

      {/* stars */}
      <div className="mt-3 flex">
        <span>
          {review.stars >= 1 ? (
            <HiStar className="w-4 h-4 text-darkBlue" />
          ) : (
            <HiOutlineStar className="w-4 h-4 text-darkBlue" />
          )}
        </span>
        <span>
          {review.stars >= 2 ? (
            <HiStar className="w-4 h-4 text-darkBlue" />
          ) : (
            <HiOutlineStar className="w-4 h-4 text-darkBlue" />
          )}
        </span>
        <span>
          {review.stars >= 3 ? (
            <HiStar className="w-4 h-4 text-darkBlue" />
          ) : (
            <HiOutlineStar className="w-4 h-4 text-darkBlue" />
          )}
        </span>
        <span>
          {review.stars >= 4 ? (
            <HiStar className="w-4 h-4 text-darkBlue" />
          ) : (
            <HiOutlineStar className="w-4 h-4 text-darkBlue" />
          )}
        </span>
        <span>
          {review.stars === 5 ? (
            <HiStar className="w-4 h-4 text-darkBlue" />
          ) : (
            <HiOutlineStar className="w-4 h-4 text-darkBlue" />
          )}
        </span>
      </div>

      {/* body */}
      <div className="mt-[10px]">
        <p className="text-darkBlue">{review.content}</p>
      </div>
    </div>
  );
}
