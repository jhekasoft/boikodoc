export interface TimelineItem {
  title_uk: string;
  title_ru: string;
  desc_uk: string;
  desc_ru: string;
}

export interface Review {
  name_uk: string;
  name_ru: string;
  text_uk: string;
  text_ru: string;
  rating: number;
}

export interface Symptom {
  title_uk: string;
  title_ru: string;
}

export interface Certificate {
  img: string;
  img2x: string;
  img_full: string;
  title_uk: string;
  title_ru: string;
}

export interface Service {
  id: number;
  slug: string;
  title_uk: string;
  title_ru: string;
  desc_uk: string[];
  desc_ru: string[];
  img: string;
  img2x: string;
  img_full: string;
  keywords_uk: string;
  keywords_ru: string;
  saleText_uk: string;
  saleText_ru: string;
}