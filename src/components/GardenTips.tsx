import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tips = [
  {
    title: "Choose the Right Flowers",
    description: "Select fall-blooming varieties like chrysanthemums, asters, and sedum for a colorful autumn display.",
    category: "Plant Selection"
  },
  {
    title: "Prepare Your Soil",
    description: "Amend your soil with compost in late summer to ensure your fall flowers have the nutrients they need.",
    category: "Soil Care"
  },
  {
    title: "Plan for Succession",
    description: "Plant a mix of early, mid, and late fall bloomers to ensure continuous color throughout the season.",
    category: "Garden Design"
  },
  {
    title: "Proper Watering",
    description: "Water deeply but less frequently to encourage strong root growth as temperatures cool.",
    category: "Maintenance"
  },
  {
    title: "Mulch for Protection",
    description: "Apply a layer of mulch around your plants to retain moisture and protect roots from early frosts.",
    category: "Plant Care"
  },
  {
    title: "Deadhead Regularly",
    description: "Remove spent blooms to encourage continued flowering and maintain a tidy appearance.",
    category: "Maintenance"
  }
]

export default function GardenTips() {
  return (
    <div className="container mx-auto p-6 mt-0 bg-gradient-to-tl from-green-50 via-emerald-100 to-green-300">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Fall-Blooming Flower Tips</h1>
      <p className="text-lg text-green-700 mb-8">
        Maximize your front yard's curb appeal with these expert tips for fall-blooming flowers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {tips.map((tip, index) => (
          <Card key={index} className=" shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-green-700">{tip.title}</CardTitle>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                {tip.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{tip.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}