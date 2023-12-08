import React from "react"
import {
  Box,
  Text,
  VStack,
  Checkbox,
  Collapse,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  HStack,
  Button,
} from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

import {
  categories,
  sizes,
  colors,
  materials,
  styles,
  seasons,
  usages,
} from "@/src/utils/staticData"

export const Sidebar = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [selectedSizes, setSelectedSizes] = React.useState([])
  const [selectedColors, setSelectedColors] = React.useState([])
  const [selectedMaterials, setSelectedMaterials] = React.useState([])
  const [selectedStyles, setSelectedStyles] = React.useState([])
  const [selectedSeasons, setSelectedSeasons] = React.useState([])
  const [selectedUsages, setSelectedUsages] = React.useState([])

  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true })
  const isMobile = useBreakpointValue({ base: true, md: false })

  const { isOpen: categoryOpen, onToggle: toggleCategory } = useDisclosure()
  const { isOpen: sizeOpen, onToggle: toggleSize } = useDisclosure()
  const { isOpen: colorOpen, onToggle: toggleColor } = useDisclosure()
  const { isOpen: materialOpen, onToggle: toggleMaterial } = useDisclosure()
  const { isOpen: styleOpen, onToggle: toggleStyle } = useDisclosure()
  const { isOpen: seasonOpen, onToggle: toggleSeason } = useDisclosure()
  const { isOpen: usageOpen, onToggle: toggleUsage } = useDisclosure()

  const handleCategoryChange = (category) => {
    toggleFilter(category, selectedCategories, setSelectedCategories)
  }

  const handleSizeChange = (size) => {
    toggleFilter(size, selectedSizes, setSelectedSizes)
  }

  const handleColorChange = (color) => {
    toggleFilter(color, selectedColors, setSelectedColors)
  }

  const handleMaterialChange = (material) => {
    toggleFilter(material, selectedMaterials, setSelectedMaterials)
  }

  const handleStyleChange = (style) => {
    toggleFilter(style, selectedStyles, setSelectedStyles)
  }

  const handleSeasonChange = (season) => {
    toggleFilter(season, selectedSeasons, setSelectedSeasons)
  }

  const handleUsageChange = (usage) => {
    toggleFilter(usage, selectedUsages, setSelectedUsages)
  }

  const toggleFilter = (value, selectedValues, setSelectedValues) => {
    setSelectedValues((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((selected) => selected !== value)
      } else {
        return [...prevSelected, value]
      }
    })
  }

  return (
    <>
      <Box
        mt="100px"
        p={isOpen ? "30px" : "0px"}
        bg="white"
        width={isOpen ? "250px" : "0px"}
        // boxShadow="lg"
        borderRadius="md"
        position={{ base: "absolute", md: "relative" }}
        top="0px"
      >
        {isMobile ? (
          <Button
            variant="ghost"
            onClick={onToggle}
            leftIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            fontWeight="bold"
            fontSize="xl"
            mb="15px"
            color="#0f6357"
          >
            Filters
          </Button>
        ) : (
          <Text
            fontWeight="bold"
            fontSize="xl"
            mb="15px"
            ml="-18px"
            color="#0f6357"
          >
            Filters
          </Text>
        )}

        {isOpen && (
          <VStack align="start" spacing="20px">
            {/* Category Filter */}
            <Box>
              <HStack justify="space-between" align="center">
                <Text fontWeight="700" fontSize="md" color="#007665">
                  Category:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Category"
                  icon={categoryOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleCategory}
                />
              </HStack>
              <Collapse in={categoryOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {categories.map((category, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      colorScheme="teal"
                      fontSize="5px "
                    >
                      {category}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>

            {/* Size Filter */}
            <Box>
              <HStack justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="md" color="#007665">
                  Size:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Size"
                  icon={sizeOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleSize}
                />
              </HStack>
              <Collapse in={sizeOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {sizes.map((size, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                      colorScheme="teal"
                    >
                      {size}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>

            {/* Color Filter */}
            <Box>
              <HStack justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="md" color="#007665">
                  Color:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Color"
                  icon={colorOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleColor}
                />
              </HStack>
              <Collapse in={colorOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {colors.map((color, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                      colorScheme="teal"
                    >
                      {color}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>

            {/* Material Filter */}
            <Box>
              <HStack justify="space-between" align="center" color="#007665">
                <Text fontWeight="bold" fontSize="md">
                  Material:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Material"
                  icon={materialOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleMaterial}
                />
              </HStack>
              <Collapse in={materialOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {materials.map((material, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedMaterials.includes(material)}
                      onChange={() => handleMaterialChange(material)}
                      colorScheme="teal"
                    >
                      {material}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>

            {/* Style Filter */}
            <Box>
              <HStack justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="md" color="#007665">
                  Style:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Style"
                  icon={styleOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleStyle}
                />
              </HStack>
              <Collapse in={styleOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {styles.map((style, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedStyles.includes(style)}
                      onChange={() => handleStyleChange(style)}
                      colorScheme="teal"
                    >
                      {style}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>

            {/* Season Filter */}
            <Box>
              <HStack justify="space-between" align="center">
                <Text fontWeight="bold" fontSize="md" color="#007665">
                  Season:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Season"
                  icon={seasonOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleSeason}
                />
              </HStack>
              <Collapse in={seasonOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {seasons.map((season, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedSeasons.includes(season)}
                      onChange={() => handleSeasonChange(season)}
                      colorScheme="teal"
                    >
                      {season}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>

            {/* Usage Filter */}
            <Box>
              <HStack justify="space-between" align="center" color="#007665">
                <Text fontWeight="bold" fontSize="md">
                  Usage:
                </Text>
                <IconButton
                  size="xs"
                  aria-label="Toggle Usage"
                  icon={usageOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={toggleUsage}
                />
              </HStack>
              <Collapse in={usageOpen}>
                <VStack align="start" spacing="10px" pt="10px">
                  {usages.map((usage, index) => (
                    <Checkbox
                      size="sm"
                      pl="10px"
                      key={index}
                      isChecked={selectedUsages.includes(usage)}
                      onChange={() => handleUsageChange(usage)}
                      colorScheme="teal"
                    >
                      {usage}
                    </Checkbox>
                  ))}
                </VStack>
              </Collapse>
            </Box>
          </VStack>
        )}
      </Box>
    </>
  )
}
