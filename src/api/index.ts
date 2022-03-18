import fs from "fs";
import { TimelineItem } from './types';

export function fetchTimeline(): TimelineItem[] {
  const rawData = fs.readFileSync("./data/timeline/timeline.json");
  const data: TimelineItem[] = JSON.parse(rawData.toString('utf-8'));
  return data;
}
