import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              Kivesha<span className="text-amber-500">Collective</span>
            </Link>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Premium concrete craftsmanship for discerning clients. Transforming spaces with custom designs that blend beauty, durability, and timeless elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/#products", label: "Products" },
                { href: "/#about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {["Concrete Countertops", "Decorative Flooring", "Fire Features", "Wall Panels", "Concrete Furniture"].map((item) => (
                <li key={item}>
                  <Link href="/contact" className="text-sm text-stone-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-stone-400">hello@kiveshacollective.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-stone-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-stone-400">123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Kivesha Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-stone-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-stone-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
