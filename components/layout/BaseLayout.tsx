import React, {useEffect} from "react"

interface BaseLaout {
	
	children: React.ReactNode
}

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
	
	return <div
		className={
			"min-h-screen flex-col bg-neutral-200 dark:bg-neutral-900" +
			"" +
			"" +
			""}>
		{children}
	</div>
}

export default BaseLayout
