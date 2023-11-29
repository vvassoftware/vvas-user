import { useLocation } from "react-router-dom";

import { useGetAllReviewsBySchool } from "../actions/review";
import BackButton from "../components/BackButton";
import Review from "../components/Details/Review";

export default function AllReviews() {
  const { state } = useLocation();

  const allReviews = useGetAllReviewsBySchool(state.schoolId);

  return (
    <div>
      <header className="p-5">
        <BackButton title="All reviews" />
      </header>

      <div className="px-5 -mt-5">
        {allReviews.isLoading ? (
          <div>loading..</div>
        ) : allReviews.isError ? (
          <div>something went wrong</div>
        ) : allReviews.data ? (
          allReviews.data.map((review) => (
            <Review key={review.id} review={review} />
          ))
        ) : (
          <div>no reviews available</div>
        )}
      </div>
    </div>
  );
}
