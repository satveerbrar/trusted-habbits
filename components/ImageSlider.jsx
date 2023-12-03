import React, { useState } from "react"
import { Box, Image, HStack } from "@chakra-ui/react"

export const ImageSlider = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const changeSlide = (index) => {
    setSlideIndex(index)
  }

  return (
    <Box position="relative" overflow="hidden">
      <Box
        className="slides"
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${slideIndex * 100}%)`,
          zIndex: 1,
        }}
        mb="20px"
      >
        {images.map((image, index) => (
          <Box key={index} flex="0 0 100%" boxSize="full">
            <img
              src={`/images/${image}`}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        ))}
      </Box>

      {/* Thumbnail Images */}
      <HStack
        spacing={2}
        position="absolute"
        bottom="00px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={4}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={`/images/${image}`}
            alt={`Thumbnail ${index + 1}`}
            boxSize="50px"
            objectFit="cover"
            borderRadius="md"
            cursor="pointer"
            opacity={slideIndex === index ? 1 : 0.7}
            onClick={() => changeSlide(index)}
          />
        ))}
      </HStack>
    </Box>
  )
}
