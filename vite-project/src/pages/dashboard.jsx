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
import PieChart from '../component/dashboard/chart/pie-chart';

export default function DashboardPage() {
    return (
        <div className='relative overflow-y-auto w-full bg-gray-50 lg:ml-60 sm:ml-40 ml-12 p-4'>
            <div className='grid lg:grid-cols-8 gap-5'>
                <div className='flex flex-col lg:col-span-5 min-h-[450px] bg-white grid-border p-4'>
                    <AreaChart />
                </div>
                <div className='lg:col-span-3 bg-white lg:contain-size overflow-y-scroll grid-border  '>
                    <StatiticsTabs />
                </div>
            </div>
            <div className='grid lg:grid-cols-3  sm:grid-cols-2 gap-3 my-3'>
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
            <div className='grid lg:grid-cols-2 gap-3'>
                <div className='col-span-1 bg-slate-400  lg:contain-size min-h-[450px]'>

                </div>
                <div className='flex flex-col gap-3'>
                    <div className='block bg-white grid-border p-5 '>
                        <div className='grid xl:grid-cols-2 items-center gap-5'>
                            <div className='block'>
                                <h5 className='text-gray-400'>Sales by category</h5>
                                <h1 className='text-2xl font-semibold'>Desktop PC</h1>
                                <span className='text-sm'>2.5%</span><span className='text-sm'>Since last month</span>
                            </div>
                            <div className='flex lg:max-w-lg '>
                                <div className='flex justify-between xl:w-full gap-4'>
                                    <DatePicker />
                                    <DatePicker />
                                </div>
                            </div>
                        </div>

                        <GroupBarChart />

                    </div>
                    <div className='block bg-white grid-border p-5  min-h-[455px]'>
                        <div className='flex items-center'>
                            <div className='block'>
                                <p>Traffic by device</p>
                                <p>Traffic by device</p>
                            </div>
                            <p className='ml-auto'>
                                Full Report
                            </p>
                        </div>
                        <PieChart />
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
