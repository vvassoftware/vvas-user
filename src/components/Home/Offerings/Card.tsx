// eslint-disable-next-line
export default function Card({ school }: any) {
  return (
    <div className="rounded-md overflow-hidden">
      <div>
        <img
          src={school.image}
          alt=""
          className="w-full h-[165px] object-cover"
        />
      </div>

      <div className="bg-darkBlue p-2">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-sm text-white font-bold">
              {school.name.length > 10
                ? `${school.name.slice(0, 10)}..`
                : school.name}
            </h3>
            <p className="text-xs text-white">Tampa, Florida</p>
          </div>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="3" fill="white" />
              <g clipPath="url(#clip0_3625_25513)">
                <path
                  d="M10.4844 14.8887C10.8572 15.331 11.1966 15.7968 11.4999 16.283C11.759 16.7401 11.8669 17.0502 12.0562 17.601C12.1723 17.9054 12.2773 17.9962 12.5029 17.9962C12.7487 17.9962 12.8602 17.8417 12.9464 17.6027C13.1253 17.0825 13.2657 16.6854 13.4872 16.3103C13.9219 15.5861 14.462 14.9425 14.9927 14.3239C15.1364 14.1489 16.0653 13.129 16.4835 12.3243C16.4835 12.3243 16.9974 11.4403 16.9974 10.2057C16.9974 9.05093 16.4906 8.25 16.4906 8.25L15.0312 8.61379L14.1449 10.7866L13.9257 11.0862L13.8818 11.1405L13.8235 11.2084L13.7212 11.3169L13.5749 11.4531L12.7857 12.0515L10.8126 13.112L10.4844 14.8887Z"
                  fill="#34A853"
                />
                <path
                  d="M8.44531 12.1762C8.92687 13.2001 9.85549 14.1001 10.4838 14.89L13.8209 11.2104C13.8209 11.2104 13.3508 11.7827 12.4979 11.7827C11.548 11.7827 10.7806 11.0766 10.7806 10.1863C10.7806 9.57569 11.1752 9.15625 11.1752 9.15625L8.90987 9.72126L8.44531 12.1762V12.1762Z"
                  fill="#FBBC04"
                />
                <path
                  d="M13.8614 6.18949C14.9697 6.52212 15.9184 7.22044 16.4922 8.25018L13.8252 11.2086C13.8252 11.2086 14.2198 10.7816 14.2198 10.1748C14.2198 9.26371 13.3956 8.58308 12.5052 8.58308C11.6632 8.58308 11.1797 9.15447 11.1797 9.15447V7.29071L13.8614 6.18945V6.18949Z"
                  fill="#4285F4"
                />
                <path
                  d="M9.05469 7.4964C9.71666 6.75917 10.8815 6 12.4874 6C13.2665 6 13.8534 6.1904 13.8534 6.1904L11.172 9.15584H9.27212L9.05469 7.49644V7.4964Z"
                  fill="#1A73E8"
                />
                <path
                  d="M8.44302 12.176C8.44302 12.176 8 11.3684 8 10.1985C8 9.09278 8.46178 8.12624 9.05434 7.49609L11.1731 9.15579L8.44302 12.176Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_3625_25513">
                  <rect
                    width="9"
                    height="12"
                    fill="white"
                    transform="translate(8 6)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="flex gap-y-1 flex-col mt-1">
          <div className="flex items-center gap-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="11"
              fill="none"
              viewBox="0 0 61 11"
            >
              <path
                fill="#fff"
                d="M9.354 4.25l-2.898-.42-1.295-2.627a.367.367 0 00-.655 0L3.21 3.83.312 4.25a.365.365 0 00-.202.624l2.097 2.044-.495 2.886a.365.365 0 00.53.384l2.591-1.362 2.592 1.362a.365.365 0 00.53-.385l-.496-2.885 2.097-2.044a.365.365 0 00-.202-.624zM22.05 4.25l-2.899-.42-1.295-2.627a.367.367 0 00-.655 0L15.905 3.83l-2.897.421a.365.365 0 00-.202.624l2.096 2.044-.495 2.886a.364.364 0 00.53.384l2.591-1.362 2.592 1.362a.365.365 0 00.53-.385l-.495-2.885 2.096-2.044a.364.364 0 00-.202-.623zM34.737 4.25l-2.898-.42-1.295-2.627a.367.367 0 00-.655 0L28.592 3.83l-2.898.421a.365.365 0 00-.202.624l2.097 2.044-.495 2.886a.364.364 0 00.53.384l2.59-1.362 2.593 1.362a.365.365 0 00.53-.385l-.496-2.885 2.097-2.044a.364.364 0 00-.202-.623zM47.432 4.25l-2.898-.42-1.295-2.627a.367.367 0 00-.655 0L41.288 3.83l-2.897.421a.365.365 0 00-.202.624l2.096 2.044-.495 2.886a.364.364 0 00.53.384l2.591-1.362 2.592 1.362a.365.365 0 00.53-.385l-.496-2.885 2.097-2.044a.365.365 0 00-.202-.624z"
              ></path>
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.333"
                d="M54.954 1.292a.459.459 0 01.855 0l.955 2.647a.457.457 0 00.427.292h2.348c.434 0 .623.54.282.804l-1.67 1.503a.447.447 0 00-.15.504l.61 2.586c.15.416-.331.772-.695.517l-2.27-1.44a.462.462 0 00-.53 0l-2.27 1.44c-.363.255-.844-.102-.695-.517l.61-2.586a.446.446 0 00-.149-.504l-1.67-1.503c-.342-.264-.152-.804.28-.804h2.349a.457.457 0 00.427-.292l.955-2.647h0z"
              ></path>
            </svg>
            <span className="text-white font-bold text-xs">
              ({school.stars})
            </span>
          </div>
          <div className="flex justify-end w-full items-center gap-x-1 text-white text-xs">
            <p>From</p>
            <span className="font-bold text-sm">
              ${school.startPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
