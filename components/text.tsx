"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export default function LollypopProcessPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Auto-switch tabs based on scroll position
      const sections = document.querySelectorAll("[data-tab-content]")
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveTab(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTab = (index: number) => {
    setActiveTab(index)
    const section = document.querySelector(`[data-tab-content="${index}"]`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto px-5 pb-5">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide block mb-4">Process</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tailored to deliver the best for your business
            </h1>
            <p className="text-xl md:text-2xl text-gray-600  mx-auto leading-relaxed">
              A flexible and adaptive process that helps businesses launch and scale quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 z-20 bg-white">
          <div className="xl:max-w-6xl mx-auto xl:px-6">
            <div className="flex justify-center">
              <div className="flex rounded-none w-full max-w-4xl">
                <button
                  onClick={() => scrollToTab(0)}
                  className={`flex-1 px-3 xl:px-6 py-6 transition-all duration-300 ${
                    activeTab === 0 ? "bg-white text-red-600 font-bold" : "bg-white text-gray-600 hover:bg-white"
                  }`}
                >
                  <div className="text-xs text-gray-500 mb-1 text-left">For SMEs and Conglomerates</div>
                  <div className="text-md md:text-xl font-bold text-left">Agile Design Process</div>
                </button>
                <button
                  onClick={() => scrollToTab(1)}
                  className={`flex-1 px:3 xl:px-6 py-6 transition-all duration-300 ${
                    activeTab === 1 ? "bg-white text-red-600 font-bold" : "bg-white text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-1 text-left">For Startups</div>
                  <div className="text-md md:text-xl font-bold text-left">Build Fast. Launch Fast.</div>
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Tab Content */}
      <div className="space-y-0">
        {/* Agile Design Process */}
        <section data-tab-content="0" className="scroll-mt-40 xl:scroll-mt-[50px] py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Process Overview */}
              <div className="mb-12 ">
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Designing a responsive website for both - a desktop and mobile, while ensuring the users feel that the
                  brand is selling fashion and not just the products.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Suited for:</span>
                    <h6 className="text-lg font-bold text-gray-900">SMEs and Conglomerates</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Time lines:</span>
                    <h6 className="text-lg font-bold text-gray-900">6-12 Months</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Engagement Mode:</span>
                    <h6 className="text-lg font-bold text-gray-900">Retainer</h6>
                  </div>
                </div>

                {/* Client Logos */}
                <div className="mb-8">
                  <p className="text-sm text-gray-600 mb-4">Clients who have trusted our process:</p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-6">
                    {["Udaan", "Byju's", "Intel", "Oracle", "Tata Steel", "Paytm", "GIIS School", "Farmrise"].map(
                      (client, index) => (
                        <div key={index} className="flex items-center justify-center">
                          <div className="w-full h-8 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">{client}</span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <button className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors">
                    Get In Touch →
                  </button>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-16">
                {/* Step 1: Discover */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 1</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Discover</h2>
                    <p className="text-gray-600 leading-relaxed">
                      The discovery phase is the vital first step of the journey, and involves gaining an understanding
                      of user requirements, insight into business goals, and an analysis of the current state of the
                      product (if applicable).
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Business Goals</h5>
                          <p className="text-gray-600">
                            Gathering knowledge from clients and understanding the company's vision and project goals.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">User Requirements</h5>
                          <p className="text-gray-600">
                            Understanding who the relevant users are, and gaining clarity on their needs and
                            motivations.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Market Research</h5>
                          <p className="text-gray-600">
                            Analysing the current market scenario and competitors, to set a direction and road map for
                            the project.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        Our UX consultants conduct a 2-3 week discovery workshop to gather knowledge from all
                        stakeholders. This helps us craft a holistic approach which will cater to all requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Design */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 2</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Design</h2>
                    <p className="text-gray-600 leading-relaxed">
                      In the design phase, we engage in an iterative process of trial and error to help come up with
                      unique concepts, ideas and solutions for every project. Clients are deeply involved in this stage,
                      to ensure the output is always in sync with business goals.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Information Architecture</h5>
                          <p className="text-gray-600">
                            Organizing, structuring, and mapping content on the platform, to help users discover
                            information and complete tasks.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Wireframes</h5>
                          <p className="text-gray-600">
                            Creating a design blueprint that provides a first glance of what the final visual design
                            will look like.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Visual Design</h5>
                          <p className="text-gray-600">
                            Creating a beautifully designed, functional interface with visual elements that appeal to
                            all users.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Prototype and Test</h5>
                          <p className="text-gray-600">
                            Prototyping the final product and testing it in real time to get inputs and reliable user
                            feedback.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        We collaborate with you to integrate best design practices with all your requirements. This
                        consists of a step by step review of schematics, wireframes, art illustrations and visual
                        design.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Build */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 3</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Build</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Translating designs into high quality adaptable, pixel perfect, scalable digital products that can
                      be launched quickly into the market.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Front-End Development</h5>
                          <p className="text-gray-600">
                            Implementing the best combination of technologies (full-stack, mean stack, flutter,
                            native-OS) for your project.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Backend Development</h5>
                          <p className="text-gray-600">
                            Using the best programming language and technologies to build a functional and adaptable
                            product.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h5>
                          <p className="text-gray-600">
                            Conducting quality checks and fixing existing glitches and inaccuracies to ensure quality
                            standards are met.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        An approach to build a high quality end product, where the design comes to life. This phase
                        consists of product optimisation and integration of special features, interactivity and other
                        design elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Section - Zudio */}
              <div className="mt-20">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 mb-8">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Zudio Project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap justify-between items-start gap-6">
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Zudio</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Designing a premium and an intuitive shopping experience for accessible fashion
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Designing a responsive website for both - a desktop and mobile, while ensuring the users feel
                        that the brand is selling fashion and not just the products.
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Build Fast Launch Fast */}
        <section data-tab-content="1" className="scroll-mt-40 xl:scroll-mt-[50px]py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Process Overview */}
              <div className="mb-12">
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  A process to design and launch a Minimal Viable Product (MVP) into the market as soon as possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Suited for:</span>
                    <h6 className="text-lg font-bold text-gray-900">Startups</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Time lines:</span>
                    <h6 className="text-lg font-bold text-gray-900">2-3 Months</h6>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">Engagement Mode:</span>
                    <h6 className="text-lg font-bold text-gray-900">Fixed Duration</h6>
                  </div>
                </div>

                {/* Client Logos */}
                <div className="mb-8">
                  <p className="text-sm text-gray-600 mb-4">Clients who have trusted our process:</p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-6">
                    {["Recalc", "Factspan", "Go Dutch", "Upstox", "Kotak Securities", "Aha", "Cricket.com"].map(
                      (client, index) => (
                        <div key={index} className="flex items-center justify-center">
                          <div className="w-full h-8 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs text-gray-500">{client}</span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                  <button className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors">
                    Get In Touch →
                  </button>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-16">
                {/* Step 1: Build */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 1</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Build</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Understanding user requirements, insights into business goals, and an analysis of the current
                      state of the product, followed by an iterative process to help come up with unique concepts, ideas
                      and solutions for the product.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Discovery Workshop</h5>
                          <p className="text-gray-600">
                            A workshop to gather knowledge from all stakeholders. This helps us craft a holistic
                            approach for all requirements.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Rapid Prototyping</h5>
                          <p className="text-gray-600">
                            Prototyping the final product and testing it in real time to get inputs and reliable user
                            feedback.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        We collaborate with you to integrate best design practices with all your requirements. This
                        consists of a step by step review of schematics, wireframes and visual design.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Launch */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <span className="text-sm font-medium text-gray-500 block mb-2">Step 2</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Launch</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Translating the designs into pixel perfect, adaptable and scalable digital products followed by
                      launching a quality product into the market as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-6">Activities</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Front-End Development</h5>
                          <p className="text-gray-600">
                            Implementing the best combination of technologies (full-stack, mean stack, flutter,
                            native-OS) for your project.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Backend Development</h5>
                          <p className="text-gray-600">
                            Using the best fit programming language and technologies to build a functional and adaptable
                            product.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">Quality Assurance</h5>
                          <p className="text-gray-600">
                            Conducting quality checks to fix the existing bugs and inaccuracies to ensure quality
                            standards are met.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">What to expect?</h5>
                      <p className="text-sm text-gray-600">
                        An approach to build a high quality end product, where the design comes to life. This phase
                        consists of product optimisation and integration of special features, interactivity and other
                        design elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Section - Upstox */}
              <div className="mt-20">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 mb-8">
                    <img
                      src="/placeholder.svg?height=400&width=800"
                      alt="Upstox Project"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap justify-between items-start gap-6">
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">UpStox</span>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        We have reimagined Fintech with design
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        A discount stock broker that allows you to trade on the go with fast, reliable & easy-to-use
                        trading platform.
                      </p>
                    </div>
                    <button className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xl text-gray-300 mb-4 block">Got An Idea?</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's craft brilliance together!</h2>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}
