export interface TimelineItem {
  year: number;
  desc: string[];
}

export interface DeveloperTimelineData {
  data: TimelineItem[];
}

export interface CvCommon {
  name: string;
  yearOfBirth: string;
  githubUrl: string;
  linkedInUrl: string;
  telegram: string;
  email: string;
}

export interface CvEducationItem {
  startYear: number;
  endYear: number;
  school: string;
  degree: string;
  fieldOfStudy: string;
  location: string;
  desc: string;
}

export interface CvExperienceItem {
  startYear: number;
  endYear: number;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  desc: string;
}

export interface CvPublicationItem {
  year: number;
  title: string;
  url: string;
  desc: string;
  imageUrl: string;
}

export interface CvSoftwareProjectItem {
  year: number;
  title: string;
  url: string;
  desc: string;
  imageUrl: string;
}

export interface CvData {
  data: {
    common: CvCommon;
    education: CvEducationItem[];
    experience: CvExperienceItem[];
    publications: CvPublicationItem[];
    softwareProjects: CvSoftwareProjectItem[];
  }
}
