import fs from "fs";
import { TimelineItem, Review, Symptom, Certificate, Service } from './types';

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

export function fetchSymptoms(): Symptom[] {
  const rawData = fs.readFileSync("./data/symptoms/symptoms.json");
  const data: Symptom[] = JSON.parse(rawData.toString('utf-8'));
  return data;
}

export function fetchCertificates(): Certificate[] {
  const rawData = fs.readFileSync("./data/certificates/certificates.json");
  const data: Certificate[] = JSON.parse(rawData.toString('utf-8'));
  return data;
}

export function fetchServices(): Service[] {
  const rawData = fs.readFileSync("./data/services/services.json");
  const data: Service[] = JSON.parse(rawData.toString('utf-8'));
  return data;
}
