interface HashtagProps {
  color: string;
}

const Hashtag = ({ color }: HashtagProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/hashtag">
        <g id="hashtag">
          <path
            id="Vector"
            d="M8.33366 2.5L6.66699 17.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M13.3337 2.5L11.667 17.5"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_3"
            d="M2.91699 7.5H17.917"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_4"
            d="M2.08301 12.5H17.083"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default Hashtag;
