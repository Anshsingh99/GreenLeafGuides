import { SetStateAction, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const forumCategories = [
  { name: "General Gardening", posts: 1234, color: "bg-green-100 text-green-800" },
  { name: "Plant Identification", posts: 567, color: "bg-blue-100 text-blue-800" },
  { name: "Pest Control", posts: 890, color: "bg-red-100 text-red-800" },
  { name: "Sustainable Practices", posts: 432, color: "bg-yellow-100 text-yellow-800" },
  { name: "Garden Design", posts: 765, color: "bg-purple-100 text-purple-800" },
]

const recentPosts = [
  { title: "Help identifying this plant!", author: "GreenThumb", replies: 5, views: 78, category: "Plant Identification" },
  { title: "Best practices for composting?", author: "EcoGardener", replies: 12, views: 145, category: "Sustainable Practices" },
  { title: "How to deal with aphids naturally", author: "OrganicFarmer", replies: 8, views: 102, category: "Pest Control" },
  { title: "Designing a butterfly garden", author: "NatureEnthusiast", replies: 15, views: 203, category: "Garden Design" },
]

const featuredDiscussions = [
  { 
    title: "The Impact of Climate Change on Gardening", 
    author: "ClimateAwareGardener",
    content: "As our climate continues to change, we need to adapt our gardening practices. Let's discuss strategies for creating resilient gardens that can thrive in changing conditions.",
    replies: 47,
    views: 1205
  },
  {
    title: "Urban Gardening: Maximizing Small Spaces",
    author: "CityGreenSpace",
    content: "Living in the city doesn't mean you can't have a thriving garden. Share your tips and tricks for making the most of balconies, rooftops, and small yards!",
    replies: 36,
    views: 982
  }
]

export default function CommunityForum() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto p-6 bg-gradient-to-tl from-green-50 via-emerald-100 to-green-300">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Green Leaf Guides Community Forum</h1>
      
      <div className="mb-8">
        <Input 
          type="text" 
          placeholder="Search forums..." 
          value={searchQuery}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Forum Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {forumCategories.map((category, index) => (
                <div key={index} className={`p-4 rounded-lg ${category.color} flex justify-between items-center`}>
                  <span className="font-semibold">{category.name}</span>
                  <Badge variant="outline">{category.posts} posts</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Featured Discussions</CardTitle>
          </CardHeader>
          <CardContent>
            {featuredDiscussions.map((discussion, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h3 className="font-semibold text-green-700">{discussion.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{discussion.content}</p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>By {discussion.author}</span>
                  <span>{discussion.replies} replies • {discussion.views} views</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              {recentPosts.map((post, index) => (
                <div key={index} className="py-4 border-b last:border-b-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-green-700">{post.title}</h3>
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={`/placeholder.svg?height=30&width=30`} alt={post.author} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.replies} replies • {post.views} views</span>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="unanswered">
              <p className="text-center text-gray-500 py-4">No unanswered posts at the moment.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View All Posts</Button>
        </CardFooter>
      </Card>
    </div>
  )
}