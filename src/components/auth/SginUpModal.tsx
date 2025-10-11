import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import SginUpForm from './SginupForm'

const SginUpModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='p-6'>
                <DialogHeader className='mb-10'>
                    <DialogTitle><h3 className='text-[40px] font-normal text-[#147575]'>Create Your Account</h3></DialogTitle>
                    <DialogDescription className='text-[#6C757D] mt-2 text-[16px]'>
                    Step into the future of growth — join Talent Badger today
                    </DialogDescription>
                </DialogHeader>
                {/* Login Form */}
                <SginUpForm onOpenChange={onOpenChange} />
            </DialogContent>
        </Dialog>
    )
}

export default SginUpModal