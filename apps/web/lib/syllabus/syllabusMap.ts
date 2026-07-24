import { ibpsClerkSyllabus } from '../../data/syllabus/ibps-clerk';
import { ibpsPoSyllabus } from '../../data/syllabus/ibps-po';
import { rrbGroupDSyllabus } from '../../data/syllabus/rrb-group-d';
import { rrbNtpcSyllabus } from '../../data/syllabus/rrb-ntpc';
import { sbiClerkSyllabus } from '../../data/syllabus/sbi-clerk';
import { sscCglSyllabus } from '../../data/syllabus/ssc-cgl';
import { sscChslSyllabus } from '../../data/syllabus/ssc-chsl';
import { sscGdConstableSyllabus } from '../../data/syllabus/ssc-gd-constable';
import { sscMtsSyllabus } from '../../data/syllabus/ssc-mts';
import { upscCseSyllabus } from '../../data/syllabus/upsc-cse';
import type { SyllabusGuide } from '../../types/syllabus';

export const syllabusMap = {
  [sscCglSyllabus.slug]: sscCglSyllabus,
  [sscChslSyllabus.slug]: sscChslSyllabus,
  [sscGdConstableSyllabus.slug]: sscGdConstableSyllabus,
  'ssc-gd': sscGdConstableSyllabus,
  [sscMtsSyllabus.slug]: sscMtsSyllabus,
  [rrbNtpcSyllabus.slug]: rrbNtpcSyllabus,
  [rrbGroupDSyllabus.slug]: rrbGroupDSyllabus,
  [upscCseSyllabus.slug]: upscCseSyllabus,
  'upsc-civil-services': upscCseSyllabus,
  [ibpsPoSyllabus.slug]: ibpsPoSyllabus,
  [ibpsClerkSyllabus.slug]: ibpsClerkSyllabus,
  [sbiClerkSyllabus.slug]: sbiClerkSyllabus,
} satisfies Record<string, SyllabusGuide>;

export type SyllabusSlug = Extract<keyof typeof syllabusMap, string>;
