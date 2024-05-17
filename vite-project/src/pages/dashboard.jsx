import React from 'react'
import Chart from "react-apexcharts";
import AreaChart from '../component/dashboard/chart/area-chart';
import StatiticsTabs from '../component/dashboard/statistic_tab';
import staticData from '../static';
import { FaWineGlassEmpty } from 'react-icons/fa6';
import BarChart from '../component/dashboard/chart/bar-chart';
import FillAreachart from '../component/dashboard/chart/fill-bar-chart';
import HorizontalBarChart from '../component/dashboard/chart/horizontal-bar-chart';
import { FaCalendar } from 'react-icons/fa';
import DatePicker from '../component/dashboard/date-picker';
import GroupBarChart from '../component/dashboard/chart/group-bar-chart';

export default function DashboardPage() {
    return (
        <div className='relative overflow-y-auto w-full bg-gray-50 ml-60 p-4'>
            <div className='grid grid-cols-7 gap-5'>
                <div className='flex flex-col col-span-5  min-h-[450px] bg-white grid-border p-4'>
                    <AreaChart />
                </div>
                <div className='col-span-2 bg-white contain-size overflow-y-scroll grid-border  '>
                    <StatiticsTabs />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-3 my-3'>
                <div className='col-span-1 bg-white flex items-center px-5 grid-border'>
                    <div className='w-full '>
                        <h4 className='text-xl text-gray-800'>New products</h4>
                        <h2 className='text-3xl text-black font-semibold'>2,340</h2>
                    </div>
                    <div className='w-full h-56 items-center flex'>
                        <BarChart />
                    </div>

                </div>
                <div className='col-span-1 bg-white flex items-center px-5 grid-border'>
                    <div className='w-full '>
                        <h4 className='text-xl text-gray-800'>New products</h4>
                        <h2 className='text-3xl text-black font-semibold'>2,340</h2>
                    </div>
                    <div className='w-full h-56 items-center flex'>
                        <FillAreachart />
                    </div>

                </div>
                <div className='col-span-1 bg-white flex items-center px-5 grid-border'>
                    <div className='w-full '>
                        <h4 className='text-xl text-gray-800'>New products</h4>
                        <h2 className='text-3xl text-black font-semibold'>2,340</h2>
                    </div>
                    <div className='w-full h-56 items-center flex'>
                        <HorizontalBarChart />
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='col-span-1 bg-slate-400 contain-size'></div>
                <div className='grid col-span-1 gap-3'>
                    <div className='flex  bg-white p-5 grid-border'>
                        <div className='flex w-full'>
                            <div className='block'>
                                <h5 className='text-gray-400'>Sales by category</h5>
                                <h1 className='text-2xl font-semibold'>Desktop PC</h1>
                                <span className='text-sm'>2.5%</span><span className='text-sm'>Since last month</span>
                            </div>
                        </div>

                        <div className='w-full max-w-lg flex'>
                            <div className='grid grid-cols-2 gap-2'>
                                <DatePicker />
                                <DatePicker />
                            </div>
                        </div>

                    </div>

                    <div className='col-span-1 min-h-[455px]'>
                        <GroupBarChart />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3 pt-3'>
                <div className='bg-blue-300 h-56'></div>
                <div className='bg-purple-200  h-56'></div>
            </div>
        </div>
    )
}
