import React from "react"
import { motion } from "framer-motion"
import Text, {FontSize} from "@/components/Text";

interface Card{
   onClick?: () => void,
   selected?: boolean,
   title: string,
   description: string
}

const Card: React.FC<Card> = ({selected, title, description}) => {

   return <motion.button onClick={()=> console.log("clicked")}
           className="group flex-1 justify-start hover:text-gray-400 text-left items-start mb-1 lg:mb-0 rounded-xl border border-neutral-400 px-5 py-4 transition-colors duration-300 dark:border-neutral-600 hover:border-gray-500 hover:bg-neutral-300 hover:dark:border-neutral-400 hover:dark:bg-neutral-600/30">
         
         <Text className={"tracking-wide dark:text-neutral-300 dark:group-hover:text-neutral-50 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-300 font-space mb-1.5"} fontSize={FontSize.md} bold>{title}</Text>
         <Text className={"dark:text-neutral-300 dark:group-hover:text-neutral-50 tracking-wide text-neutral-600 group-hover:text-neutral-800 transition-colors duration-300"} fontSize={FontSize.sm} light>{description}</Text>
      
      </motion.button>
   
}

export default Card