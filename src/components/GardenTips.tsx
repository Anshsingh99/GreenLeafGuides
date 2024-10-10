import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tips = [
  {
    title: "Choose the Right Plants for Your Climate and Soil",
    description:
      "Select plants that are well-suited for your local climate and soil type to ensure healthy growth.",
    category: "Plant Selection",
  },
  {
    title: "Water Properly",
    description:
      "Deep, infrequent watering promotes strong roots and better drought resistance. Avoid shallow, frequent watering.",
    category: "Watering",
  },
  {
    title: "Use Nutrient-Rich Soil",
    description:
      "Healthy plant growth starts with nutrient-rich soil that supports roots and provides essential nutrients.",
    category: "Soil Care",
  },
  {
    title: "Mulch Around Plants",
    description:
      "Use mulch around your plants to conserve moisture, reduce weed growth, and improve soil health.",
    category: "Soil Care",
  },
  {
    title: "Provide Proper Sunlight",
    description:
      "Ensure your plants get the right amount of light based on their specific needs (full sun, partial shade, etc.).",
    category: "Light Requirements",
  },
  {
    title: "Fertilize Regularly",
    description:
      "Use organic or synthetic fertilizers to provide essential nutrients and boost plant growth.",
    category: "Fertilizing",
  },
  {
    title: "Prune Dead or Damaged Parts",
    description:
      "Regular pruning of dead or damaged parts encourages healthy growth and helps prevent disease.",
    category: "Plant Care",
  },
  {
    title: "Control Pests Naturally",
    description:
      "Use eco-friendly pest control methods like neem oil or introduce natural predators to maintain a healthy garden.",
    category: "Pest Control",
  },
  {
    title: "Use Proper Plant Spacing",
    description:
      "Allow enough space between plants to promote better air circulation and prevent diseases.",
    category: "Plant Care",
  },
  {
    title: "Repot Potted Plants",
    description:
      "When potted plants outgrow their containers, repot them to give their roots more space to grow.",
    category: "Plant Care",
  },
  {
    title: "Monitor Soil Moisture",
    description:
      "Regularly check soil moisture to avoid overwatering or underwatering your plants.",
    category: "Watering",
  },
  {
    title: "Rotate Indoor Plants",
    description:
      "Rotate your indoor plants to ensure they receive even sunlight and grow evenly.",
    category: "Light Requirements",
  },
  {
    title: "Check for Diseases Regularly",
    description:
      "Inspect plants for signs of disease frequently and take action quickly to treat any issues.",
    category: "Plant Care",
  },
  {
    title: "Avoid Overcrowding",
    description:
      "Space plants properly to reduce competition for nutrients, water, and sunlight.",
    category: "Plant Care",
  },
  {
    title: "Use Compost to Enrich Soil",
    description:
      "Add compost to your soil to improve its nutrient content and promote strong, healthy plant growth.",
    category: "Soil Care",
  },
];

export default function GardenTips() {
  return (
    <div className="container mx-auto p-6 mt-0 bg-gradient-to-tl from-green-50 via-emerald-100 to-green-300">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        General Plant Care Tips
      </h1>
      <p className="text-lg text-green-700 mb-8">
        Maximize your front yard's curb appeal with these expert tips for
        fall-blooming flowers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className=" shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-700">
                {tip.title}
              </CardTitle>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {tip.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                {tip.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
