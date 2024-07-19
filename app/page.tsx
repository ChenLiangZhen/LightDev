'use client'

import Image from 'next/image'
import BaseLayout from "@/components/layout/BaseLayout";
import Card from '@/components/Card';
import {useState} from "react";
import Text, {FontSize} from "@/components/Text";
import {LucideAtom, LucideLayers, LucideMail} from "lucide-react";

export default function Home() {
	
	const [expSelected, setExpSelected] = useState(0)
	const [workSelected, setWorkSelected] = useState(0)
	
	return (
		
		<BaseLayout>
			<main className="p-1 lg:h-screen lg: min-h-screen min-w-screen flex flex-col items-center justify-center">
				
				<div className="fixed mr-10 left-0 top-0 flex w-full items-center justify-center border-b-[0.5px] border-gray-400 pb-5 pt-5 backdrop-saturate-50 backdrop-blur-3xl dark:border-neutral-700 dark:from-inherit">
					
					<Text fontSize={FontSize.md} bold className="tracking-wider text-neutral-800 dark:text-neutral-300 font-space">Light
						Chen's Resume</Text>

				</div>
				
				<div className={"flex flex-col mt-28 items-center"}>
					<Image
						className={""}
						style={{borderRadius: 8}}
						src={"/light_portrait.jpeg"} alt={"lightiichen"}
						width={144}
						height={144}
					/>
					
					<Text fontSize={FontSize.xl} bold
					      className="mt-6 text-neutral-800 dark:text-neutral-300 font-space ">Light_Chen</Text>
					<Text fontSize={FontSize.md}
					      className="mb-1 mt-1 tracking-wider dark:text-neutral-300 text-neutral-700">北教大
						數位科技設計學系</Text>
					
					<div className={"flex mt-2.5 flex-row items-center mb-2"}>
						<LucideMail color={"#777"} className={"w-5 h-5 mr-2"}/>
						<Text fontSize={FontSize.sm}
						      className="flex font-space tracking-wider leading-6 text-neutral-500 dark:text-neutral-400">
							lightiichen@gmail.com</Text>
					</div>
					
					
					<div className="flex flex-col lg:flex-row items-center lg:min-w-[75%] lg:max-w-5xl lg:w-auto lg:p-0 mt-8">
						<Text fontSize={FontSize.sm}
						      className="flex font-space tracking-wider leading-6 text-neutral-600 dark:text-neutral-300">
							When Art meets Technology,</Text>
						<Text fontSize={FontSize.sm}
						      className="flex lg:ml-2 font-space tracking-wider leading-6 text-neutral-600 dark:text-neutral-300">
							That's Me!</Text>
					</div>
				
				</div>
				
				
				<div
					className="flex flex-col gap-y-4 w-[90%] lg:min-w-[75%] lg:max-w-5xl lg:w-auto p-2 lg:p-0 lg:mt-12 mt-10">
					
					<div className={"flex flex-row items-center"}>
						<LucideAtom className={"w-6 h-6 mr-2"}/>
						<h2 className={`font-space ml-1.5 text-xl tracking-wider pr-4 dark:text-neutral-300 text-neutral-700`}>Skills</h2>
						<div className={"flex-1 dark:bg-neutral-800 bg-neutral-300 mr-2 h-[6px] rounded-full"}/>
					</div>
					
					<div className="flex flex-col gap-3 lg:flex-row">
						
						<Card title={"APP & Frontend Dev."}
						      description={"跨平台 APP 開發、iOS 原生 APP 開發、網頁前端開發"}></Card>
						<Card title={"API Server Dev."} description={"API 開發、資料庫設計、伺服器建置"}></Card>
						<Card title={"Designing."} description={"平面設計、圖像設計、使用者介面與體驗設計"}></Card>
						<Card title={"Music Prod."} description={"遊戲配樂製作，作曲編曲、音效製作"}></Card>
					
					</div>
				
				</div>
				
				<div className="lg:invisible h-[1px] bg-neutral-400 dark:bg-neutral-600"/>
				
				<div
					className="flex flex-col gap-y-4 w-[90%] mb-16 lg:min-w-[75%] lg:max-w-5xl lg:w-auto p-2 lg:p-0 mt-8 lg:mt-4">
					
					<div className={"flex flex-row items-center lg:mt-8"}>
						<LucideLayers className={"w-6 h-6 mr-2"}/>
						<h2 className={`font-space ml-1.5 text-xl tracking-wider pr-4 dark:text-neutral-300 text-neutral-700`}>Works</h2>
						<div className={"flex-1 dark:bg-neutral-800 bg-neutral-300  mr-2  pr-2 h-[6px] rounded-full"}/>
					</div>
					
					
					<div className="flex flex-col gap-3 lg:flex-row">
						
						<Card title={"Travelope 旅。信"}
						      description={"APP 競賽冠軍作品，專為旅行者設計的專屬紀錄 APP。"}></Card>
						<Card title={"Opinium Space"} description={"貼文式的意見調查、創意共享與交流社群"}></Card>
						<Card title={"ZENote"} description={"完全客製化、清新簡潔的學習卡體驗"}></Card>
						<Card title={"Minimal"} description={"反轉商業模式並易於使用的全新購物平台"}></Card>
					
					</div>
				
				</div>
			
			
			</main>
		</BaseLayout>
	
	)
}
