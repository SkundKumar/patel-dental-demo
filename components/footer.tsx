import Link from "next/link"
import { IconBrandLinkedin, IconBrandTwitter, IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-serif text-xl font-bold">Patel Dental Clinic</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Gentle Dental Care You Can Trust. Serving Greater Noida with professional expertise, personal touch, and a commitment to your smile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+917982769147"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <IconPhone className="w-4 h-4" />
                  079827 69147
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <IconMail className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="py-8 border-t border-b border-border">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-sm text-muted-foreground">
                Shop No. G-20, Gravity Shop, Gaur Atulyam, Omicron I, Greater Noida, UP 201310
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Hours</h4>
              <p className="text-sm text-muted-foreground">
                Mon–Sat: 10:00 AM–1:00 PM & 5:00 PM–9:00 PM
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Google Rating</h4>
              <p className="text-sm text-muted-foreground">
                4.8 ⭐ (43 verified reviews)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Patel Dental Clinic. All rights reserved.
          </p>

          {/* Contact Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <IconBrandInstagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+917982769147"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <IconPhone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
