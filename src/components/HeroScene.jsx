import { useMemo } from 'react'

const NODES = [
  { label: 'React', angle: -55, r: 150 },
  { label: 'System Design', angle: 18, r: 168 },
  { label: 'Backend', angle: 100, r: 150 },
  { label: "Sun'iy intellekt", angle: 190, r: 160 },
]

/**
 * Yengil SVG asosidagi "tizim xaritasi" - markazda frontend, atrofida
 * kengayish yo'nalishlari. 3D kutubxonalarsiz, lekin muhandislik
 * chizmasi hissini beradigan animatsiya.
 */
export default function HeroScene() {
  const points = useMemo(
    () =>
      NODES.map((n) => {
        const rad = (n.angle * Math.PI) / 180
        return {
          ...n,
          x: 220 + Math.cos(rad) * n.r,
          y: 220 + Math.sin(rad) * n.r,
        }
      }),
    []
  )

  return (
    <div className="hero-scene" aria-hidden="true">
      <svg viewBox="0 0 440 440" className="hero-scene__svg">
        {/* Tashqi o'lchov aylanalari - chizma libosi */}
        <circle cx="220" cy="220" r="200" className="hs-ring hs-ring--dashed" />
        <circle cx="220" cy="220" r="150" className="hs-ring" />

        {/* Burchak koordinata belgilari */}
        <path d="M20,20 L20,50 M20,20 L50,20" className="hs-corner" />
        <path d="M420,20 L420,50 M420,20 L390,20" className="hs-corner" />
        <path d="M20,420 L20,390 M20,420 L50,420" className="hs-corner" />
        <path d="M420,420 L420,390 M420,420 L390,420" className="hs-corner" />

        {/* Markaz va tugunlarni bog'lovchi chiziqlar */}
        {points.map((p) => (
          <line
            key={p.label}
            x1="220"
            y1="220"
            x2={p.x}
            y2={p.y}
            className="hs-link"
          />
        ))}

        {/* Markaziy tugun */}
        <circle cx="220" cy="220" r="34" className="hs-core" />
        <circle cx="220" cy="220" r="34" className="hs-core-pulse" />
        <text x="220" y="216" textAnchor="middle" className="hs-core-label">
          FE
        </text>
        <text x="220" y="232" textAnchor="middle" className="hs-core-sub">
          core
        </text>

        {/* Periferik tugunlar */}
        {points.map((p, i) => (
          <g key={p.label} className="hs-node" style={{ '--delay': `${i * 0.25}s` }}>
            <circle cx={p.x} cy={p.y} r="5" className="hs-node-dot" />
            <text
              x={p.x + (p.x > 220 ? 12 : -12)}
              y={p.y + 4}
              textAnchor={p.x > 220 ? 'start' : 'end'}
              className="hs-node-label"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
