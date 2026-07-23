import { ActionCard as SidebarActionCard } from '@/components/job-detail/Sidebar/ActionCard';
import { NeedHelpCard } from '@/components/job-detail/Sidebar/NeedHelpCard';
import { LatestJobsCard } from '@/components/job-detail/Sidebar/LatestJobsCard';
import { NewsletterCard } from '@/components/job-detail/Sidebar/NewsletterCard';
import { RelatedContentCard } from '@/components/job-detail/Sidebar/RelatedContentCard';
import { ShareCard } from '@/components/job-detail/Sidebar/ShareCard';
import { TimelineCard } from '@/components/job-detail/Sidebar/TimelineCard';
import type {
  DetailAction,
  DetailPageConfig,
  DetailPageData,
  DetailSidebarWidgetId,
} from '@/components/job-detail/types';

interface DetailSidebarProps {
  config: DetailPageConfig;
  data: DetailPageData;
  actions: DetailAction[];
}

export function DetailSidebar({ config, data, actions }: DetailSidebarProps) {
  return (
    <aside className="grid content-start gap-4">
      {config.sidebarWidgets.flatMap((widget) => {
        const sidebarWidget = renderSidebarWidget(widget, config, data, actions);

        if (widget === 'share') {
          return [sidebarWidget, <LatestJobsCard key="latest-jobs" />];
        }

        return [sidebarWidget];
      })}
    </aside>
  );
}

function renderSidebarWidget(
  widget: DetailSidebarWidgetId,
  config: DetailPageConfig,
  data: DetailPageData,
  actions: DetailAction[],
) {
  switch (widget) {
    case 'actions':
      return (
        <SidebarActionCard
          key={widget}
          title={config.actionTitle}
          description={config.actionDescription}
          actions={actions}
        />
      );
    case 'timeline':
      return <TimelineCard key={widget} title={config.timelineTitle} items={data.timeline} />;
    case 'related':
      return data.relatedContent[0] ? (
        <RelatedContentCard key={widget} content={data.relatedContent[0]} />
      ) : null;
    case 'share':
      return (
        <ShareCard
          key={widget}
          heading={config.shareTitle}
          title={data.title}
          description={data.seo.description}
          canonicalPath={data.seo.canonical}
        />
      );
    case 'newsletter':
      return (
        <NewsletterCard
          key={widget}
          title={config.newsletterTitle}
          description={config.newsletterDescription}
          buttonText={config.newsletterButtonText}
        />
      );
    case 'help':
      return (
        <NeedHelpCard
          key={widget}
          title={config.helpTitle}
          description={config.helpDescription}
          href={config.helpHref}
          buttonText={config.helpButtonText}
        />
      );
    default:
      return null;
  }
}
