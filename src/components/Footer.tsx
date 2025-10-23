import logo from "figma:asset/bcdca312ad874a8bb766cd96982cabbd65187ab4.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Products", href: "#catalog" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Contact Info",
      links: [
        { label: "062 671 8275", href: "tel:0626718275" },
        { label: "TSAAYMAN9@GMAIL.COM", href: "mailto:TSAAYMAN9@GMAIL.COM" },
        { label: "GEORGE, WESTERN CAPE", href: "#" },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-secondary">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="Tammy's Shades of Curls" 
                className="h-16 w-auto"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-white/60 mr-2">Follow Us:</span>
              <a
                href="https://www.facebook.com/share/1CDZPDRubC/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <p className="text-white/60 text-center mt-6">
            &copy; 2024 Tammy's Shades of Curls. All rights reserved. | tammyscurls.com
          </p>
        </div>
      </div>
    </footer>
  );
}
