type ArrowProps = {
  color: string;
};

export const BackArrow = ({ color }: ArrowProps) => {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.99999 18.0034L11.1158 15.8892L4.24839 9.00159L11.121 2.11918L9.00678 0.00338421L0.00338591 8.99999L8.99999 18.0034Z"
        fill={color}
      />
    </svg>
  );
};

export const ForwardArrow = ({ color }: ArrowProps) => {
  return (
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.115 0L0 2.115L6.87 9L0 15.885L2.115 18L11.115 9L2.115 0Z"
        fill={color}
      />
    </svg>
  );
};
