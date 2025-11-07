'use client';
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@/components/ui/shadcn-io/announcement';
import { ArrowUpRightIcon } from 'lucide-react';
const MarqueeAnouncement = () => (
  <Announcement>
    <AnnouncementTag>Bugsmirror</AnnouncementTag>
    <AnnouncementTitle>
      We take pride in being the worlds #1 Bug Hunters! Our relentless pursuit ensures we are consistently ranked a
      <ArrowUpRightIcon className="shrink-0 text-muted-foreground" size={16} />
    </AnnouncementTitle>mong the best in bug hunting.
  </Announcement>
);
export default MarqueeAnouncement;
