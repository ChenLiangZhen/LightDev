import React from "react"

interface Card{
   title: string,
   description: string
}

const Card: React.FC<Card> = ({title, description}) => {

   return <div className="lg:mb-0 group rounded-xl border border-neutral-400 px-5 py-4 transition-colors border-neutral-400 dark:border-neutral-600 hover:border-gray-500 hover:bg-gray-100 hover:dark:border-neutral-400 hover:dark:bg-neutral-600/30">
      <h2 className={`mb-1.5 text-base font-semibold`}>
         {title}
      </h2>
      <p className={`m-0 font-noto leading-5 tracking-wider text-xs font-light opacity-75`}>
         {description}
      </p>
   </div>
}

export default Card
