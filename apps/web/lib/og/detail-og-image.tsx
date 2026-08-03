import { ImageResponse } from 'next/og';

export const detailOgImageSize = {
  width: 1200,
  height: 630,
};

interface DetailOgImageOptions {
  title: string;
  description?: string;
  label: string;
  organization?: string;
  facts?: string[];
}

export function createDetailOgImage({
  title,
  description,
  label,
  organization,
  facts = [],
}: DetailOgImageOptions) {
  const visibleFacts = facts.filter(Boolean).slice(0, 3);

  return new ImageResponse(
    <div
      style={{
        background: '#f8fafc',
        color: '#111827',
        display: 'flex',
        height: '100%',
        padding: 48,
        width: '100%',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          border: '3px solid #dbeafe',
          borderRadius: 34,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '46px 54px',
          width: '100%',
        }}
      >
        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ alignItems: 'center', display: 'flex', gap: 18 }}>
            <div
              style={{
                alignItems: 'center',
                background: '#1d4ed8',
                borderRadius: 22,
                color: '#ffffff',
                display: 'flex',
                fontSize: 36,
                fontWeight: 900,
                height: 76,
                justifyContent: 'center',
                width: 76,
              }}
            >
              SM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div style={{ color: '#dc2626', display: 'flex', fontSize: 42, fontWeight: 900 }}>
                <span>Sarkari</span>
                <span style={{ color: '#1d4ed8' }}>Mate</span>
              </div>
              <div style={{ color: '#64748b', fontSize: 20, fontWeight: 700 }}>
                Sahi Jaankari, Sahi Samay Par
              </div>
            </div>
          </div>

          <div
            style={{
              background: '#eff6ff',
              border: '2px solid #bfdbfe',
              borderRadius: 999,
              color: '#1d4ed8',
              display: 'flex',
              fontSize: 24,
              fontWeight: 900,
              padding: '14px 22px',
            }}
          >
            {label}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {organization ? (
            <div style={{ color: '#475569', display: 'flex', fontSize: 27, fontWeight: 800 }}>
              {organization}
            </div>
          ) : null}

          <div
            style={{
              color: '#111827',
              display: 'flex',
              fontSize: title.length > 74 ? 50 : 58,
              fontWeight: 900,
              lineHeight: 1.08,
            }}
          >
            {truncateText(title, 112)}
          </div>

          {description ? (
            <div
              style={{
                color: '#475569',
                display: 'flex',
                fontSize: 27,
                lineHeight: 1.35,
                maxWidth: 980,
              }}
            >
              {truncateText(description, 165)}
            </div>
          ) : null}
        </div>

        <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 14 }}>
            {(visibleFacts.length ? visibleFacts : ['Official updates', 'Exam details']).map(
              (fact) => (
                <div
                  key={fact}
                  style={{
                    background: '#f1f5f9',
                    borderRadius: 999,
                    color: '#334155',
                    display: 'flex',
                    fontSize: 22,
                    fontWeight: 800,
                    padding: '12px 18px',
                  }}
                >
                  {truncateText(fact, 28)}
                </div>
              ),
            )}
          </div>
          <div style={{ color: '#1d4ed8', display: 'flex', fontSize: 24, fontWeight: 900 }}>
            sarkarimate.com
          </div>
        </div>
      </div>
    </div>,
    detailOgImageSize,
  );
}

function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trim()}...`;
}
