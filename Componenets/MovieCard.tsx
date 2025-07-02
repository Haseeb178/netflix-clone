import React from 'react';
import  {useRouter} from 'next/router';
import { BsFillPlayFill } from 'react-icons/bs';
import FavoriteButton from './FavoriteButton';
import useInfoModal from  '@/hooks/useInfoModal'
import { BiChevronDown } from 'react-icons/bi'; 

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const {openModal} = useInfoModal();

  return (
    <div className="group col-span relative h-[12vw]">
      {/* Base Thumbnail Image */}
      <img
        className="
          cursor-pointer 
          object-cover 
          transition 
          duration-300 
          rounded-md 
          group-hover:opacity-90 
          sm:group-hover:opacity-0 
          delay-300 
          w-full 
          h-[12vw]
        "
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />

      {/* Hover Content */}
      <div
        className="
          absolute 
          top-0 
          z-30
          invisible 
          sm:visible 
          opacity-0 
          transition 
          duration-300 
          delay-300 
          w-full 
          scale-0 
          group-hover:scale-110 
          group-hover:translate-y-[-6vw] 
          group-hover:translate-x-[2vw] 
          group-hover:opacity-100
        "
      >
        {/* Hover Thumbnail */}
        <img
          className="
            cursor-pointer 
            object-cover 
            transition 
            duration-300 
            shadow-xl 
            rounded-t-md
            w-full 
            h-[12vw]
          "
          src={data.thumbnailUrl}
          alt="Thumbnail"
        />

        {/* Info Container */}
        <div
          className="
            z-20
            bg-zinc-800 
            p-2 
            lg:p-4 
            absolute 
            w-full 
            transition 
            shadow-md 
            rounded-b-md
          "
        >
          {/* Play Button */}
          <div className="flex flex-row items-center gap-3">
            <div
              className="
                cursor-pointer 
                w-6 
                h-6 
                lg:w-10 
                lg:h-10 
                bg-white 
                rounded-full 
                flex 
                justify-center 
                items-center 
                transition 
                hover:bg-neutral-300
              "
              onClick={() => router.push(`/watch/${data?.id}`)}
            >
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={data?.id}/>
            <div 
            onClick={() => openModal(data?.id)} className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300' >
            <BiChevronDown
            size={30} className='text-white group-hover/items:text-neutral-300'/>
            </div>
          </div>

          {/* Text Info */}
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2025</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
