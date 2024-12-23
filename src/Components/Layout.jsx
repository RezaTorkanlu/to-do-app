import React from 'react'

function Layout({ children }) {
  return (
    <div className="flex  items-center flex-col w-full h-screen ">
      <div className="w-1/3 max-sm:w-5/6 max-md:w-3/4 max-lg:w-2/3">
        {children}
      </div>
    </div>
  )
}

export default Layout;