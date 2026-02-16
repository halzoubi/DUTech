
export interface MajorInfo {
  name: string;
  tagline: string;
  focus: string;
  coreClasses: string[];
  careers: string[];
  skills: string[];
  url: string;
  bulletinUrl: string;
}

export interface ComparisonData {
  cs: MajorInfo;
  informatics: MajorInfo;
  ds: MajorInfo;
  cis: MajorInfo;
}
