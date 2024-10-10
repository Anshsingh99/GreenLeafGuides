import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const tips = [
  {
    title: "Scissors",
    description:
      "Gardening scissors, also known as pruning shears or garden snips, are essential tools for any gardening enthusiast. Designed for precision and ease of use, they feature sharp blades that enable clean cuts on various plants. These versatile scissors are primarily used for pruning, allowing gardeners to trim back plants, shrubs, and small branches to maintain healthy growth and shape. They are also ideal for deadheading, as their precise cutting ability makes it easy to remove spent flowers, promoting further blooming and enhancing the plant’s appearance. Additionally, gardening scissors are perfect for harvesting fruits, vegetables, herbs, and flowers, ensuring clean cuts that minimize damage to the plants. They help with trimming to create a tidy garden look and assist in thinning overcrowded areas in flower beds or vegetable patches, allowing for better air circulation and light penetration. Lightweight and ergonomic, gardening scissors are designed for comfort, making them an indispensable tool for gardeners of all levels.",
    category: "Plant Selection",
    image:
      "https://www.gsgardens.co.uk/wp-content/uploads/2020/09/hedge-cutting-shears.jpg",
  },
  {
    title: "Trowel",
    description:
      "A gardening trowel is a versatile hand tool that plays a crucial role in various gardening tasks. Its pointed, scoop-shaped blade makes it ideal for digging, allowing gardeners to easily create holes for planting bulbs, seedlings, or small plants. Additionally, it’s perfect for transplanting, helping to move plants from one location to another while minimizing root disturbance. The trowel is also effective for weeding, as it loosens the soil around weed roots for easy extraction. It can be used for mixing soil with fertilizers or amendments, ensuring even distribution, and for cultivating, as it aerates the soil and breaks up compacted earth to promote better drainage and root growth. With its durable design and ergonomic handle, a gardening trowel is an indispensable tool for any gardener, making tasks more efficient and enjoyable.",
    category: "Soil Care",
    image:
      "https://backyardbotanist.com.au/cdn/shop/files/RHS_Weeding_Trowel_for_Gardening.webp?v=1706579761&width=1445",
  },
  {
    title: "Gardening Pot",
    description:
      "A gardening pot, also known as a plant pot or planter, is an essential container used for cultivating plants in various settings. Its primary purpose is to provide a contained environment for plants to grow, offering the necessary space for root development and access to soil nutrients. Gardening pots are versatile and can be used for starting seedlings, growing houseplants, or displaying ornamental flowers. They come in various materials, including clay, plastic, and ceramic, each providing different benefits, such as breathability or insulation. Additionally, gardening pots often feature drainage holes to prevent waterlogging and root rot, ensuring healthy plant growth. With options ranging from small pots for herbs to larger containers for shrubs and trees, gardening pots are key tools for both indoor and outdoor gardening, allowing for creativity in plant arrangement and enhancing the aesthetic of any space.",
    category: "Garden Design",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-container-set/c/w/h/6-gardening-flower-pots-10-inches-plastic-planter-indoor-outdoor-original-imah2gu57urdwgep.jpeg?q=90&crop=false",
  },
  {
    title: "Gardening Fork",
    description:
      "A gardening fork, often referred to as a digging fork or garden fork, is a versatile tool essential for various gardening tasks. Its sturdy, pointed tines make it ideal for breaking up and turning soil, helping to aerate the ground and improve drainage. This tool is particularly useful for loosening compacted soil, making it easier to plant or transplant flowers, vegetables, and other plants. Additionally, a gardening fork can be employed for incorporating organic matter, such as compost or mulch, into the soil, enhancing its fertility. It's also effective for weeding, as the tines can help dislodge stubborn weeds by loosening the soil around their roots. With its robust design and ergonomic handle, a gardening fork is an indispensable tool for both novice and experienced gardeners, facilitating a healthier and more productive garden.",
    category: "Maintenance",
    image:
      "https://m.media-amazon.com/images/I/91VyCyU3arL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Watering can",
    description:
      "A gardening watering can is an essential tool designed for efficiently watering plants in both indoor and outdoor settings. It features a container with a handle for easy carrying and a spout that allows for precise control of water flow. Watering cans are particularly useful for nurturing delicate seedlings or potted plants, where a gentle stream of water is needed to avoid soil displacement. They come in various sizes and materials, including plastic, metal, and ceramic, making them suitable for different gardening needs. With a watering can, gardeners can target specific plants, ensuring that each receives the appropriate amount of water. Additionally, many watering cans have a detachable rose or spout attachment, which can disperse water more evenly over a larger area. Overall, a gardening watering can is a versatile and practical tool that helps maintain healthy plants by providing them with the moisture they need.",
    category: "Plant Care",
    image:
      "https://www.mollersgardencenter.com/app/uploads/2024/07/water-your-plants-in-the-summer_600x400.jpg",
  },
  {
    title: "Gardening Hoe",
    description:
      "A gardening hoe is a versatile tool primarily used for cultivating soil and managing weeds in the garden. Its long handle and flat blade make it ideal for breaking up compacted soil, preparing planting beds, and creating furrows for planting seeds. The hoe is also effective for weeding, allowing gardeners to slice through weeds at the soil level, preventing them from competing with desired plants for nutrients and water. Additionally, it can be used for hilling soil around plants, helping to support their growth and retain moisture. With various styles available, such as the classic hoe, the stirrup hoe, and the draw hoe, each type is designed for specific tasks and techniques, making the gardening hoe an essential tool for maintaining a healthy and productive garden.",
    category: "Maintenance",
    image:
      "https://i.pinimg.com/564x/a8/e0/93/a8e09390ac78dc23ed8eec4735355684.jpg",
  },
  {
    title: "Gardening Gloves",
    description:
      "Gardening gloves are an essential tool for any gardener, providing protection and comfort while working with plants and soil. Designed to shield hands from thorns, sharp objects, and rough surfaces, these gloves help prevent cuts, scrapes, and blisters. They also keep hands clean, making it easier to manage soil, mulch, and other gardening materials without getting dirty. Many gardening gloves are made from durable materials that offer grip and flexibility, allowing for precise handling of tools and plants. Additionally, some gloves are water-resistant or insulated, providing extra protection during wet or cold conditions. Overall, gardening gloves enhance safety and comfort, making gardening tasks more enjoyable and efficient.",
    category: "Maintenance",
    image:
      "https://gardenerspath.com/wp-content/uploads/2022/12/Best-Gardening-Gloves-Feature.jpg",
  },
  {
    title: "Gardening Sickle",
    description:
      "A gardening sickle is a curved, hand-held tool designed for cutting and harvesting plants, making it an essential instrument in various gardening and agricultural tasks. Its sharp, curved blade allows for efficient slicing through grass, weeds, and small crops, such as grains or herbs. The sickle is particularly useful for clearing overgrown areas, allowing gardeners to quickly manage unruly vegetation and maintain a tidy garden. Its design enables close, precise cuts at ground level, which is ideal for harvesting crops without damaging surrounding plants. Additionally, the sickle can be used for trimming and shaping plants, promoting healthier growth. Lightweight and easy to handle, a gardening sickle is a valuable tool for both casual gardeners and more extensive agricultural operations.",
    category: "Maintenance",
    image:
      "https://www.photocase.com/photos/1014476-sickle-gardening-agriculture-forestry-tool-summer-photocase-stock-photo-large.jpeg",
  },
  {
    title: "Gardening Rake",
    description:
      "A gardening rake is a versatile tool primarily used for managing soil, leaves, and debris in the garden. Its long handle and wide head, equipped with sturdy tines, make it ideal for leveling and smoothing soil surfaces, preparing planting beds, and breaking up clumps of dirt. Rakes are also effective for gathering fallen leaves, grass clippings, and other organic matter, helping to keep garden spaces tidy. Additionally, they can be used to incorporate mulch or compost into the soil, enhancing its fertility and structure. Some rakes have flexible tines, making them suitable for gathering lighter materials, while others feature rigid tines for more heavy-duty tasks. Overall, a gardening rake is an indispensable tool for maintaining a healthy and organized garden.",
    category: "Maintenance",
    image:
      "https://mlhobevaucyf.i.optimole.com/w:1200/h:742/q:mauto/f:best/ig:avif/https://novo3ds.in/wp-content/uploads/2023/06/AG031_2.jpg",
  },
  {
    title: "Gardening Hose",
    description:
      "A gardening hose is an essential tool for efficiently watering plants and maintaining a healthy garden. Made from durable materials, it allows gardeners to easily transport water from a faucet to various areas of their garden or yard. Garden hoses come in different lengths and diameters, making them suitable for small flower beds as well as larger landscapes. They often feature adjustable nozzles or spray attachments, enabling users to control the flow and pattern of water, from gentle misting for delicate seedlings to a stronger jet for washing tools or surfaces. Additionally, hoses can be used for a variety of other tasks, such as filling ponds, washing vehicles, or cleaning outdoor spaces. Overall, a gardening hose is a versatile and practical tool that simplifies the watering process and helps ensure plants receive the moisture they need to thrive.",
    category: "Maintenance",
    image:
      "https://foodgardening.mequoda.com/wp-content/uploads/2021/03/Watering-garden-e1636147519882.jpg",
  },
];

export default function Tools() {
  return (
    <div className="container mx-auto p-6 bg-green-100">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Tools & Supplies
      </h1>
      <p className="text-lg text-green-700 mb-8">
        Maximize your front yard's curb appeal with these expert Tools for
        fall-blooming flowers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={tip.image}
                alt={tip.title}
                className="object-cover w-full h-full rounded-t-lg"
              />
            </AspectRatio>
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
                {tip.description.slice(0, 100)}...
              </CardDescription>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="mt-4">
                    Read More
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>{tip.title}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>{tip.description}</DialogDescription>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
