import { MoveRight } from 'lucide-react'
import React from 'react'
import beauty from '../../assets/category/beauty-pick.png'
import laptop from '../../assets/category/laptop.png'
import game from '../../assets/category/game.png'
import toy from '../../assets/category/toy.png'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent, CardTitle } from '../ui/card'

const Category = () => {
    const categories = [
        {
            image: beauty,
            title: 'Beauty & Personal Care'
        },
        {
            image: laptop,
            title: 'Electronics & Computers'
        },
        {
            image: game,
            title: 'Games & Consoles'
        },
        {
            image: toy,
            title: 'Toys & Kids'
        },
    ]
  return (
    <div className=' w-full  my-5 flex flex-col  py-5'>
        <div className='flex justify-between w-full sm:px-10'>
            <h3 className='font-semibold'>Shop by Categories</h3>

            <div className='flex gap-2'>
                <h3 className='font-semibold'>All Departments </h3>
                <MoveRight   />
            </div>  
        </div>
        
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
            >
            <CarouselContent className="">
                {categories.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4  ">
                    <div className="p-1">
                    <Card className="bg-gray-100 h-full border-none rounded-none sm:mx-10">
                        <CardContent className="flex flex-col  items-center justify-center p-5 gap-3 overflow-hidden">
                            <div className=''>
                                <img src={item.image} alt="" width='100%' className='relative left-[25%]'  />
                            </div>
                           
                            <CardTitle className=" text-[20px] font-semibold mt-6 text-nowrap">{item.title}</CardTitle>
                            
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            
        </Carousel>
        
    </div>
  )
}

export default Category