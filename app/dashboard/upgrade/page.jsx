"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { db } from "@/config/db";
import { USER_TABLE } from "@/config/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";

function Upgrade() {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    user && GetUserDetail();
  }, [user]);

  const GetUserDetail = async () => {
    const result = await db
      .select()
      .from(USER_TABLE)
      .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

      console.log("User details from DB:", result); // Debugging log
    setUserDetail(result[0]);
  };

  const onCheckoutClick = async () => {
    try {
      const result = await axios.post("/api/payment/checkout", {
        priceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID,
      });
      console.log(result.data);

      const checkoutUrl = result.data?.session?.url || result.data?.url;
      if (checkoutUrl) {
        window.open(checkoutUrl, "_blank");
      } else {
        console.error("Checkout URL is undefined");
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
    }
  };

  const onPaymentManage = async () => {
    if (!userDetail?.customerId) {
      console.error("Customer ID is undefined");
      return;
    }
  
    try {
      const result = await axios.post("/api/payment/manage-payment", {
        customerId: userDetail.customerId,
      });
  
      console.log(result.data);
      if (result.data.url) {
        window.open(result.data.url, "_blank");
        console.log("neww" + result.data );
      
      }
    } catch (error) {
      console.error("Error managing subscription:", error.response?.data || error.message);
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h2 className="text-3xl font-bold">Plans</h2>
      <p className="text-gray-600 mb-8">
        Update your plan to generate unlimited courses for your exam
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg border text-center">
          <h3 className="text-xl font-semibold">Free</h3>
          <p className="text-3xl font-bold my-2">
            0$<span className="text-sm">/month</span>
          </p>
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
          <p className="text-3xl font-bold my-2">
            5.99$<span className="text-sm">/Monthly</span>
          </p>
          <ul className="text-gray-700 space-y-2 my-4">
            <li>✔ Unlimited Course Generate</li>
            <li>✔ Unlimited Flashcard, Quiz</li>
            <li>✔ Email Support</li>
            <li>✔ Help Center Access</li>
          </ul>
          {userDetail?.member == false ? (
            <Button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={onCheckoutClick}
            >
              Get Started
            </Button>
          ) : (
            <Button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={onPaymentManage}
            >
              Manage Subscription
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
