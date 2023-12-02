import  { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import React from 'react'

function Slider() {
  const slides = [
    {
      url: 'https://media.istockphoto.com/id/1441726739/vi/anh/trung-t%C3%A2m-ph%C3%A2n-ph%E1%BB%91i-hi%E1%BB%87n-%C4%91%E1%BA%A1i-t%E1%BB%AB-tr%C3%AAn-cao-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-kh%C3%B4ng-khu-v%E1%BB%B1c-nh%C3%A0-kho.jpg?s=612x612&w=0&k=20&c=VDgfc0rNxNKqLcUjEMxlO2qDlfnJDsdAGEtxRaqHARU=',
    },
    {
      url: 'https://media.istockphoto.com/id/1437043772/vi/anh/%C4%91%C6%B0%E1%BB%9Dng-ch%C3%A2n-tr%E1%BB%9Di-c%E1%BB%A7a-nh%C3%A0-m%C3%A1y-h%C3%B3a-ch%E1%BA%A5t-l%C3%BAc-ho%C3%A0ng-h%C3%B4n.jpg?s=612x612&w=0&k=20&c=beT52EcdO8DWrDylsRStltHUHMkc7d9NoRvjcRG4SmI=',
    },
    {
      url: 'https://media.istockphoto.com/id/1474097757/vi/anh/t%E1%BA%A5m-pin-n%C4%83ng-l%C6%B0%E1%BB%A3ng-m%E1%BA%B7t-tr%E1%BB%9Di-tr%C3%AAn-m%C3%A1i-nh%C3%A0-x%C6%B0%E1%BB%9Fng-hi%E1%BB%87n-%C4%91%E1%BA%A1i.jpg?s=612x612&w=0&k=20&c=E8rl2jZyRIhxUjy7J2AlzMIea9Xd9H3Q2y9fo8ND6Os=',
    },

    {
      url: 'https://media.istockphoto.com/id/1069617448/vi/anh/nh%C3%A0-m%C3%A1y-t%E1%BB%AB-tr%C3%AAn-cao.jpg?s=612x612&w=0&k=20&c=G0FKB2Ml6C1_GThxMpXPY0wq1BRGGry7FXb-cqtGkcI=',
    },
    {
      url: 'https://media.istockphoto.com/id/614209784/vi/anh/nh%C3%A0-m%C3%A1y-trung-t%C3%A2m-ph%C3%A2n-ph%E1%BB%91i-hi%E1%BB%87n-%C4%91%E1%BA%A1i-tr%C3%AAn-kh%C3%B4ng.jpg?s=612x612&w=0&k=20&c=fsVG0LM5WYBCfw_k0fMZnRQMBO6Vt8Tb7-piTUxcGUY=',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
 

  const goToSlide = (slideIndex:number) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
  
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]); // Pass [] làm tham số thứ hai để chỉ chạy effect này một lần sau khi component mount

  
  return (
    <div className='z-[1] relative xl:py-5 h-[150px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[650px] w-full m-auto py-2 md:py-4 px-1 md:px-3 xl:px-6 group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
  
      <div className='flex justify-center py-1 absolute top-[90%] w-[150px] right-[30%] md:right-[40%] 2xl:right-[48%] lg:top-[92%] translate-x-0 translate-y-[-50%]  text-2xl rounded-full p-2 text-white cursor-pointer'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
            
          >
            <p className='hidden'>{slide.url}</p>
           <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;