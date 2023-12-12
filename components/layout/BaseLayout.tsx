import React, {useEffect} from "react"

interface BaseLaout {

   children: React.ReactNode
}

const BaseLayout: React.FC<{children: React.ReactNode}> = ({children}) => {

   return <div style={{
      // backgroundColor: "red",
   }}>
      {children}
   </div>
}

export default BaseLayout
