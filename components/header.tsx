import Link from "next/link"
import { Button } from "@/components/ui/3d-button"
import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif">Patel Dental</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-sm text-foreground hover:text-primary transition-colors">
              Our Process
            </Link>
            <Link href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="#find-us" className="text-sm text-foreground hover:text-primary transition-colors">
              Find Us
            </Link>
          </nav>

          {/* CTA Button */}
          <a href="https://wa.me/917982769147?text=Hi%20Patel%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
            <Button className="rounded-full px-6">Book on WhatsApp 💬</Button>
          </a>
        </div>
      </div>
    </header>
  )
}
