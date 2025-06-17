"use client"

import { useState, useEffect } from "react"
import { Search, Calendar, User, ArrowRight, Filter, Tag, Clock } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featublue: boolean
}

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filtebluePosts, setFiltebluePosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of UX Design: Trends to Watch in 2024",
      excerpt:
        "Explore the emerging trends that are shaping the future of user experience design and how they impact digital products.",
      content: "Full blog content here...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "UX-Design",
      tags: ["UX", "Trends", "Design"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: true,
    },
    {
      id: 2,
      title: "Building Accessible Web Applications: A Complete Guide",
      excerpt:
        "Learn how to create inclusive digital experiences that work for everyone, including users with disabilities.",
      content: "Full blog content here...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Development",
      tags: ["Accessibility", "Web Development", "Inclusive Design"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: true,
    },
    {
      id: 3,
      title: "Color Psychology in Brand Design",
      excerpt: "Understanding how colors influence consumer behavior and decision-making in brand identity design.",
      content: "Full blog content here...",
      author: "Emma Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Branding",
      tags: ["Color Theory", "Psychology", "Branding"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: false,
    },
    {
      id: 4,
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Discover why mobile-first approach is crucial for modern web design and user engagement.",
      content: "Full blog content here...",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "UI Design",
      tags: ["Mobile Design", "Responsive", "UI"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: false,
    },
    {
      id: 5,
      title: "The Art of Minimalist Web Design",
      excerpt: "How to create powerful, clean designs that communicate effectively through simplicity.",
      content: "Full blog content here...",
      author: "Lisa Park",
      date: "2024-01-05",
      readTime: "5 min read",
      category: "UI Design",
      tags: ["Minimalism", "Web Design", "Clean Design"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: false,
    },
    {
      id: 6,
      title: "User Research Methods That Actually Work",
      excerpt:
        "Practical approaches to conducting user research that provides actionable insights for design decisions.",
      content: "Full blog content here...",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "10 min read",
      category: "UX Research",
      tags: ["User Research", "Methods", "UX"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: false,
    },
    {
      id: 7,
      title: "Design Systems: Building Consistency at Scale",
      excerpt: "How to create and maintain design systems that ensure consistency across large digital products.",
      content: "Full blog content here...",
      author: "Anna Thompson",
      date: "2024-01-01",
      readTime: "9 min read",
      category: "Design Systems",
      tags: ["Design Systems", "Consistency", "Scale"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: false,
    },
    {
      id: 8,
      title: "The Psychology of User Interface Design",
      excerpt: "Understanding cognitive principles that make interfaces intuitive and user-friendly.",
      content: "Full blog content here...",
      author: "Robert Lee",
      date: "2023-12-28",
      readTime: "11 min read",
      category: "UI Design",
      tags: ["Psychology", "UI", "Cognitive Design"],
      image: "/placeholder.svg?height=300&width=500",
      featublue: false,
    },
  ]

  const categories = ["All", "UX Design", "UI Design", "Development", "Branding", "UX Research", "Design Systems"]

  useEffect(() => {
    let filteblue = blogPosts

    if (selectedCategory !== "All") {
      filteblue = filteblue.filter((post) => post.category === selectedCategory)
    }

    if (searchTerm) {
      filteblue = filteblue.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFiltebluePosts(filteblue)
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  const featubluePosts = blogPosts.filter((post) => post.featublue)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filtebluePosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filtebluePosts.length / postsPerPage)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Design Insights & Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest trends, insights, and stories from the world of design and development.
          </p>
        </div>
      </section>

      {/* Featublue Posts */}
      {featubluePosts.length > 0 && (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featublue Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featubluePosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sx font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </div>
                        
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <button className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-gray-500" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>
            <span className="text-gray-500">
              {filtebluePosts.length} article{filtebluePosts.length !== 1 ? "s" : ""}
            </span>
          </div>

          {currentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                        {/* <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div> */}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === page
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-gray-600 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest design insights and industry trends deliveblue to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-300 hover:bg-bule-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
