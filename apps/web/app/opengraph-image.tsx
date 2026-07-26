import { ImageResponse } from 'next/og';

export const alt = 'SarkariMate - Latest Government Jobs, Results and Admit Cards';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: 'center',
        background: '#eff6ff',
        color: '#111827',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          border: '4px solid #dbeafe',
          borderRadius: 40,
          display: 'flex',
          flexDirection: 'column',
          gap: 34,
          height: 510,
          justifyContent: 'center',
          padding: '58px 70px',
          width: 1040,
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: 22,
          }}
        >
          <div
            style={{
              alignItems: 'center',
              background: '#1d4ed8',
              borderRadius: 28,
              color: '#ffffff',
              display: 'flex',
              fontSize: 48,
              fontWeight: 900,
              height: 96,
              justifyContent: 'center',
              width: 96,
            }}
          >
            SM
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div
              style={{
                color: '#dc2626',
                display: 'flex',
                fontSize: 56,
                fontWeight: 900,
              }}
            >
              <span>Sarkari</span>
              <span style={{ color: '#1d4ed8' }}>Mate</span>
            </div>
            <div style={{ color: '#64748b', fontSize: 25, fontWeight: 700 }}>
              Sahi Jaankari, Sahi Samay Par
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              color: '#111827',
              fontSize: 52,
              fontWeight: 900,
              lineHeight: 1.08,
            }}
          >
            Latest Government Jobs, Admit Cards, Results and Exam Updates
          </div>
          <div style={{ color: '#475569', fontSize: 28, lineHeight: 1.35 }}>
            Clean, official-link-first updates for students and job seekers across India.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['Latest Jobs', 'Admit Cards', 'Results', 'Syllabus'].map((label) => (
            <div
              key={label}
              style={{
                background: '#dbeafe',
                borderRadius: 999,
                color: '#1d4ed8',
                fontSize: 24,
                fontWeight: 800,
                padding: '14px 24px',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
