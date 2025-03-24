"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import FlashCardItem from "./_components/FlashCardItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Flashcard() {
  const { courseId } = useParams();
  const [flashCards, setFlashCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState();
  const [api, setApi] = useState();
  useEffect(() => {
    getFlashCards();
  }, []);

  useEffect(() => {
    if(!api){
        return ;
    }
    api.on('select', ()=> {
        setIsFlipped(false)
    })
  }, [api]);

  const getFlashCards = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
      studyType: "Flashcard",
    });
    setFlashCards(result?.data[0]?.content || []);
    console.log("Flashcard", result.data);
  };
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Flashcards</h2>
      <p className="text-center">The Ultimate Tool to Lock in Concepts</p>
      <div className="mt-10">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {flashCards.map((flashCard , index)=>(
                <CarouselItem key={index}>
                    <FlashCardItem 
                        handleClick={handleClick} 
                        isFlipped={isFlipped}
                        question={flashCard.front} 
                        answer={flashCard.back} 
                        />
                </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p className="text-center mt-10">Click to flip for the answer</p>
      </div>
    </div>
  );
}

export default Flashcard;
