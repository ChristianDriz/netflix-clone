import { useState } from "react"


type SelectedTrendingItem = {
    overview: string;
    backdrop_path: string;
    media_type: string;
    release_date?: Date;
    first_air_date?: Date;
    genre_ids: [];
};


export function useModal() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SelectedTrendingItem | null>(null);

    const openModal = (data: SelectedTrendingItem) => {
        setSelectedItem(data);
        setIsOpen(true);
    }

    const closeModal = () => {
        setSelectedItem(null);
        setIsOpen(false);
    }

    return { isOpen, selectedItem, openModal, closeModal }    
    
}
