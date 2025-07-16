import SiderBar from '@/components/Sidebar'

export default function Layout({ children } : { children : React.ReactNode }){
    return (
        <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <div className='w-1/2 md:w-fit flex-none border-r'>
            <SiderBar />
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
                {children}
            </div>
        </div>
    )

}