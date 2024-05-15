type StarIconType = {
  fill: string;
};

const StarIcon: React.FC<StarIconType> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill={props.fill}
  >
    <path
      d="M12.3079 2.74122C12.5645 2.12645 13.4355 2.12645 13.6921 2.74122L16.1486 8.62582C16.2512 8.87151 16.4763 9.04441 16.7402 9.08012L23.2042 9.95501C23.8544 10.043 24.0862 10.8645 23.5778 11.2793L18.5825 15.3557C18.361 15.5364 18.2615 15.8273 18.326 16.1058L19.9233 23.0084C20.0784 23.6786 19.3248 24.1866 18.7618 23.7914L13.4309 20.0499C13.1723 19.8684 12.8277 19.8684 12.5691 20.0499L7.23817 23.7915C6.67514 24.1866 5.92155 23.6787 6.07662 23.0085L7.67385 16.1058C7.73829 15.8273 7.63882 15.5364 7.41734 15.3557L2.42214 11.2793C1.91381 10.8645 2.14556 10.043 2.79573 9.95501L9.25985 9.08012C9.52369 9.04441 9.74881 8.87151 9.85138 8.62582L12.3079 2.74122Z"
      stroke="#BFCC94"
      strokeWidth="2"
      strokeMiterlimit="3.3292"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default StarIcon;
