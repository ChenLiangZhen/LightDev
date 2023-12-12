'use client'

import Image from 'next/image'
import BaseLayout from "@/components/layout/BaseLayout";
import Card from '@/components/Card';
import {useState} from "react";

export default function Home() {
   
   const [expSelected, setExpSelected] = useState(0)
   const [workSelected, setWorkSelected] = useState(0)
   
  return (

     <BaseLayout>
        <main
           className="flex justify-start min-h-screen flex-col items-center lg:p-24 bg-neutral-200 dark:bg-neutral-900">
           <div className="mb-10 z-10 max-w-5xl w-full items-center justify-start font-mono text-sm lg:flex">
              <div
                 className="fixed mr-10 left-0 top-0 flex w-full items-center justify-center border-b border-gray-400 pb-6 pt-6 backdrop-blur-xl dark:border-neutral-700 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-neutral-300/30 lg:p-4 lg:dark:bg-zinc-800/50">

                 <Image style={{borderRadius: 8}}
                        src={"/light_portrait.jpg"} alt={"lightiichen"}
                        width={108}
                        height={108}
                 />
                 <div className="w-auto flex-col ml-4">
                    <p className="text-lg text-neutral-800 dark:text-neutral-300 font-bold">Light Chen</p>
                    <div className="mb-4 mt-1.5 w-full h-[1px]  bg-neutral-400 dark:bg-neutral-300"/>
                    <p  className="mb-0.5 tracking-wider dark:text-neutral-300 text-neutral-700 font-normal font-noto">北教大
                       數位科技設計學系&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p className="tracking-wider text-neutral-700 dark:text-neutral-300 font-normal">北科大
                       資訊工程研究所</p>
                 </div>
              </div>
              <div
                 className="invisible lg:visible text-xs text-neutral-800 dark:text-neutral-300 font-noto leading-6 tracking-wider font-light fixed bottom-0 left-0 flex h-48 w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                 <b className="font-noto">2022 APP 移動應用創新賽台灣賽 第一名<br/>
                 2022 APP 移動應用創新賽中華區總決賽 二等獎<br/>
                 北教大 專業表現優異獎 第一名<br/>
                 北教大 iOS 開發社團第一屆教學長<br/></b>
              </div>
           </div>

           <div className="flex flex-col gap-y-4 w-full lg:max-w-5xl lg:w-auto p-8 lg:p-0 mt-28 lg:mt-4">

              <h2 className={`mb-3 ml-2 text-xl font-semibold`}>
                 專業技能{' '}
                 <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>

              </h2>

              <div className="flex flex-col gap-3 lg:flex-row">

                 <Card title={"APP 與網頁開發"} description={"跨平台 APP 開發、iOS 原生 APP 開發、網頁前端開發"}></Card>
                 <Card title={"後端 API 開發"} description={"API 開發與串接、資料庫、伺服器建置"}></Card>
                 <Card title={"視覺設計"} description={"平面設計、圖像設計、使用者介面與體驗設計"}></Card>
                 <Card title={"音樂製作"} description={"遊戲配樂製作，作曲編曲、音效製作"}></Card>

              </div>

           </div>

           <div className="lg:invisible w-screen h-[1px] bg-neutral-400 dark:bg-neutral-600"/>

           <div className="flex flex-col gap-y-4 w-full lg:max-w-5xl lg:w-auto p-8 lg:p-0 lg:mt-10">
              <h2 className={`mb-2 ml-2 text-xl font-semibold`}>
                 作品集{' '}
                 <span
                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>

              </h2>

              <div className="flex flex-col gap-3 lg:flex-row">

                 <Card title={"Travelope 旅。信"} description={"APP 競賽冠軍作品，專為旅行者設計的專屬紀錄 APP。"}></Card>
                 <Card title={"Opinium Space"} description={"貼文式的意見調查、創意共享與交流社群"}></Card>
                 <Card title={"ZENote"} description={"完全客製化、清新簡潔的學習卡體驗"}></Card>
                 <Card title={"Minimal"} description={"反轉商業模式並易於使用的全新購物平台"}></Card>

              </div>

           </div>


        </main>
     </BaseLayout>

  )
}
