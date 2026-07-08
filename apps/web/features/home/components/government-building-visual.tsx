import Image from 'next/image';

export function GovernmentBuildingVisual() {
  return (
    <div className="relative min-h-[260px] overflow-hidden md:min-h-[320px]">
      <Image
        src="/assets/images/hero.png"
        alt="Government building with the Indian flag, representing official job updates"
        fill
        priority
        className="object-cover object-center"
        sizes="(min-width: 1024px) 58vw, (min-width: 768px) 52vw, 100vw"
      />
    </div>
  );
}
