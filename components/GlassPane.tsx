import clsx from "clsx"
import React from 'react'

const GlassPane = ({children, className}) => {
  return <div className={clsx('glass rounded-2xl border-solid border-1 border-gray-200', className)}>
    {children}
  </div>
}
export default GlassPane