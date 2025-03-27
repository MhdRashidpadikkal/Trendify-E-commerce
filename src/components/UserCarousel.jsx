import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent, CardDescription, CardTitle } from './ui/card'
import { userCarousel } from '@/data/userCarousel'

const UserCarousel = () => {
  return (
    <div className='bg-[#e8f8df] rounded-md my-5 mt-5 w-full'>
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full px-10"
            >
            <CarouselContent>
                {userCarousel.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ">
                    <div className="p-1">
                    <Card className="bg-transparent h-[170px] border-none rounded-none">
                        <CardContent className="flex  items-center justify-center p-6 gap-3 ">
                           <img src={item.image} alt="" className="object-cover h-[100px]" />
                           <div>
                            <CardTitle className="text-[18px] sm:text-2xl ">{item.title}</CardTitle>
                            {item.subTitle && <CardDescription className="text-[16px] sm:text-[18px]">{item.subTitle}</CardDescription>}
                           </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className=" ms-13" />
            <CarouselNext className=" me-13" />
        </Carousel>
    </div>
  )
}

export default UserCarousel