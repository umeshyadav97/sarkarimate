import { Building2, CalendarClock, Clock3, MapPin } from 'lucide-react';

interface JobMetaProps {
  organization: string;
  location: string;
  postedDate: string;
  updatedDate: string;
}

function formatDate(value?: string) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function JobMeta({ organization, location, postedDate, updatedDate }: JobMetaProps) {
  const postedDateLabel = formatDate(postedDate);
  const updatedDateLabel = formatDate(updatedDate);
  const items = [
    { label: organization, icon: Building2 },
    { label: location, icon: MapPin },
    postedDateLabel ? { label: `Posted On: ${postedDateLabel}`, icon: Clock3 } : null,
    updatedDateLabel ? { label: `Updated On: ${updatedDateLabel}`, icon: CalendarClock } : null,
  ].filter((item): item is { label: string; icon: typeof Building2 } => Boolean(item));

  return (
    <dl className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-slate-500" aria-hidden="true" />
            <dt className="sr-only">{item.label}</dt>
            <dd>{item.label}</dd>
          </div>
        );
      })}
    </dl>
  );
}
