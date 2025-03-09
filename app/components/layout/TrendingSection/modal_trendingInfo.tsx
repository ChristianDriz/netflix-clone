import Image from 'next/image'
import { useEffect } from "react";
import { Genres } from '@/app/constants/Genres';

type SelectedTrendingItem = {
    overview: string;
    backdrop_path: string;
    media_type: string;
    release_date?: Date;
    first_air_date?: Date;
    genre_ids: number[];
}

type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    selectedItem: SelectedTrendingItem | null;
}

type GenreType = {
    id: number;
    name: string;
}

export default function TrendingItemInfo({ isOpen, selectedItem, closeModal } : ModalProps ) {

    const imgUrl = `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${selectedItem?.backdrop_path}`;

    const matchedGenres = Genres.filter((genre: GenreType) => selectedItem?.genre_ids.includes(genre.id));

    const dateString = selectedItem?.first_air_date?.toString() || selectedItem?.release_date?.toString();
    const year = dateString?.split("-")[0];

    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.classList.add("overflow-hidden");
            document.body.style.paddingRight = `${scrollbarWidth}px`; // Preserve scrollbar space

        } else {
            document.body.classList.remove("overflow-hidden");
            document.body.style.paddingRight = ""; // Reset padding
        }
      
        return () => {
            document.body.classList.remove("overflow-hidden");
            document.body.style.paddingRight = "";
        };
        
    }, [isOpen]);
    
    return (
        <div className={`${isOpen ? 'flex ' : 'hidden'} fixed inset-0 w-full h-screen items-center justify-center z-50 bg-black/40 `}>
            <div className='relative border border-white/20 w-[667px]  rounded-lg bg-[#161616]'>
                <button onClick={closeModal} className='z-10 absolute right-3 top-3 cursor-pointer hover:bg-black/40 rounded-full p-2 transition duration-300'>
                    <Image 
                        src={'/icons/close-btn.svg'}
                        alt='close-btn'
                        width={24}
                        height={24}
                        className=''
                    />
                </button>

                <div className="relative w-full h-full ">
                    <Image 
                        src={imgUrl} 
                        alt='image' 
                        width={1920} 
                        height={800} 
                        className='object-cover rounded-t-lg '
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-custom-gradient"></div>                  
                </div>

                <div className='px-4 pt-4 py-6 sm:px-10 sm:pb-10'>
                    <ul className='flex mb-4 4xl:mb-2 7xl:mb-3 space-x-2 text-[10px] leading-4 sm:text-sm sm:leading-6 text-white/70 '>
                        <li className='bg-[#414141] py-0.75 px-1.5 rounded-sm'>
                            {year}
                        </li>

                        {matchedGenres.map((genre, idx) => (
                        <li key={idx} className='bg-[#414141] py-0.75 px-1 rounded-sm'>
                             {genre.name}
                        </li>
                        ))}
                    </ul>
                    <div className='pt-4'>
                        <p className='text-sm leading-4'>{selectedItem?.overview}</p>
                    </div>
                    <div className='pt-6'>
                        <button 
                            className="bg-red hover:bg-dark-red flex justify-center items-center gap-2 w-full rounded-sm py-2 
                                sm:text-lg sm:w-[156px] sm:py-2.5"
                        >
                            Get Started
                            <Image src={'/icons/arrow-right-white.svg'} alt="arrow-right" width={24} height={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
