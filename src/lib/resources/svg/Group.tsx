interface GroupProps {
  color: string;
}

const Group: React.FC<GroupProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g>
        <path
          d="M0.833008 16.6667V15.8333C0.833008 12.6117 3.44468 10 6.66634 10V10C9.888 10 12.4997 12.6117 12.4997 15.8333V16.6667"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10.833 11.6667V11.6667C10.833 9.36548 12.6985 7.5 14.9997 7.5V7.5C17.3009 7.5 19.1663 9.36548 19.1663 11.6667V12.0833"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6.66634 9.99992C8.50729 9.99992 9.99967 8.50753 9.99967 6.66658C9.99967 4.82564 8.50729 3.33325 6.66634 3.33325C4.82539 3.33325 3.33301 4.82564 3.33301 6.66658C3.33301 8.50753 4.82539 9.99992 6.66634 9.99992Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Group;
