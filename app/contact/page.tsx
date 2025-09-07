import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions or ready to start your high-ticket marketing journey? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm h-full">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Email Us</h3>
                    <p className="text-slate-600">hello@kiveshacollective.com</p>
                    <p className="text-sm text-slate-500 mt-1">Response time: within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Call Us</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500 mt-1">Monday - Friday, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">Visit Us</h3>
                    <p className="text-slate-600">123 Business Ave, Suite 100</p>
                    <p className="text-slate-600">New York, NY 10001</p>
                    <p className="text-sm text-slate-500 mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-medium text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social) => (
                    <Button
                      key={social}
                      variant="outline"
                      className="rounded-full w-10 h-10 p-0"
                      aria-label={social}
                    >
                      <span className="sr-only">{social}</span>
                      <div className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
