interface HomeProps {
  fill?: string;
  strokeColor?: string;
  className?: string;
}

const Home = ({
  fill = "none",
  strokeColor = "#0D0E11",
  className,
}: HomeProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill={fill}
      className={className}
    >
      <path
        d="M17.5 15.8334V8.45363C17.5 7.57943 17.0434 6.76873 16.2958 6.31564L10.8638 3.02356C10.3329 2.70178 9.6671 2.70178 9.13616 3.02356L3.70424 6.31564C2.95663 6.76873 2.5 7.57943 2.5 8.45363V15.8334C2.5 16.7538 3.24619 17.5 4.16667 17.5H6.5C7.05228 17.5 7.5 17.0523 7.5 16.5V13.3334C7.5 12.4129 8.24619 11.6667 9.16667 11.6667H10.8333C11.7538 11.6667 12.5 12.4129 12.5 13.3334V16.5C12.5 17.0523 12.9477 17.5 13.5 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8334Z"
        fill={strokeColor}
      />
    </svg>
  );
};

export default Home;
