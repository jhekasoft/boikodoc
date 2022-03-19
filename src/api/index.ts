import fs from "fs";
import { TimelineItem, Review } from './types';

export function fetchTimeline(): TimelineItem[] {
  const rawData = fs.readFileSync("./data/timeline/timeline.json");
  const data: TimelineItem[] = JSON.parse(rawData.toString('utf-8'));
  return data;
}

export function fetchReviews(): Review[] {
  const rawData = fs.readFileSync("./data/reviews/reviews.json");
  const data: Review[] = JSON.parse(rawData.toString('utf-8'));
  return data;
}
