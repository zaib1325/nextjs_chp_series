import Navbar from '@/components/Navbar'
import SiderBar from '@/components/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='h-screen w-full'>
            <header className='h-16 w-full flex items-center border shadow inset-shadow-accent-foreground'>
                <Navbar />
            </header>
            <div className='flex h-full flex-col md:flex-row md:overflow-hidden'>
                <div className='w-1/2 md:w-fit flex-none border-r h-full'>
                    <SiderBar />
                </div>
                <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
                    {children}
                </div>
            </div>
        </div>

    )

}