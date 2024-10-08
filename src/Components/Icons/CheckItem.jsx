/**
 *
 * @param {object} props
 * @param {string | number} props.height
 * @param {string | number} props.width
 * @param {string} props.className
 * @returns
 */
export function CheckItem(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6L9 17l-5-5"
      />
    </svg>
  );
}
