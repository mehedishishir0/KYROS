import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import LoginForm from './LoginForm'

const LoginModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='p-6'>
                <DialogHeader className='mb-10'>
                    <DialogTitle><h3 className='text-[40px] font-normal text-[#147575]'>Welcome</h3></DialogTitle>
                    <DialogDescription className='text-[#6C757D] mt-2 text-[16px]'>
                        Sign in to oversee accounts, listings, and updates
                    </DialogDescription>
                </DialogHeader>
                {/* Login Form */}
                  <LoginForm/>
            </DialogContent>
        </Dialog>
    )
}

export default LoginModal