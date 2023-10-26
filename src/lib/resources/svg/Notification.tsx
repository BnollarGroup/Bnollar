interface NotificationProps {
  color?: string;
  className?: string;
}

const Notification = ({ color = "#0D0E11", className }: NotificationProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="notification" opacity="0.4">
        <path
          id="stroke"
          d="M7.60156 15C7.60156 16.3755 8.88246 17.5 10.1016 17.5C11.3207 17.5 12.6016 16.3755 12.6016 15"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="stroke_2"
          d="M15.1016 7.5C15.1016 9.16667 16.3516 10 16.3516 11.6667C16.3516 14.1667 13.0645 15 10.1016 15C7.13861 15 3.85156 14.1667 3.85156 11.6667C3.85156 10 5.10156 9.36782 5.10156 7.5C5.10156 5 6.76824 2.5 10.1016 2.5C13.4349 2.5 15.1016 5 15.1016 7.5Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default Notification;
