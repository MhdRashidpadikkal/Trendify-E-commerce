import React, { useRef, useState } from 'react'
import { PlaceholdersAndVanishInput } from '../ui/placeholders-and-vanish-input' 
import { useNavigate } from 'react-router-dom';


const InputPlcaholder = () => {
    const placeholders = [
        "Search for trending products...",
        "Find the best deals on electronics...",
        "Discover fashion essentials...",
        "Looking for something specific?",
        "Shop now and get exclusive discounts!",
      ];     

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate()
      
  
    
      const handleChange = (e) => {
        setSearchQuery(e.target.value);
      };
      const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", searchQuery );
        navigate(`/search/${searchQuery}`)
      };
  return (
    <div className="flex px-4 w-justify-center" >
    
    <PlaceholdersAndVanishInput
         className="bg-yellow-500"
         placeholders={placeholders} 
         onChange={handleChange} 
         onSubmit={onSubmit} />
  </div>
  )
}

export default InputPlcaholder

