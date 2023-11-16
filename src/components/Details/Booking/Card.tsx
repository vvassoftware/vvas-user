interface CardProps {
  variant: "PARTIALLY" | "AVAILABLE" | "EXPIRED";
  startTime: string;
  // eslint-disable-next-line
  reservations: any;
  endTime: string;
}

export default function Card({
  variant,
  startTime,
  reservations,
  endTime,
}: CardProps) {
  const isSelected = reservations.find(
    // eslint-disable-next-line
    (item: any) => (item.startTime === startTime ? true : false)
  );

  return (
    <div
      className={`${
        variant === "AVAILABLE"
          ? "bg-white"
          : variant === "EXPIRED"
          ? "bg-[#EA4335]"
          : "bg-[#92ACD3]"
      } ${
        isSelected ? "ring-darkBlue" : "ring-transparent"
      } ring-2 cursor-pointer rounded-sm p-1 flex flex-col gap-y-[2px]`}
    >
      <div
        className={`text-xs font-bold ${
          variant === "AVAILABLE"
            ? "text-darkBlue"
            : variant === "EXPIRED"
            ? "text-white"
            : "text-white"
        }`}
      >
        {startTime.split(" ")[0]}
        <span className="font-normal lowercase text-[10px]">
          {startTime.split(" ")[1]}
        </span>{" "}
        - {endTime.split(" ")[0]}
        <span className="font-normal lowercase text-[10px]">
          {endTime.split(" ")[1]}
        </span>
      </div>
      <div className="flex items-center gap-x-1">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.90909 3.63636H11.6364V6.51636L7.27273 5.09091L2.90909 6.51636M1.41091 13.0909H1.45455C2.61818 13.0909 3.63636 12.4509 4.36364 11.6364C5.09091 12.4509 6.10909 13.0909 7.27273 13.0909C8.43636 13.0909 9.45455 12.4509 10.1818 11.6364C10.9091 12.4509 11.9273 13.0909 13.0909 13.0909H13.1273L14.5091 8.22546C14.5673 8.04364 14.5455 7.84 14.4655 7.66545C14.3709 7.49091 14.2182 7.36 14.0291 7.30182L13.0909 6.99636V3.63636C13.0909 3.25059 12.9377 2.88062 12.6649 2.60784C12.3921 2.33506 12.0221 2.18182 11.6364 2.18182H9.45455V0H5.09091V2.18182H2.90909C2.52332 2.18182 2.15335 2.33506 1.88057 2.60784C1.60779 2.88062 1.45455 3.25059 1.45455 3.63636V6.99636L0.516364 7.30182C0.327273 7.36 0.174545 7.49091 0.0799999 7.66545C-7.58605e-08 7.84 -0.0218182 8.04364 0.0363636 8.22546M13.0909 14.5455C12.08 14.5455 11.0691 14.2036 10.1818 13.5782C8.40727 14.8218 6.13818 14.8218 4.36364 13.5782C3.47636 14.2036 2.46545 14.5455 1.45455 14.5455H0V16H1.45455C2.45091 16 3.44727 15.7455 4.36364 15.2727C6.18182 16.2182 8.36364 16.2182 10.1818 15.2727C11.0982 15.7455 12.0873 16 13.0909 16H14.5455V14.5455H13.0909Z"
            fill={`${
              variant === "AVAILABLE"
                ? "#1B4965"
                : variant === "EXPIRED"
                ? "#fff"
                : "#fff"
            }`}
          />
        </svg>

        <span
          className={`font-medium text-sm ${
            variant === "AVAILABLE"
              ? "text-darkBlue"
              : variant === "EXPIRED"
              ? "text-white"
              : "text-white"
          }`}
        >
          04
        </span>
      </div>
      <span
        className={`block ${
          variant === "AVAILABLE"
            ? "text-darkBlue"
            : variant === "EXPIRED"
            ? "text-white"
            : "text-white"
        } font-medium text-sm`}
      >
        {variant === "AVAILABLE"
          ? "AVAILABLE"
          : variant === "EXPIRED"
          ? "EXPIRED"
          : "PARTIALLY"}
      </span>
    </div>
  );
}
