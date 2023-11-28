const globalPageStyles = {
  bg: "#D9D9D9",
  mx: "auto",
  maxWbase: "90%",
  maxWlg: "65%",
  w: "100%",
};

const brandColors = {
  primary: "#007665",
  primaryDark: "#0f6357",
};

//For Black section cards
const cardsInfo = [
  {
    text: "Medical Gloves",
    imageSrc: "medical-gloves.jpg",
    alt: "Medical Gloves",
  },
  {
    text: "Warehouse Gloves",
    imageSrc: "warehouse-gloves.jpg",
    alt: "Warehouse Gloves",
  },
  {
    text: " Construction Gloves",
    imageSrc: "construction-gloves.jpg",
    alt: "Construction Gloves",
  },
  {
    text: "Mechanic Gloves",
    imageSrc: "mechanic-gloves.jpg",
    alt: "Mechanic Gloves",
  },
];

// For home page
const chooseUsInfo = [
  {
    number: "01",
    title: "Durable Resilience",
    description:
      "Our gloves are crafted with top-tier materials, ensuring long-lasting durability to withstand the rigors of any task.",
    color: "#F3F4F6",
  },
  {
    number: "02",
    title: "Precision Fit Technology",
    description:
      "Enjoy a glove that feels like a second skin. Our Precision Fit Technology ensures a snug and comfortable fit",
    color: "white",
  },
  {
    number: "03",
    title: "Weather-Defying Performance",
    description:
      "Conquer the elements with gloves designed to defy weather extremes. Our weather-resistant materials provide optimal protection.",
    color: "#F3F4F6",
  },
  {
    number: "04",
    title: "Breathable Comfort",
    description:
      "Experience a new level of comfort with our breathable gloves. Engineered with ventilation channels, they allow airflow to keep your hands cool and comfortable.",
    color: "white",
  },
  {
    number: "05",
    title: "Touchscreen Compatibility",
    description:
      "Stay connected without removing your gloves. Our touchscreen-compatible design enables you to use smartphones and tablets effortlessly.",
    color: "#F3F4F6",
  },
  {
    number: "06",
    title: "Stylish Versatility",
    description:
      "Our gloves seamlessly blend fashion and function, offering a versatile accessory that complements any attire.",
    color: "white",
  },
];

const faqData = [
  {
    question: "Is a sample available for big orders?",
    answer:
      "Yes, samples are available for large orders at no cost. Please contact us via email to request your samples and explore the quality and suitability of our products.",
  },
  {
    question: "How do I order online?",
    answer:
      "At the moment, online ordering is not available. To place an order, please reach out to us via email, and our team will assist you with the necessary steps.",
  },
  {
    question: "Is shipping available?",
    answer:
      "Yes, we offer shipping services. Once you’ve finalized your order, we will provide you with shipping options and associated costs. Feel free to inquire about specific shipping details when contacting us through email.",
  },
  {
    question: "Can I get an invoice for my purchase?",
    answer:
      "Yes, you can. Please contact our customer support and provide your purchase number.",
  },
];

const contactInfo = {
  name: "Gurpreet Singh Sidhu",
  email: "gurpreet10chakar@gmail.com",
  phoneNumber: "+12892424178",
  whatsAppNumber: "+12892424178",
};

//For Sidebar filter section in products page.
const categories = ["Medical", "Industrial", "Construction", "Food"];
const sizes = ["Small", "Medium", "Large"];
const colors = ["Red", "Blue", "Green"];
const materials = ["Leather", "Cotton", "Synthetic"];
const styles = ["Fingerless", "Full-finger", "Thermal", "Waterproof"];
const seasons = ["Winter", "Summer", "All-Season"];
const usages = ["Sports", "Casual", "Formal", "Work"];

export {
  globalPageStyles,
  brandColors,
  chooseUsInfo,
  cardsInfo,
  categories,
  sizes,
  colors,
  materials,
  styles,
  seasons,
  usages,
  faqData,
  contactInfo,
};
