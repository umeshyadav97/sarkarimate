import { Building2, CalendarClock, Clock3, MapPin } from 'lucide-react';

interface JobMetaProps {
  organization: string;
  location: string;
  postedDate: string;
  updatedDate: string;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value));
}

export function JobMeta({ organization, location, postedDate, updatedDate }: JobMetaProps) {
  const items = [
    { label: organization, icon: Building2 },
    { label: location, icon: MapPin },
    { label: `Posted On: ${formatDate(postedDate)}`, icon: Clock3 },
    { label: `Updated On: ${formatDate(updatedDate)}`, icon: CalendarClock },
  ];

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
