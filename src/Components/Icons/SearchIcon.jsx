/**
 *
 * @param {object} props
 * @param {string | number} props.height
 * @param {string | number} props.width
 * @param {string} props.className
 * @returns
 */
export function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042m-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485"
        clip-rule="evenodd"
      />
    </svg>
  );
}
