

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


export function UserReviews() {
  return (
    <div
      className="my-5  rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
    {
      review:
        "Absolutely loved shopping on Trendify! The UI is clean, checkout was smooth, and my order arrived earlier than expected.",
      name: "Ananya Varma",
      rating: 4.9,
      userIcon: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      review:
        "Great product variety and amazing deals. Customer service was quick to respond when I had a query.",
      name: "Rohit Nair",
      rating: 4.3,
      userIcon: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      review:
        "The product quality exceeded my expectations. I will definitely recommend Trendify to my friends!",
      name: "Sanya Mehta",
      rating: 4.8,
      userIcon: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      review:
        "I faced a slight delay with my delivery, but the support team resolved it quickly. Happy with the overall experience.",
      name: "Arjun Das",
      rating: 3.9,
      userIcon: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      review:
        "Easy navigation, good offers, and fast delivery. Trendify has become my go-to for online shopping!",
      name: "Nikita Shah",
      rating: 4.7,
      userIcon: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
      review:
        "I’ve ordered 4 times already and never been disappointed. Consistent quality and quick service.",
      name: "Karthik Menon",
      rating: 4.6,
      userIcon: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      review:
        "Good pricing and frequent discounts. The product packaging was neat and professional.",
      name: "Diya Ramesh",
      rating: 4.1,
      userIcon: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      review:
        "Nice experience overall. The return process was also simple when I had to exchange a product.",
      name: "Abhay Iyer",
      rating: 3.6,
      userIcon: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      review:
        "Love the user interface of the site, very easy to find what I need. Highly recommend Trendify!",
      name: "Megha Kapoor",
      rating: 4.5,
      userIcon: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      review:
        "Customer support is friendly and proactive. One of the best experiences I’ve had shopping online.",
      name: "Dev Patel",
      rating: 4.9,
      userIcon: "https://randomuser.me/api/portraits/men/36.jpg",
    },
  ];
  
