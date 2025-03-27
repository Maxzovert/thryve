'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import axios from "axios";

function Upgrade() {

    const onChecoutClick = async() => {
        const result = await axios.post('/api/payment/checkout',{
            priceId : process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID
        })
        console.log(result.data);
        window.open(result.data?.session.url || result.data?.url)
    }
  return (
    <div className="flex flex-col items-center justify-center mt-20">
    <h2 className="text-3xl font-bold">Plans</h2>
    <p className="text-gray-600 mb-8">Update your plan to generate unlimited courses for your exam</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
        <h3 className="text-xl font-semibold">Free</h3>
        <p className="text-3xl font-bold my-2">0$<span className="text-sm">/month</span></p>
        <ul className="text-gray-700 space-y-2 my-4">
          <li>✔ 5 Course Generate</li>
          <li>✔ Limited Support</li>
          <li>✔ Email Support</li>
          <li>✔ Help Center Access</li>
        </ul>
        <h1 className="text-blue-600 font-semibold">Current Plan</h1>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
        <h3 className="text-xl font-semibold">Montly</h3>
        <p className="text-3xl font-bold my-2">5.99$<span className="text-sm">/Monthly</span></p>
        <ul className="text-gray-700 space-y-2 my-4">
          <li>✔ Unlimited Course Generate</li>
          <li>✔ Unlimited Flashcard, Quiz</li>
          <li>✔ Email Support</li>
          <li>✔ Help Center Access</li>
        </ul>
        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        
        onClick={onChecoutClick}>Get Started</Button>
      </div>
    </div>
  </div>
  )
}

export default Upgrade
