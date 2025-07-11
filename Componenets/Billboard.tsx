import useBillboard from '@/hooks/useBillboard';
import useInfoModal from '@/hooks/useInfoModal'
import React, { useCallback } from 'react';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import PlayButton from './PlayButton';

const Billboard = () => {
    const { data } = useBillboard();
    const { openModal } = useInfoModal();

    const handleOpenModal = useCallback(() => {
      openModal(data?.id);
    }, [openModal, data?.id]);

    return (
    <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio container */}
  <video 
    className="
      absolute
      top-0
      left-0
      w-full
      h-full
      object-cover
      brightness-[60%]
    "
    autoPlay
    muted
    loop
    poster={data?.thumbnailUrl}
    src={data?.videoUrl}
  ></video>
  <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
    <p className="
    text-white 
    text-1x1 
    md:text-5xl 
    h-full 
    w-[50%] 
    lg:text-6xl 
    font-bold 
    drop-shadow-xl
    ">
        {data?.title}
    </p>
    <p className="
    text-white
    text-[8px]
    md:text-lg
    mt-3
    md:mt-8
    w-[90%]
    md:w-[80%]
    lg:w-[50%]
    drop-shadow-xl
    ">
        {data?.description}
    </p>
    <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">

      <PlayButton movieId = { data?.id } />
  <button 
  onClick={handleOpenModal}
    className='
      bg-white
      text-black     
      bg-opacity-30
      rounded-md
      py-1 md:py-2
      px-2 md:px-4
      w-auto
      text-xs lg:text-lg
      font-semibold
      flex
      flex-row
      items-center
      gap-1
      hover:bg-opacity-20
      transition
    '
  >
    <AiOutlineInfoCircle size={20} />
    More Info
  </button>
</div>


  </div>
</div>
    )
}

export default Billboard;