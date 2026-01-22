import React from 'react'

const LPFooter = () => {
  return (
    <div className="parent bg-[var(--accentSuperDark)]  ">
        <div className="container p-4">
            <p className="text-white text-center text-sm">
                &copy; {new Date().getFullYear()} Vardaan Hospital. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default LPFooter