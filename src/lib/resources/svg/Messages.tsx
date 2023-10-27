interface MessagesProps {
  color?: string;
  className: string;
}

const Messages = ({ color = "#0D0E11", className }: MessagesProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M10.332 2.33325C6.2487 2.33325 2.83203 5.41659 2.83203 9.33325C2.83203 11.4999 3.91536 13.4166 5.58203 14.7499V17.3333L8.08203 15.8333C8.7487 16.0833 9.4987 16.1666 10.2487 16.1666C14.332 16.1666 17.7487 13.0833 17.7487 9.16658C17.7487 5.24992 14.4154 2.33325 10.332 2.33325Z"
          stroke={color}
          strokeWidth="1.25"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.41536" cy="9.16658" r="0.833333" fill="white" />
        <circle cx="10.3333" cy="9.16658" r="0.833333" fill="white" />
        <circle cx="13.2474" cy="9.16658" r="0.833333" fill="white" />
      </g>
    </svg>
  );
};

export default Messages;
