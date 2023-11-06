import { useNavigate } from "react-router-dom";

interface ButtonProps {
  title: string;
  route: string;
}

export default function Button({ title, route }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      className="w-full flex items-center justify-between p-3 bg-[#EEEEEE] rounded-md mb-2"
      onClick={() => navigate(route)}
    >
      <span>{title}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.8826 17.2432C9.68485 17.2432 9.49155 17.1845 9.32714 17.0746C9.16273 16.9648 9.03459 16.8086 8.95892 16.6259C8.88325 16.4432 8.86345 16.2422 8.90202 16.0482C8.94058 15.8543 9.03579 15.6761 9.1756 15.5362L12.7106 12.0002L9.1756 8.46424C8.99344 8.27564 8.89265 8.02304 8.89493 7.76084C8.8972 7.49865 9.00237 7.24783 9.18778 7.06242C9.37319 6.87702 9.624 6.77185 9.8862 6.76957C10.1484 6.76729 10.401 6.86809 10.5896 7.05024L14.8316 11.2932C15.0191 11.4808 15.1244 11.7351 15.1244 12.0002C15.1244 12.2654 15.0191 12.5197 14.8316 12.7072L10.5896 16.9502C10.4969 17.0432 10.3867 17.117 10.2653 17.1673C10.144 17.2176 10.0139 17.2434 9.8826 17.2432Z"
          fill="#1B4965"
        />
      </svg>
    </button>
  );
}
