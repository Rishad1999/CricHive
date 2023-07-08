import 'tailwindcss/tailwind.css'


export const TableStat = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Year
            </th>
            <th scope="col" className="px-6 py-3">
              Mat
            </th>
            <th scope="col" className="px-6 py-3">
              Runs
            </th>
            <th scope="col" className="px-6 py-3">
              Avg
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              SR
            </th>
            {/* <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th> */}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2019
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">130</td>
            <td className="px-6 py-4">43.3</td>
            <td className="px-6 py-4 text-right">116.07</td>
            {/* <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td> */}
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2018
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">130</td>
            <td className="px-6 py-4">43.3</td>
            <td className="px-6 py-4 text-right">116.07</td>
            {/* <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td> */}
          </tr>
          <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2017
            </th>
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">130</td>
            <td className="px-6 py-4">43.3</td>
            <td className="px-6 py-4 text-right">116.07</td>
            {/* <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
