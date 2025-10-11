import { Mail, MapPinPlusInside, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#DDFFFF] mt-10'>
            <div className='container mx-auto pb-10 grid grid-cols-3 gap-[200px] text-white'>
                <div>
                    <Image src="/logo.png" alt="logo" width={900} height={900} className='w-[200px] h-[100px] ml-20' />
                    <p className='text-[#434C45] ml-28'>Empowering financial decisions through transparent credit scoring and connecting borrowers with trusted lenders.</p>
                </div>
                <div className='mt-10'>
                    <p className='text-[#434C45] font-semibold loat mb-6'>Quick Links</p>
                    <div>
                        <ul className='space-y-4'>
                            <li className='text-[#434C45] font-medium text-[16px]'>Home</li>
                            <li className='text-[#434C45] font-medium text-[16px]'>Services</li>
                            <li className='text-[#434C45] font-medium text-[16px]'>Team Picker</li>
                            <li className='text-[#434C45] font-medium text-[16px]'>Industries</li>
                            <li className='text-[#434C45] font-medium text-[16px]'>Blog</li>
                            <li className='text-[#434C45] font-medium text-[16px]'>Contact</li>
                            <li className='text-[#434C45] font-medium text-[16px]'>FAQ’S</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10'>
                    <p className='text-[#434C45] font-semibold loat'>Contact Us</p>
                    <div>
                        <ul className='space-y-4 mt-6'>
                            <li className='flex gap-2 text-[#434C45] font-medium text-[16px]' ><MapPinPlusInside size={20} /> 123 Finance Street Douala, Cameroon</li>
                            <li className='flex gap-2 text-[#434C45] font-medium text-[16px]'><Phone size={20} /> +237 123 456 789</li>
                            <li className='flex gap-2 text-[#434C45] font-medium text-[16px]'><Mail size={20} /> Team Picker</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='border-t container mx-auto border-gray-300' />
            <div className='container mx-auto  flex justify-between text-[#434C45] mt-6 pb-11'>
                <p>© 2025  Talent Badger. All rights reserved.</p>
                <div className='flex gap-6'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </div>
    )
}

export default Footer