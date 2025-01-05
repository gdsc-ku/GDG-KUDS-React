interface Props extends Omit<React.SVGProps<SVGElement>, 'ref'> {}

const IconCheck = (props: Props) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16.8 8.3999L9.64043 15.5999L7.19995 13.1456'
        stroke='black'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconCheck;
