import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
  } from "../../components/ui/dialog"
import { Container, Section } from "./craft";
import Link from "next/link";

const photos = [
  {
    src: "/blogpub.png",
	url:'https://zakaria-blogging-ieu6.vercel.app'
  },
  {
    src: "/thawba.png",
	url:'https://thawab-commerce.vercel.app'
  },
  {
    src: "/blogg.png",
	url:'https://zakinnovate-daily.vercel.app'
  },
 
];

const Features = () => {
  return (
    <Section>
      <Container>
        <h2 className="!mt-0 mb-4">These are projects i've built </h2>
        <p>
          feel free to click and visit any of the projects preview
        </p>
        <Carousel className="mt-6 w-full h-full cursor-pointer">
			
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
				
              <CarouselItem
                key={index}
                className="pl-1  lg:h-full"
              >
                <div className="p-1 h-full">
                  <Card className="relative h-full overflow-hidden">
                    <CardContent className="not-prose flex aspect-video items-center justify-center h-full">
					<Dialog>
  <DialogTrigger>
    <Image
      src={photo.src}
      alt="Presets.com Example Image"
      width={1020}
      height={480}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>
        <Link target="blank" href={photo.url}>
          {photo.url}
        </Link>
      </DialogTitle>
	  
    </DialogHeader>
	
  </DialogContent>
</Dialog>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
};

export default Features;
