import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchQuery } from '@/redux/jobSlice';
function HeroSection() {
  const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchQuery(query));
        navigate("/browse");
    }
  return (
    <div className='text-center mt-10'>
        <div className='w-[1000px] flex flex-col gap-4 mx-auto'>
        <h1 className='text-4xl mt-3 font-bold'><span className='text-purple-500'>"</span>Unlock Your Future: Find Your <br/> Perfect Job, <span className='text-purple-500'>Fast</span> !<span className='text-purple-500'>"</span></h1>
        <p className='w-[1000px] mx-auto font-semibold '>Welcome to CareerCraft , where your dream job is just a click away! Our platform connects top talent with top employers, offering a seamless and efficient job search experience. Whether you're a job seeker looking for your next career move or an employer seeking the perfect candidate.</p>
        <div className='flex w-[50%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder='Find your dream jobs' className='outline-none border-none w-full'/>
            <Button onClick={searchJobHandler} className='rounded-r-full hover:bg-purple-500 text-white px-5 bg-purple-500'><Search className='h-5 w-5'/></Button>
        </div>
        </div>
    </div>
  )
}

export default HeroSection