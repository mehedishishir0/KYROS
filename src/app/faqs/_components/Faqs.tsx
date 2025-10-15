import Hero from '@/components/Home/Hero'
import ReadyToStart from '@/components/ReadyToStart'
import React from 'react'
import AskQ from './AskQ'

const Faqs = () => {

    return (

        <div>
            <Hero title1="All You" colorTitile="Need to Know Before" title2="You Begin" description="We know hiring consultants can feel complex—from choosing the right experts to understanding pricing and team structures. That’s why we’ve made everything simple, transparent, and easy to follow. Here you’ll find clear answers about how our platform works, how consultants are vetted, what billing looks like, and how quickly you can get started—so you can focus less on confusion and more on building the team that brings your vision to life." image="/faqs.jpg" buttonName1="Assemble Your Team" buttonName2="Help Me Build My Team " buttonHref1="/" buttonHref2="/" />

            <AskQ />

            {/* <div
                className="w-full container  mx-auto mt-10 mb-28 rounded-2xl bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: "url('/faq.png')" }}
            >

                <div className="relative z-10 text-center px-8 py-12 text-white">
                    <h2 className="text-2xl text-[#282828] md:text-3xl font-bold mb-3">
                        Ready to Start <span className='text-[#147575]'>Build Your Team?</span>
                    </h2>
                    <p className="text-sm md:text-base text-[#68706A] max-w-3xl mx-auto opacity-90">
                        Our team is here to provide personalized guidance and support reach out anytime.
                    </p>
                </div>
            </div> */}
            <ReadyToStart />
        </div>
    )
}

export default Faqs