import { Homepage } from '@/features/home/components/homepage';
import { getHomePageData } from '@/services/home.service';

export default async function HomePage() {
  const data = await getHomePageData();

  return <Homepage initialData={data} />;
}
