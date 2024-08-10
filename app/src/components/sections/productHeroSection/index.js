import React from 'react'
import tomato from '../../../images/tomato_p2.webp'
import Link from 'next/link'

const ProductHeroSection = () => {
  return (
      <section className="bg-green-700 m-[2em] border-2 border-green-900 rounded-[1em]">
          <div className="mx-auto hula-w-7xl py-16 px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
              <div className="lg:w-1/2">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                      Detect and Manage Crop Diseases
                  </h1>
                  <p className="mt-4 text-lg leading-6 text-gray-200">
                      Our advanced system helps farmers identify and address crop diseases before they become a serious problem. Get real-time insights and recommendations to keep your crops healthy and productive.
                  </p>
                  <div className="mt-6">
                      <Link href="/products/sol" className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                          Explore Our Solutions
                      </Link>
                  </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                  <img className="h-auto w-full rounded-md opacity-90" src={tomato.src} alt="Crop Health" />
              </div>
          </div>
      </section>
  )
}

export default ProductHeroSection