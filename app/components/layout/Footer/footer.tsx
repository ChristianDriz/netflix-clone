import { FooterData } from "@/app/constants/FooterData"
import Image from "next/image"
import Link from "next/link"

export default function Footer({ }) {
    return (
        <div className='text-white px-6 sm:px-8 4xl:px-20 7xl:px-37 mb-32 flex justify-center'>
            <div className='text-[#ffffffb3] w-full 9xl:w-7xl'>
                <div className="p-0.75">
                    <Link href={'/'} className="underline text-base leading-4.5">Questions? Contact us.</Link>
                </div>
                <div className="mt-9 p-1 ">
                    <ul className="grid grid-cols-1 gap-2.25 mb-3.5 sm:grid-cols-2 4xl:grid-cols-3 7xl:grid-cols-4">
                        {FooterData.map((data, idx) => (
                            <li key={idx}>
                                <Link href="/" className="text-sm capitalize underline ">
                                    {data}
                                </Link>
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="mt-9 p-1 flex">
                    <div className='relative flex items-center justify-center'>
                        <Image 
                            src={'/icons/language.svg'} 
                            alt='language' 
                            width={16} 
                            height={16}
                            className='absolute left-3'
                        />
                        <select 
                            name="SelectLanguage" 
                            id="SelectLanguage" 
                            className='cursor-pointer rounded-sm text-base appearance-none py-1 outline outline-white/30 w-30.75 text-center'
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
                </div>
                <div className="mt-9">
                    <p className="text-sm leading-4.5">Netflix Philippines</p>        
                </div>
            </div>
        </div>
    )
}
