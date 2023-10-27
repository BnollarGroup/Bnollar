interface StatisticsProps {
  color?: string;
  className?: string;
}

const Statistics = ({ color = "#0D0E11", className }: StatisticsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path
        d="M8.33333 7.5H5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9167 9.16667C11.7661 9.16667 10.8333 8.23393 10.8333 7.08333C10.8333 5.93274 11.7661 5 12.9167 5C14.0673 5 15 5.93274 15 7.08333C15 8.23393 14.0673 9.16667 12.9167 9.16667Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 5H7.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 14.9999L11.25 12.4999L9.16667 14.1666L5 10.8333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 16.9V3.1C2.5 2.76863 2.76863 2.5 3.1 2.5H16.9C17.2314 2.5 17.5 2.76863 17.5 3.1V16.9C17.5 17.2314 17.2314 17.5 16.9 17.5H3.1C2.76863 17.5 2.5 17.2314 2.5 16.9Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Statistics;
