import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='max-w-9xl mx-auto px-6 sm:px-8 4xl:px-20 7xl:px-37 9xl:px-88.5 navbar_gradient'>
            <div className='flex items-center justify-between h-20 7xl:h-22'>
                <Image 
                    src={'/icons/netflix-logo.svg'} 
                    alt='' 
                    width={148} 
                    height={40}
                    className='max-4xl:h-6 max-4xl:w-[89px]'
                />
                <div className='flex gap-3 items-center justify-center text-white px-0.75'>
                    <div className='relative flex items-center justify-center'>
                        <Image 
                            src={'/icons/language.svg'} 
                            alt='language' 
                            width={16} 
                            height={16}
                            className='absolute left-3'
                        />
                        <label 
                            htmlFor="SelectLanguage" 
                            className='w-15.5 h-8 rounded-sm border border-white/30 cursor-pointer sm:hidden'>    
                        </label>
                        <select 
                            name="SelectLanguage" 
                            id="SelectLanguage" 
                            className='absolute inset-0 opacity-0 cursor-pointer sm:static sm:opacity-100 rounded-sm text-base appearance-none py-1 outline outline-white/30 w-30.75 text-center'
                        >
                            <option value="option1" className='text-black'>English</option>
                            <option value="option2" className='text-black'>Filipino</option>
                        </select>
                        <Image 
                            src={'/icons/dropdown.svg'} 
                            alt='select' 
                            width={16} 
                            height={16}
                            className='absolute right-3'
                        />
                    </div>
                    <a href="" className='bg-red hover:bg-dark-red rounded-sm text-sm leading-4 py-2 px-4 w-[75.6px] '>
                        Sign In
                    </a>
                </div>   
            </div>
        </nav>
    )
}
