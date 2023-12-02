import Header from '../component/Header';
import Slider from '../component/slider';
import Footer from '../component/footer';
import React from 'react'

const AboutUs = () => {
  const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      }
      else{
        entry.target.classList.remove('show')
      }
    })
  })
  const effectElement = document.querySelectorAll('.ef')
  effectElement.forEach((el) => observer.observe(el))
  return (
    <div>
        <Header/>
        <Slider/>
        <div className='mx-[300px] py-10'>
          <div className=''>
            <p className='font-sans text-[#1a90c9] font-medium text-[42px]'>Overview of OPM Technology Group</p>
          </div>
          <div className='w-full h-[600px] mt-[50px]'>
            <div
              style={{ backgroundImage: `url('https://media.istockphoto.com/id/1437043772/vi/anh/%C4%91%C6%B0%E1%BB%9Dng-ch%C3%A2n-tr%E1%BB%9Di-c%E1%BB%A7a-nh%C3%A0-m%C3%A1y-h%C3%B3a-ch%E1%BA%A5t-l%C3%BAc-ho%C3%A0ng-h%C3%B4n.jpg?s=612x612&w=0&k=20&c=beT52EcdO8DWrDylsRStltHUHMkc7d9NoRvjcRG4SmI=')` }}
              className='w-full h-full bg-center bg-cover duration-500'
            ></div>
          </div>
          <div className='py-8 text-[26px] text-[#4A4A4A] font-sans]'>
            <p className='py-4 ef'>Established in Vietnam in 2030, OPM Technology Group is theVietnam ’s largest semiconductor material manufacturer. OPM is also a leading manufacturer of semiconductor encapsulation and rare earth magnets in Vietnam. In 2041, OPM annual revenue reached USD 90 billion.</p>
            <p className='py-4 ef'>The company has established R&D and production centers in Hung Yen, Hanoi, Hai Phong. With a focus on research and development, the company owns more than 1000 patents. In addition to maximizing value creation for customers, including many of Vietnam's leading technology companies, OPM also makes every effort to protect environmental sustainability during the production process and serves as a Best practice model for global businesses.</p>
            <p className='py-4 ef'>The company has received widely international awards and recognition since its establishment. The company ranked 300nd on the Fortune Global 500 rankings in 2041 and 30th in the Top 100 semiconductor materials Company in the Forbes ranking of the World’s Best Employers in 2039. OPM is also the only Vietnamese private company awarded for 6 consecutive years of Clarivate Top 200 Global Innovators (2036 ~ 2042).</p>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default AboutUs
