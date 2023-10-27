import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const { article } = useSelector((state) => state.saveData);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-gray-900 to-blue-gray-800">
      <div className=" p-8 rounded-md w-full mx-auto pt-32">
        <div className="text-white text-center mb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            NEWS SAVED
          </p>
        </div>
        {/* <div className='flex items-center justify-between pb-6'>
          <div>
            <h2 className='text-gray-600 font-semibold'>Saved News</h2>
            <span className='text-xs'>All news saved</span>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex bg-gray-50 items-center p-2 rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 text-gray-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
              <input
                className='bg-gray-50 outline-none ml-1 block'
                type='text'
                name=''
                id=''
                placeholder='cari berita...'
              />
            </div>
          </div>
        </div> */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden scrollable-table">
            <table className="min-w-full leading-normal shadow-xl">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                    URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {article.map((article, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b borrer-gray-200 bg-white text-xs">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.title}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {article.description}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <a
                        className="text-blue-900 whitespace-no-wrap"
                        href={article.url}
                        target="_blank"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
