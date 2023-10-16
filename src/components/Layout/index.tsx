import React, { PropsWithChildren } from 'react'
import style from "./Layout.module.css"
    
function Layout({children}:PropsWithChildren) {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default Layout
