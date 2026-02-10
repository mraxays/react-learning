function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-sm tracking-[0.4em] uppercase text-white">
            Brand
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Timeless design, refined materials, and thoughtful craftsmanship.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
            Shop
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Best Sellers
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
            Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
            Newsletter
          </h4>
          <p className="text-sm text-neutral-400 mb-4">
            Receive product updates and editorial stories.
          </p>
          <div className="flex border-b border-neutral-600">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent text-sm py-2 flex-1 focus:outline-none placeholder-neutral-500"
            />
            <button className="text-sm tracking-widest uppercase text-white hover:text-neutral-300 transition">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Brand. All rights reserved.</span>
          <span className="tracking-[0.25em] uppercase">
            Designed with Axay
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
