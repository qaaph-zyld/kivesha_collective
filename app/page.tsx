import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Rocket, Target, TrendingUp, Users, Zap, ArrowUpRight, BarChart, Clock, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  // Hero Section
  const hero = {
    title: "Premium Concrete Craftsmanship for Discerning Clients",
    subtitle: "Transform your space with custom concrete designs that blend beauty, durability, and timeless elegance",
    cta: "Get a Free Quote",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "500+", label: "Projects Completed" },
      { value: "100%", label: "Satisfaction Guaranteed" }
    ]
  }

  // Features Section
  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-stone-600 dark:text-stone-400" />,
      title: "15+ Years Experience",
      description: "Master craftsmen with over a decade in premium concrete design"
    },
    {
      icon: <Target className="w-6 h-6 text-stone-600 dark:text-stone-400" />,
      title: "500+ Projects",
      description: "Successfully completed high-end residential and commercial projects"
    },
    {
      icon: <Zap className="w-6 h-6 text-stone-600 dark:text-stone-400" />,
      title: "Premium Materials",
      description: "Using only the highest quality, durable concrete and finishes"
    },
    {
      icon: <Users className="w-6 h-6 text-stone-600 dark:text-stone-400" />,
      title: "Custom Solutions",
      description: "Tailored designs to match your unique style and space requirements"
    }
  ]

  // Results Section
  const results = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: "5-10x",
      label: "Average ROI for clients"
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      value: "300%+",
      label: "Average revenue increase"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      value: "90 Days",
      label: "To see significant results"
    }
  ]

  // Define product type for TypeScript
  type Product = {
    title: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular: boolean;
    highlight: string;
  };

  // Concrete Products Section
  const products: Product[] = [
    {
      title: "Custom Concrete Countertops",
      price: "$1,500 - $8,000+",
      description: "Handcrafted, durable countertops for kitchens and bathrooms",
      features: [
        "Custom colors and finishes",
        "Seamless installation",
        "Heat and scratch resistant",
        "10-year warranty",
        "2-3 week turnaround"
      ],
      cta: "Get a Free Quote",
      popular: false,
      highlight: "Most popular in modern kitchens"
    },
    {
      title: "Decorative Concrete Flooring",
      price: "$2,000 - $15,000+",
      description: "Stunning floors with custom colors and patterns",
      popular: true,
      features: [
        "Polished, stained, or epoxy finishes",
        "Custom designs and stencils",
        "High-gloss or matte options",
        "Commercial-grade durability",
        "3-4 week installation"
      ],
      cta: "View Flooring Options",
      highlight: "Best for high-traffic areas"
    },
    {
      title: "Concrete Fire Features",
      price: "$1,200 - $6,000+",
      description: "Custom fireplaces and fire pits for indoor/outdoor spaces",
      popular: false,
      features: [
        "Gas or wood-burning options",
        "Custom sizing and shapes",
        "Heat-resistant finishes",
        "4-6 week production",
        "Professional installation"
      ],
      cta: "Design Your Fire Feature",
      highlight: "Perfect for outdoor living"
    },
    {
      title: "Architectural Wall Panels",
      price: "$800 - $5,000+",
      description: "Modern, textured wall features for any space",
      features: [
        "Custom textures and patterns",
        "Interior/exterior options",
        "Sound-dampening properties",
        "Easy installation",
        "Low maintenance"
      ],
      cta: "Explore Wall Designs",
      popular: false,
      highlight: "Trending in modern architecture"
    },
    {
      title: "Concrete Furniture",
      price: "$600 - $4,000+",
      description: "Handcrafted tables, benches, and more",
      features: [
        "Custom designs and dimensions",
        "Indoor/outdoor options",
        "Wood and metal accents",
        "4-5 week production",
        "Nationwide shipping"
      ],
      cta: "Browse Furniture Gallery",
      popular: false,
      highlight: "Limited edition pieces"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-stone-800 to-stone-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <Badge className="mb-4 bg-stone-100 text-stone-800 dark:bg-stone-800/30 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50">
              Premium Concrete Artisans
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto mb-10">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold">
                <Link href="/contact">
                  {hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-8 py-6 text-lg font-semibold border-white text-white hover:bg-white/10">
                <Link href="/#products">View Our Products</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
              {hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-stone-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="py-12 bg-stone-50 dark:bg-stone-900/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-stone-500 dark:text-stone-400 mb-8 uppercase text-sm font-medium tracking-wider">FEATURED IN</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-80">
            {[
              { name: 'Architectural Digest', logo: 'AD' },
              { name: 'Dwell', logo: 'Dwell' },
              { name: 'Elle Decor', logo: 'ED' },
              { name: 'Architectural Record', logo: 'AR' },
              { name: 'Concrete Decor', logo: 'CD' },
              { name: 'Design Milk', logo: 'DM' }
            ].map((brand, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-stone-800 shadow-md flex items-center justify-center text-stone-700 dark:text-stone-300 font-bold text-xl mb-2">
                  {brand.logo}
                </div>
                <span className="text-sm text-stone-500 dark:text-stone-400">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-stone-800 text-white hover:bg-stone-700">
                Our Craftsmanship
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                Master Concrete Artisans for Discerning Clients
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                With over 15 years of experience in premium concrete craftsmanship, we've transformed hundreds of spaces with our custom concrete solutions. From luxury homes to high-end commercial spaces, our work stands the test of time.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                We combine traditional techniques with innovative methods to create stunning, durable concrete features that elevate any space. Our attention to detail and commitment to quality ensures every project exceeds expectations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-stone-800 hover:bg-stone-700 text-white">
                <Link href="/#products">View Our Products</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 bg-slate-200 w-full h-96 md:h-[500px] rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-stone-100 text-stone-800 dark:bg-stone-800/30 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700/50">
              Our Premium Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Handcrafted Concrete Masterpieces
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Premium concrete products designed to elevate your space with timeless elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product: any, index: number) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${product.popular ? 'ring-2 ring-stone-500' : ''} h-full flex flex-col`}
              >
                {product.popular && (
                  <div className="absolute top-0 right-0 bg-stone-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white my-3">
                    {product.price}
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6 flex-grow">
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-stone-600 dark:text-stone-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    className={`w-full py-6 text-lg font-semibold ${
                      product.popular 
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
                        : 'bg-stone-800 hover:bg-stone-700'
                    }`}
                  >
                    {product.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Not sure which plan is right for you? Let's talk about your specific needs.
            </p>
            <Button asChild variant="outline" className="border-stone-600 text-stone-600 hover:bg-stone-50 dark:border-stone-400 dark:text-stone-400 dark:hover:bg-stone-900/30">
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-stone-700 to-stone-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Space with Premium Concrete?</h2>
          <p className="text-xl text-stone-100 mb-8 max-w-2xl mx-auto">
            Schedule a free design consultation with our concrete artisans to discuss your project and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold">
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
              <Link href="/#products">View Our Products</Link>
            </Button>
          </div>
          <p className="mt-6 text-stone-300 text-sm">
            Or call us directly at <a href="tel:+15551234567" className="text-white font-medium hover:underline">(555) 123-4567</a>
          </p>
        </div>
      </section>
    </div>
  )
}
