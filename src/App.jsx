import { useCallback } from 'react'
import { useCart } from './hooks/useCart'

const PRODUCTS = [
  { id: 'prod-1', name: 'EW PEOPLE CAT', price: 7000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYsKWqQC5wFUNzMww0MTtD3PseazdWlUJ_4MiYzdZrhuAVQhWo0epzaz0QuxKktkQ17e2dxE9FEbubAupgtCTHxGyq6bd3G5HjJwU44ZmWtrTYJJEY9GRCxtRpbQ_jYzBK8yvouiforjv0ETAA4a3erkTqY3ftjv6pMjwpfMX5v6IbWDk0_yQvjDFb32hl7nuO-eHLXm3Buy7k73Lae2ckn3j9lQEIBSU5Dl801WXshFIdRjCqQ_7tPlp2ntKcd705gv_NWI2vfEZq', tag: 'Nuevo' },
  { id: 'prod-2', name: 'PLACA JDM', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB179CUtBL4e0ZB6FeMqsflKGnG2BGUDaTjbWXFq5XM4ls98HltRa8UKmO9CRjjGyCzedZJkGnkN5fxVnAep8IUYyjguvGIy_KWSHpzavhhgbgXL8UbPJtYIH6VBHg7IPlsxKPOZgwOgffpjoyIwgoDyvGcQh2IMWeBjnUYl472VixrqwqLzUFV8BSU2E2M69s_9CrGsY5JW0PVlKGl55ZhQ3B5k5tWWVSatsf-JErH4lxebvyaEDsUZUJVwiSrJ_nbUzCiRaARb1Hb', tag: 'Oferta' },
  { id: 'prod-3', name: 'TURBO TUNNING', price: 15000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5XENUcffnRPc6TEt56iRqeAGYqMVFZf50ihNjaFxzEK-W6CDq4QJQsAfVlI8TQb6qzBoXLslGh_HW6WvCZBopLeDOaOgCHReTx0fO9gGppxIuZPQmAMSqCm_TDRq8Qs8pm395Rp3bUE_3jo-scFOxecJMQUFCtqq6IY0y-vP8xxoKmF6ZdfuJ3SJu_ezl1MbHn6e0R60xalcQ5eztq3hULabcWEXXuY3ZDFOemPaXjqnscX3fw6UmTpQ7ZlgRdvGyxy6WRTQZk7fh' },
  { id: 'prod-4', name: 'TOMMY HILFIGER', price: 50000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoHPFBNL95ljh54M9vPWGKPmg_okg9PtDeUOviPywJNS7HKvkFRnoKvSF6Zjn_qyvefR__5MQDVXbn32QSXy_kuDeIEuCnksdh7OVGWBXCkp4nWOJh4yqKbRHGWmOdBT8znjNlVmu6qUJL2YRqsJERomFKfdGrwoLuxYaLZwBd7su0no5w2Mwxjz6vysOxlV3d4OTxYhU4LIJm9FGkBCnUEGKVBdn2dbhqTUuZ-tXru2E6BG2dpSo1koiI2JJWajsAgjw2CrGFiQLm', tag: 'Nuevo' },
  { id: 'prod-5', name: 'MARIO PARTY', price: 14000, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSsQB3JRRzfjtLJZGCTGfElHzkNVLuZ4xXhQMAjRb0Blo3UruCoEI34i7AxDLDjXB3s1rdRNA5G4WGfcYgp8J_k1gxwSTxB7mg3b_UW1-EvyZF3EKkhZDPpH4z2LcLcG5HMuS9s_zQgXiJYWqOsNrPP69g9Ai2StIYpIzAzXSyUX0TBTOz8YFCCgAq9jXWAIMKUjnz-cdDAvjtyPCAzE6OnC5g4-5HtWXSzRrDlYCBJWZB8TPkQmxtj0OAJyOgoWWiuBlICf4OdZsY' },
]

function Icon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>
}

function Navbar({ totalCount, onCartToggle }) {
  return (
    <header className="bg-surface/90 backdrop-blur-md border-b border-outline-variant fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a id="brand-logo" className="font-headline-lg text-headline-lg text-primary uppercase italic tracking-tighter" href="#">Storebass</a>
        <nav className="hidden md:flex gap-gutter">
          <a id="nav-categories" className="text-white font-medium hover:text-primary transition-colors duration-200 font-title-md text-title-md" href="#">CATEGORÍAS</a>
          <a id="nav-promotions" className="text-primary font-bold border-b-2 border-primary pb-1 font-title-md text-title-md" href="#">PROMOCIONES</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block group">
            <input id="search-input" className="bg-elevated-gray border border-card-border text-white rounded px-4 py-2 w-64 focus:border-primary focus:outline-none focus:ring-0 transition-colors duration-200 peer font-body-base" placeholder="¿Qué deseas comprar?" type="text" />
            <Icon name="search" className="absolute right-3 top-2.5 text-[#c8c6c6] peer-focus:text-primary transition-colors duration-200" />
          </div>
          <button id="btn-cart-toggle" onClick={onCartToggle} className="hover:text-primary transition-colors duration-200 flex items-center bg-elevated-gray border border-card-border p-2 rounded hover:border-primary relative">
            <Icon name="shopping_cart" />
            {totalCount > 0 && (
              <span id="cart-badge" className="absolute -top-1.5 -right-1.5 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-background">{totalCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden topographic-bg bg-surface pt-24">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center relative z-10 min-h-[420px]">
        <div className="z-10 py-14 lg:py-20">
          <span className="text-primary font-label-sm text-label-sm uppercase tracking-widest mb-3 block">BIENVENIDO A STOREBASS</span>
          <h1 className="font-display-xl mb-5 leading-none text-white uppercase" style={{ fontSize: 'clamp(52px, 7vw, 88px)', lineHeight: 1.0, letterSpacing: '0.01em' }}>
            COLECCIONA LO<br />
            QUE <span className="text-primary">TE REPRESENTA</span>
          </h1>
          <p className="text-white/80 mb-8 max-w-md font-body-base" style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Pines, llaveros y gorras con estilo propio.<br />
            Más de 200 diseños disponibles.
          </p>
          <div className="flex flex-wrap gap-4">
            <button id="btn-hero-catalog" className="bg-primary text-on-primary px-8 py-3.5 font-headline-lg text-xl uppercase hover:brightness-110 active:scale-95 transition-all flex items-center gap-3 rounded">
              VER CATÁLOGO
              <Icon name="arrow_forward" className="text-xl" />
            </button>
            <button id="btn-hero-promotions" className="bg-transparent border-2 border-white/60 text-white px-8 py-3.5 font-headline-lg text-xl uppercase hover:border-primary hover:text-primary active:scale-95 transition-all rounded">
              PROMOCIONES %
            </button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <img className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoGEdLwdIfU8C8r82eDfDK4gRyfVifaGNw_k1OokVS_mXb0jkstPOCmc-VMnBPJI5uhqDuEUM9mrlu6evPfO34SHOtTzifziAY_BndlWRrMfm1RzYQmt2wnOjE6IPm3fyev3_zCvaP6ni0CHT_n6j2yqtZGa5OL51v9r69Y_TNambRLL2M_jcIhz676LtCSEnUNqP10fT3n5ZZLXs96rbGWLjcQn4f2X-Aal8HQDmFDwdBw1l7Ct23HTI5ioTzbzAmITqOfRF4BC1" alt="Colección de pines exclusivos Storebass" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent pointer-events-none" />
        </div>
        <div className="lg:hidden relative h-56 overflow-hidden rounded mt-4 mb-2">
          <img className="w-full h-full object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsoGEdLwdIfU8C8r82eDfDK4gRyfVifaGNw_k1OokVS_mXb0jkstPOCmc-VMnBPJI5uhqDuEUM9mrlu6evPfO34SHOtTzifziAY_BndlWRrMfm1RzYQmt2wnOjE6IPm3fyev3_zCvaP6ni0CHT_n6j2yqtZGa5OL51v9r69Y_TNambRLL2M_jcIhz676LtCSEnUNqP10fT3n5ZZLXs96rbGWLjcQn4f2X-Aal8HQDmFDwdBw1l7Ct23HTI5ioTzbzAmITqOfRF4BC1" alt="Colección de pines exclusivos Storebass" />
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-10 grid grid-cols-2 md:grid-cols-4 gap-gutter text-center border-t border-outline-variant pt-8 relative z-10">
        {[
          { icon: 'local_shipping', label: 'Envíos a todo Colombia' },
          { icon: 'verified', label: 'Productos exclusivos' },
          { icon: 'lock', label: 'Pagos 100% seguros' },
          { icon: 'support_agent', label: 'Atención personalizada' },
        ].map((item) => (
          <div key={item.icon} className="flex flex-col items-center gap-2 group">
            <Icon name={item.icon} className="text-primary text-4xl group-hover:scale-110 transition-transform" />
            <span className="text-white font-title-md text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function CategoriesSection() {
  const categories = [
    {
      id: 'category-card-pins',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ACkJ0L4YbPh_IH1-BHwH0G4o0uyxi-ivg6RKSOV6E5fIBe-v2Z-UKFL3RSZJuFsgKrDnPqweXtPnZdi-gFqUUcxwiwc_FxSpDR4JTLf5G6wrobEIYONrzxoHnB-Jj7tfN4kTnbnuKsKqPqkjmKrT2hdCKmKVcItF3vAdj8Xmkhc3E6gc3_xrP_3K7vFanTdmowVBd4ncIlAq8_fqIpypDCKTl8zkEwYeCD-WLB1Tj0MplA2XZQJsznrlZhf8fowXBk_TWmwUZP9p',
      tag: '+200 diseños',
      title: 'PINES',
    },
    {
      id: 'category-card-keychains',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5HTo0AC4YVdngfg-hSkkuNCDrDpMBCbedePGwwD5qZN2mz8MAyGRizn9dB3OsJWe2oW5u8ZqGH7C9YENeP6GEyre8VUzlzIOjHSqyGPlp-OpifcUZ53AhhH0nEQSdQxqQQbgiOI3GVALVcK6QksYdKAQXCKZQPApVnLInQlNdsHRj_AR9lq1Ew50crn55HOBcvj4Zh_W9ZHc9SgwR2Q2a0-xBiZZGAhkqkRlHp-DCdVSx2be_jxsiDrntXMPgvXgMGmw9FVnESJYd',
      tag: '+50 diseños',
      title: 'LLAVEROS',
    },
    {
      id: 'category-card-caps',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNHwQ-VabZ8Sb2byLzolfJP9PB8dVOttZQPqTB3xbSR94V-Q9cFrFqDoXyPeNZ2wNe88TzxsF9Tm7x9x2OF63VWIIRt9N5AHtck7290cPyHImVeAUHgNpAu_VVI8BabEXxA3gIhjpueB1PUqJTlhbYSD92nzBA2_MXMWWu83Nm82RXGtVBx2q7k3q6URVMLDaQQGCaXF3HqhjadGsfnXVtDu8scHA6wrDQ9zP3r7NtcUOK7DdO_i7gZYK1U9HKhlW-rd_AujJeG5vc',
      tag: 'Nuevos estilos',
      title: 'GORRAS',
    },
  ]

  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg mb-12 uppercase border-l-4 border-primary pl-6 text-white">CATEGORÍAS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {categories.map((cat) => (
          <a key={cat.id} id={cat.id} className="group relative h-[400px] overflow-hidden rounded border border-card-border bg-elevated-gray" href="#">
            <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.src} alt={cat.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex flex-col justify-end p-8">
              <span className="bg-primary text-on-primary px-3 py-1 text-label-sm font-label-sm rounded-sm mb-2 w-fit">{cat.tag}</span>
              <div className="flex justify-between items-center">
                <h3 className="font-headline-lg text-3xl uppercase text-white">{cat.title}</h3>
                <Icon name="arrow_forward" className="border border-primary rounded-full p-2 text-primary group-hover:bg-primary group-hover:text-on-primary transition-all" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function PromotionBanner() {
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop my-section-gap">
      <div className="bg-primary relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 border border-primary shadow-[0_0_40px_rgba(241,241,50,0.15)] group rounded">
        <div className="absolute inset-0 topographic-bg pointer-events-none" />
        <div className="z-10 text-on-primary text-center md:text-left relative">
          <span className="font-label-sm text-label-sm tracking-widest uppercase mb-2 block opacity-80">PROMOCIÓN DEL MES</span>
          <h2 className="font-display-xl text-5xl md:text-7xl mb-2">30% OFF</h2>
          <p className="font-title-md text-title-md uppercase">en pines seleccionados</p>
        </div>
        <div className="relative h-48 w-full md:w-1/3 flex justify-center items-center my-8 md:my-0 z-10">
          <img className="h-full object-contain rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD93Pk7otcprfu4ILthCJFY3Kz31JlTxmgE3ywXXuK35cClspzFVSWXmsvoe4-0e7g95qel9AjCAdvAhLDBz2t8eeozcIBuDYbwO-NLwyY5PDevd8ogt93D3RyxHBIi3zNo4usujHTOjE1YUjhJPEg6_w7oEA2_NrtpEw1XRz7-k6VhvIvjbjy71M4IQH6H3akG6aNRAlUHINExPxIGDU5KGd_kHEkcaXagulUZKjThVtaEZMYJlAuSdbRpBIflbtcJqurlPgCA1CSf" alt="Promoción 30% OFF" />
        </div>
        <div className="z-10 relative">
          <button id="btn-promo-offer" className="bg-surface text-white px-10 py-4 font-headline-lg text-2xl uppercase hover:bg-surface-bright transition-colors flex items-center gap-3 rounded">
            VER OFERTA
            <Icon name="arrow_forward" />
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div id={product.id} className="relative bg-elevated-gray border border-card-border overflow-hidden group rounded h-80">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={product.img} alt={product.name} />
      {product.tag && (
        <span className={`absolute top-2 left-2 px-2 py-0.5 text-label-sm font-semibold rounded-sm z-10 ${product.tag === 'Oferta' ? 'bg-primary text-on-primary' : 'bg-white text-black'}`}>
          {product.tag}
        </span>
      )}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black/70 backdrop-blur-sm flex flex-col justify-center px-4 py-2 border-t border-card-border/30 z-10 transition-colors duration-300 group-hover:bg-black/80">
        <h3 className="font-title-md text-sm text-white uppercase mb-0.5 truncate">{product.name}</h3>
        <p className="font-headline-lg text-base text-primary">${product.price.toLocaleString('es-CO')}</p>
      </div>
      <button
        onClick={() => onAddToCart(product)}
        className="absolute bottom-2 right-2 w-9 h-9 bg-primary text-on-primary font-bold flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-sm hover:brightness-110 active:scale-95 z-20"
      >
        <Icon name="add" className="text-lg" />
      </button>
    </div>
  )
}

function FeaturedSection({ onAddToCart }) {
  return (
    <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-headline-lg text-headline-lg uppercase border-l-4 border-primary pl-6 text-white">DESTACADOS</h2>
        <a className="text-primary hover:underline font-title-md uppercase tracking-tight" href="#">Ver todo</a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

function WhyBuySection() {
  const items = [
    { icon: 'local_shipping', title: 'Envíos a todo Colombia', desc: 'Entrega rápida y segura en todas las ciudades principales.' },
    { icon: 'verified', title: 'Productos exclusivos', desc: 'Diseños limitados que no encontrarás en ningún otro lugar.' },
    { icon: 'lock', title: 'Pagos 100% seguros', desc: 'Plataforma encriptada para proteger todas tus transacciones.' },
    { icon: 'support_agent', title: 'Atención personalizada', desc: 'Estamos para ayudarte en cada paso de tu compra.' },
  ]

  return (
    <section className="bg-surface-container-lowest py-24 topographic-bg border-t border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h2 className="font-headline-lg text-headline-lg mb-16 uppercase tracking-tight text-white">¿POR QUÉ COMPRAR EN STOREBASS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {items.map((item) => (
            <div key={item.icon} className="flex flex-col items-center gap-4">
              <div className="bg-surface-container-high border border-primary/30 p-6 rounded-lg">
                <Icon name={item.icon} className="text-primary text-5xl" />
              </div>
              <h4 className="font-title-md text-white">{item.title}</h4>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FooterSection() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant topographic-bg relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto relative z-10">
        <div className="col-span-1 md:col-span-1">
          <h3 className="font-headline-lg text-headline-lg text-primary uppercase mb-6">Storebass</h3>
          <p className="text-white/70 text-sm mb-6">Elevando el estilo urbano desde 2024. Los mejores accesorios para quienes no temen destacar.</p>
          <div className="flex gap-4">
            <a id="footer-social-web" className="text-white hover:text-primary transition-all p-1" href="#"><Icon name="public" /></a>
            <a id="footer-social-share" className="text-white hover:text-primary transition-all p-1" href="#"><Icon name="share" /></a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-title-md text-white uppercase mb-4">Colecciones</h4>
          <a id="footer-link-pins" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Pines</a>
          <a id="footer-link-keychains" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Llaveros</a>
          <a id="footer-link-caps" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Gorras</a>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-title-md text-white uppercase mb-4">Soporte</h4>
          <a id="footer-link-contact" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Contacto</a>
          <a id="footer-link-terms" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Términos y Condiciones</a>
          <a id="footer-link-faq" className="text-white/70 font-label-sm text-label-sm py-3 block hover:text-primary hover:translate-x-1 transition-all duration-200" href="#">Preguntas Frecuentes</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-title-md text-white uppercase mb-2">Contacto</h4>
          <div className="flex items-center gap-3 text-white/70">
            <Icon name="phone" className="text-primary" />
            <span className="text-sm">305 3572974</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Icon name="alternate_email" className="text-primary" />
            <span className="text-sm">@storebass_col</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <Icon name="location_on" className="text-primary" />
            <span className="text-sm">Cra. 16 #10-56</span>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center text-white/70 text-sm relative z-10">
        <p>&copy; 2024 Storebass. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a id="footer-link-privacy" className="hover:text-primary transition-colors" href="#">Privacidad</a>
          <a id="footer-link-shipping" className="hover:text-primary transition-colors" href="#">Envíos</a>
        </div>
      </div>
    </footer>
  )
}

function CartDrawer({ cart, isOpen, setIsOpen, onRemove, onUpdateQuantity, onCheckout, formatPrice }) {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div
        id="cart-backdrop"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div
        id="cart-drawer"
        className={`fixed right-0 top-0 bottom-0 h-full w-full sm:w-[450px] z-50 bg-elevated-gray border-l border-modal-border flex flex-col transition-transform duration-300 ease-out shadow-[0_0_50px_rgba(0,0,0,0.8)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-card-border/50">
          <h2 className="font-headline-lg text-2xl uppercase tracking-wider text-white">Carrito de Compras</h2>
          <button id="btn-cart-close" onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors flex items-center p-1 rounded hover:bg-surface-bright">
            <Icon name="close" className="text-2xl" />
          </button>
        </div>

        <div id="cart-items-container" className="flex-1 overflow-y-auto p-6 space-y-4">
          {totalCount === 0 ? (
            <div id="cart-empty-message" className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <Icon name="shopping_bag" className="text-6xl text-secondary opacity-50" />
              <p className="font-title-md text-white uppercase">Tu carrito está vacío</p>
              <p className="text-white/60 text-sm max-w-xs">¡Agrega pines, llaveros o gorras para darle estilo a tu outfit!</p>
              <button id="btn-cart-empty-catalog" onClick={() => setIsOpen(false)} className="mt-4 bg-primary text-on-primary px-6 py-3 font-headline-lg text-lg uppercase rounded hover:brightness-110 transition-all">
                Ver Catálogo
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item-row flex items-center gap-4 bg-[#1f2022]/80 p-3 border border-card-border/30 rounded">
                <img src={item.img} className="w-16 h-16 object-cover rounded border border-card-border/40" alt={item.name} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-title-md text-sm text-white uppercase truncate">{item.name}</h4>
                  <p className="font-headline-lg text-primary text-sm">{formatPrice(item.price)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-6 h-6 bg-surface-bright border border-card-border/50 text-white rounded flex items-center justify-center hover:text-primary transition-colors text-xs font-bold">-</button>
                    <span className="text-xs font-semibold text-white px-2 select-none">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-6 h-6 bg-surface-bright border border-card-border/50 text-white rounded flex items-center justify-center hover:text-primary transition-colors text-xs font-bold">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-white/60 hover:text-error transition-colors p-1" title="Eliminar">
                  <Icon name="delete" className="text-lg" />
                </button>
              </div>
            ))
          )}
        </div>

        {totalCount > 0 && (
          <div id="cart-footer" className="p-6 border-t border-card-border/50 bg-surface-container-low/50 space-y-4">
            <div className="flex justify-between items-center text-white font-title-md text-lg">
              <span>Total:</span>
              <span id="cart-total" className="text-primary font-headline-lg text-2xl">{formatPrice(totalPrice)}</span>
            </div>
            <p className="text-xs text-white/50">* Envíos a todo Colombia. El costo de envío se calcula al pagar.</p>
            <button id="btn-cart-checkout" onClick={onCheckout} className="w-full bg-primary text-on-primary py-4 font-headline-lg text-xl uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 rounded">
              Proceder al pago
              <Icon name="arrow_forward" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}

function InfographicSection() {
  const stats = [
    { value: '200+', label: 'Diseños exclusivos', icon: 'palette' },
    { value: '5.000+', label: 'Clientes satisfechos', icon: 'people' },
    { value: '24/7', label: 'Atención al cliente', icon: 'support_agent' },
    { value: '100%', label: 'Pagos seguros', icon: 'verified' },
  ]

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div
        className="rounded-xl border border-card-border overflow-hidden"
        style={{ backgroundColor: '#121315' }}
      >
        <div className="p-8 md:p-12 text-center">
          <span
            className="inline-block px-4 py-1 text-sm font-bold uppercase tracking-widest mb-4 rounded"
            style={{ backgroundColor: '#D4D400', color: '#121315' }}
          >
            Storebass en cifras
          </span>
          <h2
            className="font-headline-lg text-3xl md:text-4xl uppercase mb-4"
            style={{ color: '#D4D400' }}
          >
            Nuestro impacto
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            Más que una tienda, una comunidad que crece cada día.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.icon}
                className="flex flex-col items-center gap-3 p-6 rounded-lg"
                style={{ border: '1px solid #4C4C4C', backgroundColor: 'rgba(212, 212, 0, 0.05)' }}
              >
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ color: '#D4D400' }}
                >
                  {stat.icon}
                </span>
                <span
                  className="font-headline-lg text-3xl md:text-4xl"
                  style={{ color: '#D4D400' }}
                >
                  {stat.value}
                </span>
                <span className="text-white/80 text-sm font-title-md uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const { cart, isOpen, setIsOpen, totalCount, addToCart, removeFromCart, updateQuantity, formatPrice } = useCart()

  const scrollToFeatured = useCallback(() => {
    const el = document.getElementById('featured-section')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handleCheckout = useCallback(() => {
    alert('¡Gracias por tu compra! Procediendo a la pasarela de pagos segura...')
  }, [])

  return (
    <div className="bg-background text-white font-body-base antialiased min-h-screen">
      <Navbar totalCount={totalCount} onCartToggle={() => setIsOpen(true)} />

      <main>
        <HeroSection />
        <CategoriesSection />
        <PromotionBanner />
        <div id="featured-section">
          <FeaturedSection onAddToCart={addToCart} />
        </div>
        <InfographicSection />
        <WhyBuySection />
      </main>

      <FooterSection />

      <CartDrawer
        cart={cart}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
        formatPrice={formatPrice}
      />
    </div>
  )
}
