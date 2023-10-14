interface WheelProps {
  color: string;
}

const Wheel: React.FC<WheelProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1716_449)">
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke={color}
          // strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.3523 8.66291L15.4376 6.45408L16.667 5.00008L15.0003 3.33341L13.5542 4.56921L11.2985 3.64153L10.7798 1.66675H9.15114L8.62456 3.66769L6.42067 4.59672L5.00033 3.33341L3.33366 5.00008L4.5448 6.49079L3.64408 8.70535L1.66699 9.16675V10.8334L3.66792 11.3797L4.59678 13.5832L3.33366 15.0001L5.00033 16.6667L6.49296 15.4503L8.6645 16.3437L9.16699 18.3334H10.8337L11.3374 16.3444L13.5463 15.4297C13.9144 15.6928 15.0003 16.6667 15.0003 16.6667L16.667 15.0001L15.4302 13.5413L16.3452 11.3318L18.3336 10.8144L18.3337 9.16675L16.3523 8.66291Z"
          stroke={color}
          // strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1716_449">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Wheel;
