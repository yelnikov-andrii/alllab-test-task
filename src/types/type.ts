interface Location {
  lat: number;
  long: number;
}

export interface Job {
  address: string;
  id: string;
  benefits: string[];
  description: string;
  email: string;
  employment_type: string[];
  name: string;
  phone: string;
  pictures: string[];
  salary: string;
  title: string;
  location: Location;
}