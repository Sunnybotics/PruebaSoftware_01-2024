// Define the NavBar functional component with customizable properties
export function NavBar({ to1, title1, action, to2, title2, to3, title3 }) {
  return (
    <nav className="font-bold h-9 text-lg text-yellow-800 ">
      <ul className="flex flex-row gap-x-12 justify-end pt-1 mr-3">
        <li>
          <a
            href={to1}
            onClick={action}
            className=" border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-yellow-500 duration-300"
          >
            {title1}
          </a>
        </li>

        <li>
          <a
            href={to2}
            className=" border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-orange-600 duration-300"
          >
            {title2}
          </a>
        </li>

        <li>
          <a
            href={to3}
            className=" border-b-2 border-transparent px-1 pt-1 hover:border-gray-300 hover:text-yellow-500 duration-300"
          >
            {title3}
          </a>
        </li>
      </ul>
    </nav>
  );
}
