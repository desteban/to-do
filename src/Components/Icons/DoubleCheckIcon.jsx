/**
 *
 * @param {object} props
 * @param {string | number} props.height
 * @param {string | number} props.width
 * @param {string} props.className
 * @returns
 */
export function DoubleCheckIcon(props) {
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
        strokeWidth="1.5"
        d="M2.5 13.833L6 17.5l1.024-1.073M16.5 6.5l-6.063 6.352m-2.937.981L11 17.5l10.5-11"
        color="currentColor"
      />
    </svg>
  );
}
