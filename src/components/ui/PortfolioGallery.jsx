import { motion } from "framer-motion"
import { useState } from "react"

const defaultImages = [
  { src: "/imagenes-map/1.png", alt: "Imagen 1" },
  { src: "/imagenes-map/2.png", alt: "Imagen 2" },
  { src: "/imagenes-map/3.png", alt: "Imagen 3" },
  { src: "/imagenes-map/4.png", alt: "Imagen 4" },
  { src: "/imagenes-map/5.png", alt: "Imagen 5" },
  { src: "/imagenes-map/6.png", alt: "Imagen 6" },
  { src: "/imagenes-map/7.jpeg", alt: "Imagen 7" },
  { src: "/imagenes-map/8.jpeg", alt: "Imagen 8" },
  { src: "/imagenes-map/9.jpeg", alt: "Imagen 9" },
  { src: "/imagenes-map/10.jpeg", alt: "Imagen 10" },
]

export function PortfolioGallery({ images: customImages, onImageClick }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const images = customImages || defaultImages

  return (
    <div className="relative overflow-hidden pb-8">
      {/* Desktop 3D overlapping layout */}
      <div className="hidden md:block relative overflow-hidden min-h-[400px]">
        <div className="flex -space-x-72 md:-space-x-80 pb-8 pt-40 items-end justify-center">
          {images.map((image, index) => {
            const totalImages = images.length
            const middle = Math.floor(totalImages / 2)
            const distanceFromMiddle = Math.abs(index - middle)
            const staggerOffset = 120 - distanceFromMiddle * 20
            const zIndex = totalImages - index
            const isHovered = hoveredIndex === index
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
            const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

            return (
              <motion.div
                key={index}
                className="cursor-pointer flex-shrink-0"
                style={{ zIndex }}
                initial={{
                  transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                  opacity: 0,
                }}
                animate={{
                  transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => onImageClick?.(index)}
              >
                <div
                  className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  style={{
                    boxShadow: `
                      rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                      rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                      rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                      rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                    `,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-left-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile marquee */}
      <div className="block md:hidden relative pb-8">
        <div className="flex overflow-hidden p-2 gap-4">
          {Array(4).fill(0).map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around gap-4 animate-marquee flex-row"
            >
              {images.map((image, index) => (
                <div
                  key={`${i}-${index}`}
                  className="cursor-pointer flex-shrink-0"
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0, 0, 0, 0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0, 0, 0, 0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0, 0, 0, 0.25) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-left-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
