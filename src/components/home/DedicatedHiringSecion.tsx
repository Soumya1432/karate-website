import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DedicatedHiringSecion = () => {
    return (
        <section className='py-[48px]'>
            <div className="lg:max-w-screen-xl py-12 mx-auto bg-[#F1F1F1]">
                <div className="text-center">
                    <h2 className="lg:text-2xl font-bold py-4 md:text-xl text-lg">We Offered dedicated hiring</h2>
                    <p className="text-lg font-regular lg:max-w-5xl mx-auto py-4 ">
                        Providing certified instructors and professional coaches to strengthen your academy. Let us  know your movvemment , If you want our best then  →
                    </p>

                    <Link href={"/"} className="text-underline text-red-800">
                        Contact us
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row md:justify-center lg:justify-around items-center gap-6 pt-10 w-full">
                    {/* Card 1 */}
                    <div className="max-w-9xl bg-white shadow-md rounded-2xl lg:w-[420px] md:w-[360px] w-[320px] lg:px-12 lg:py-16 px-8 py-8 mx-auto">
                        {/* Icon */}
                        <div className="w-12 h-12 relative mb-4">
                            <Image
                                src="/images/hiring01.png"
                                alt="Instructor Icon"
                                fill
                                className="rounded-full object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg py-2 font-semibold text-gray-900 mb-2">
                            Certified Instructor
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm mt-2">
                            Trained and certified by organization
                        </p>
                        <p className="text-gray-500 text-sm">
                            Maintain discipline values teaching standards
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-9xl bg-white shadow-md rounded-2xl lg:w-[420px] md:w-[360px] w-[320px] lg:px-12 lg:py-16 px-8 py-8 mx-auto">
                        {/* Icon */}
                        <div className="w-12 h-12 relative mb-4">
                            <Image
                                src="/images/hiring02.png"
                                alt="Instructor Icon"
                                fill
                                className="rounded-full object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg py-2 font-semibold text-gray-900 mb-2">
                            Certified Instructor
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm">
                            Trained and certified by organization
                        </p>
                        <p className="text-gray-500 text-sm">
                            Maintain discipline values teaching standards
                        </p>
                    </div>
                </div>


            </div>


        </section>
    )
}

export default DedicatedHiringSecion
