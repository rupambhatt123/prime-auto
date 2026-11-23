export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

export interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  icon: "technicians" | "transparency" | "projects" | "awards";
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: "brake" | "ignition" | "oil" | "engine" | "exhaust" | "ac";
}

export interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface BrandItem {
  name: string;
  logo: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  carModel: string;
  preferredDate: string;
  preferredTime: string;
  serviceDetails: string;
}