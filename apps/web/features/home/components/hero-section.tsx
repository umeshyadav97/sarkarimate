'use client';
import { Badge } from '@repo/ui';
import { popularSearches } from '@/features/home/constants/homepage-data';
import { GovernmentBuildingVisual } from '@/features/home/components/government-building-visual';
import { SearchInput } from '@/components/SearchInput';
import { useState } from 'react';

export function HeroSection() {
  const [search, setSearch] = useState('');
  return (
    <section className="mx-auto grid max-w-full items-center gap-8 px-4 py-4 sm:px-6 md:py-6 lg:py-9 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <div className="min-w-0">
        <h1 className="max-w-xl text-2xl font-bold lg:leading-13 md:leading-11 leading-8 text-[#111827] md:text-4xl lg:text-5xl">
          Find Every{' '}
          <span className="text-[#1D4ED8]">
            <br />
            Government Job
          </span>
          <br />
          in One Place
        </h1>
        <p className="sm:mt-3 mt-1 max-w-lg sm:text-base text-sm font-medium lg:leading-7 md:leading-6 leading-5 text-slate-600">
          Latest job notifications, results, admit cards, answer keys, syllabus and more. All
          official, all in one place.
        </p>

        <div className="flex flex-1 items-center gap-2 py-2 mt-2">
          <SearchInput
            placeholder="Search jobs, exams, departments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onSearch={() => console.log(search)}
          />
        </div>
      </div>
      <div className="hidden min-w-0 md:block">
        <GovernmentBuildingVisual />
      </div>
      <div className="flex w-full flex-wrap items-center gap-3 md:col-span-2">
        <span className="mr-1 text-sm font-bold text-[#111827]">Popular Searches:</span>
        {popularSearches.map((search) => (
          <Badge key={search} className="bg-blue-50 text-sm font-bold text-[#1D4ED8]">
            {search}
          </Badge>
        ))}
      </div>
    </section>
  );
}
