// eslint-disable-next-line
export default function Card({ boat }: any) {
  return (
    <div
      className={`rounded-md after:w-full after:h-full after:absolute after:bg-neutral-950/60 after:top-0 after:left-0 relative after:rounded-md h-[140px] w-full`}
    >
      <div className="w-full h-full absolute inset-0">
        <img
          src={boat?.image}
          alt={boat?.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute z-50 top-2 right-2 flex items-center gap-x-1">
        <svg
          width="11"
          height="10"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 5.33333C6.35362 5.33333 6.69276 5.47381 6.94281 5.72386C7.19286 5.97391 7.33333 6.31304 7.33333 6.66667V7.66667C7.33333 9.036 5.94133 10 3.66667 10C1.392 10 0 9.036 0 7.66667V6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333H6ZM9.33333 5.33333C9.68696 5.33333 10.0261 5.47381 10.2761 5.72386C10.5262 5.97391 10.6667 6.31304 10.6667 6.66667V7C10.6667 8.39267 9.62133 9.33333 7.66667 9.33333C7.57267 9.33333 7.48 9.33133 7.39067 9.32667C7.75 8.90867 7.96267 8.40267 7.99533 7.826L8 7.66667V6.66667C8 6.20533 7.844 5.78 7.58133 5.442L7.49 5.33333H9.33333ZM3.66667 0C3.97308 -4.56598e-09 4.2765 0.0603534 4.55959 0.177614C4.84269 0.294875 5.09991 0.466747 5.31658 0.683417C5.53325 0.900088 5.70512 1.15731 5.82239 1.44041C5.93965 1.7235 6 2.02692 6 2.33333C6 2.63975 5.93965 2.94317 5.82239 3.22626C5.70512 3.50935 5.53325 3.76658 5.31658 3.98325C5.09991 4.19992 4.84269 4.37179 4.55959 4.48905C4.2765 4.60631 3.97308 4.66667 3.66667 4.66667C3.04783 4.66667 2.45434 4.42083 2.01675 3.98325C1.57917 3.54566 1.33333 2.95217 1.33333 2.33333C1.33333 1.71449 1.57917 1.121 2.01675 0.683417C2.45434 0.245833 3.04783 9.22141e-09 3.66667 0V0ZM8.33333 1.33333C8.77536 1.33333 9.19928 1.50893 9.51184 1.82149C9.82441 2.13405 10 2.55797 10 3C10 3.44203 9.82441 3.86595 9.51184 4.17851C9.19928 4.49107 8.77536 4.66667 8.33333 4.66667C7.89131 4.66667 7.46738 4.49107 7.15482 4.17851C6.84226 3.86595 6.66667 3.44203 6.66667 3C6.66667 2.55797 6.84226 2.13405 7.15482 1.82149C7.46738 1.50893 7.89131 1.33333 8.33333 1.33333Z"
            fill="white"
          />
        </svg>

        <p className="text-xs text-white">2 people</p>
      </div>

      <div className="bottom-2 left-2 z-50 absolute">
        <p className="text-white font-medium mb-[3px]">
          {boat?.name}
        </p>

        <div className="flex items-center gap-x-1">
          <div className="text-[10px] uppercase bg-darkBlue py-1 px-2 text-white rounded-md">
            Wake
          </div>
          <div className="text-[10px] uppercase bg-darkBlue py-1 px-2 text-white rounded-md">
            Wake
          </div>
          <div className="text-[10px] uppercase bg-darkBlue py-1 px-2 text-white rounded-md">
            Wake
          </div>
        </div>
      </div>
    </div>
  );
}
