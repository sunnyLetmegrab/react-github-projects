import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { featureArray } from '../constants/app_const';

export default function ProductFeatures() {

    const [feature, setFeature] = useState(featureArray[0])

    function onclick(index) {
        setFeature(featureArray[index]);
    }


    return (
        <section id='feature-section' className='grid lg:grid-cols-2 gap-x-10 gap-y-5 py-20 mx-5'>
            <div className='block'>
                <h3 className='text-4xl font-semibold'>Product features</h3>
                <p className='text-base text-gray-500 my-2'>Here you can provide a brief overview of the key features of the product. For example, you could list the number of features, the types of features, add-ons, or the benefits of the features.</p>
                <div className='grid gap-y-4'>
                    {featureArray.map((e, index) => (
                        <div id={`feature_${index}`} key={index}
                            className={`feature-card duration-100 ${(feature !== null && feature == e) ? 'bg-blue-50 border border-blue-400' : 'bg-transparent'}`}
                            onClick={() => {
                                document.getElementById(`feature_${index}`).classList.add('scale-90')
                                setTimeout(() => {
                                    document.getElementById(`feature_${index}`).classList.remove('scale-90')
                                    onclick(index)

                                }, 50);
                            }}
                        >
                            <div className='flex items-center gap-x-5 '>
                                <FontAwesomeIcon icon={e.icon} size='xl' />
                                <div className='block *:text-sm *:my-1'>
                                    <h5 className='font-bold'>{e.title}</h5>
                                    <h5 className='text-gray-500'>{e.subtitle}</h5>
                                    <p className='text-blue-600'>Learn more &gt; </p>
                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
            <section className='border rounded-xl border-gray-300 p-5 h-0 lg:min-h-full min-h-96'>
                {feature && <img src={feature.image} className='h-0 min-h-full w-full object-scale-down aspect-square' />}
            </section>
        </section>
    )
}
