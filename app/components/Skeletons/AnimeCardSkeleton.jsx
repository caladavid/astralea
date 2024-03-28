import ImageSVG from '@/public/assets/svgs/ImageSVG';

const AnimeCardSkeleton = ({ cards = 1 }) => {
    return (
        Array(cards)
            .fill(0)
            .map((_, i) =>
            <div key={i} className='mr-8 py-4'>
                <div className="relative rounded-md h-60 mb-4 flex justify-center items-center bg-gray-300 animate-pulse min-h-[300px] min-w-[215px] max-h-[300px]">
                    <ImageSVG />
                </div>
                <div className="h-4 bg-gray-300 rounded-full "></div>
            </div >
        ))
}

export default AnimeCardSkeleton