export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  startDate: string;
  status: "Active" | "Onboarding" | "On Leave";
  dateOfBirth: string;
  address: string;
  avatar: string;
  manager: string;
  salary: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export const employees: Employee[] = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@hcmatrix.com",
    phone: "+1 (555) 123-4567",
    jobTitle: "Senior Software Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    startDate: "2022-03-15",
    status: "Active",
    dateOfBirth: "1990-06-20",
    address: "123 Main St, New York, NY 10001",
    avatar: "",
    manager: "Michael Chen",
    salary: "$145,000",
    emergencyContact: { name: "Tom Johnson", relationship: "Spouse", phone: "+1 (555) 234-5678" },
  },
  {
    id: "2",
    firstName: "Michael",
    lastName: "Chen",
    email: "michael.chen@hcmatrix.com",
    phone: "+1 (555) 234-5678",
    jobTitle: "Engineering Manager",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "2020-01-10",
    status: "Active",
    dateOfBirth: "1985-11-03",
    address: "456 Oak Ave, San Francisco, CA 94102",
    avatar: "",
    manager: "Lisa Wong",
    salary: "$185,000",
    emergencyContact: { name: "Amy Chen", relationship: "Spouse", phone: "+1 (555) 345-6789" },
  },
  {
    id: "3",
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.rodriguez@hcmatrix.com",
    phone: "+1 (555) 345-6789",
    jobTitle: "Product Designer",
    department: "Design",
    location: "Austin, TX",
    type: "Full-time",
    startDate: "2023-07-01",
    status: "Onboarding",
    dateOfBirth: "1993-02-14",
    address: "789 Elm Dr, Austin, TX 73301",
    avatar: "",
    manager: "David Park",
    salary: "$120,000",
    emergencyContact: { name: "Maria Rodriguez", relationship: "Mother", phone: "+1 (555) 456-7890" },
  },
  {
    id: "4",
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@hcmatrix.com",
    phone: "+1 (555) 456-7890",
    jobTitle: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Full-time",
    startDate: "2021-09-20",
    status: "Active",
    dateOfBirth: "1988-08-25",
    address: "321 Pine St, Chicago, IL 60601",
    avatar: "",
    manager: "Rachel Adams",
    salary: "$95,000",
    emergencyContact: { name: "Kate Wilson", relationship: "Sister", phone: "+1 (555) 567-8901" },
  },
  {
    id: "5",
    firstName: "Olivia",
    lastName: "Brown",
    email: "olivia.brown@hcmatrix.com",
    phone: "+1 (555) 567-8901",
    jobTitle: "HR Coordinator",
    department: "Human Resources",
    location: "New York, NY",
    type: "Part-time",
    startDate: "2023-01-15",
    status: "Active",
    dateOfBirth: "1995-12-10",
    address: "654 Maple Rd, New York, NY 10002",
    avatar: "",
    manager: "Lisa Wong",
    salary: "$65,000",
    emergencyContact: { name: "Robert Brown", relationship: "Father", phone: "+1 (555) 678-9012" },
  },
  {
    id: "6",
    firstName: "Daniel",
    lastName: "Kim",
    email: "daniel.kim@hcmatrix.com",
    phone: "+1 (555) 678-9012",
    jobTitle: "Data Analyst",
    department: "Analytics",
    location: "Seattle, WA",
    type: "Full-time",
    startDate: "2022-06-01",
    status: "On Leave",
    dateOfBirth: "1991-04-18",
    address: "987 Cedar Ln, Seattle, WA 98101",
    avatar: "",
    manager: "Michael Chen",
    salary: "$110,000",
    emergencyContact: { name: "Susan Kim", relationship: "Mother", phone: "+1 (555) 789-0123" },
  },
  {
    id: "7",
    firstName: "Jessica",
    lastName: "Taylor",
    email: "jessica.taylor@hcmatrix.com",
    phone: "+1 (555) 789-0123",
    jobTitle: "Account Executive",
    department: "Sales",
    location: "Boston, MA",
    type: "Full-time",
    startDate: "2021-03-10",
    status: "Active",
    dateOfBirth: "1989-07-22",
    address: "147 Birch Way, Boston, MA 02101",
    avatar: "",
    manager: "Rachel Adams",
    salary: "$105,000",
    emergencyContact: { name: "Mark Taylor", relationship: "Spouse", phone: "+1 (555) 890-1234" },
  },
  {
    id: "8",
    firstName: "Ryan",
    lastName: "Martinez",
    email: "ryan.martinez@hcmatrix.com",
    phone: "+1 (555) 890-1234",
    jobTitle: "DevOps Engineer",
    department: "Engineering",
    location: "Denver, CO",
    type: "Contract",
    startDate: "2023-09-01",
    status: "Active",
    dateOfBirth: "1992-01-30",
    address: "258 Spruce Ct, Denver, CO 80201",
    avatar: "",
    manager: "Michael Chen",
    salary: "$130,000",
    emergencyContact: { name: "Carlos Martinez", relationship: "Brother", phone: "+1 (555) 901-2345" },
  },
  {
    id: "9",
    firstName: "Amanda",
    lastName: "Lee",
    email: "amanda.lee@hcmatrix.com",
    phone: "+1 (555) 901-2345",
    jobTitle: "Finance Manager",
    department: "Finance",
    location: "New York, NY",
    type: "Full-time",
    startDate: "2019-11-05",
    status: "Active",
    dateOfBirth: "1986-09-12",
    address: "369 Walnut St, New York, NY 10003",
    avatar: "",
    manager: "Lisa Wong",
    salary: "$140,000",
    emergencyContact: { name: "David Lee", relationship: "Spouse", phone: "+1 (555) 012-3456" },
  },
  {
    id: "10",
    firstName: "Chris",
    lastName: "Patel",
    email: "chris.patel@hcmatrix.com",
    phone: "+1 (555) 012-3456",
    jobTitle: "UX Researcher",
    department: "Design",
    location: "San Francisco, CA",
    type: "Full-time",
    startDate: "2022-08-22",
    status: "Active",
    dateOfBirth: "1994-03-07",
    address: "741 Ash Blvd, San Francisco, CA 94103",
    avatar: "",
    manager: "David Park",
    salary: "$115,000",
    emergencyContact: { name: "Priya Patel", relationship: "Sister", phone: "+1 (555) 123-4568" },
  },
];

export const dashboardStats = {
  totalEmployees: 247,
  newHires: 8,
  upcomingEvents: 5,
  openPositions: 12,
};

export const attendanceData = {
  inOffice: 156,
  remote: 52,
  outOfOffice: 24,
  onLeave: 15,
  total: 247,
};

export const headcountData = [
  { month: "Jul", count: 210 },
  { month: "Aug", count: 218 },
  { month: "Sep", count: 225 },
  { month: "Oct", count: 230 },
  { month: "Nov", count: 237 },
  { month: "Dec", count: 241 },
  { month: "Jan", count: 247 },
];

export const departmentData = [
  { name: "Engineering", value: 78, color: "hsl(233, 90%, 64%)" },
  { name: "Design", value: 24, color: "hsl(262, 80%, 55%)" },
  { name: "Marketing", value: 32, color: "hsl(199, 89%, 48%)" },
  { name: "Sales", value: 45, color: "hsl(142, 71%, 45%)" },
  { name: "HR", value: 18, color: "hsl(38, 92%, 50%)" },
  { name: "Finance", value: 22, color: "hsl(0, 84%, 60%)" },
  { name: "Analytics", value: 28, color: "hsl(280, 65%, 60%)" },
];

export const actionItems = [
  { id: "1", title: "Review Q4 performance evaluations", priority: "high" as const, dueDate: "Today" },
  { id: "2", title: "Approve pending leave requests (3)", priority: "high" as const, dueDate: "Today" },
  { id: "3", title: "Schedule onboarding for new hires", priority: "medium" as const, dueDate: "Tomorrow" },
  { id: "4", title: "Update employee handbook section 4.2", priority: "low" as const, dueDate: "This week" },
  { id: "5", title: "Complete benefits enrollment audit", priority: "medium" as const, dueDate: "Jan 30" },
];

export const upcomingBirthdays = [
  { name: "Sarah Johnson", date: "Jan 25", avatar: "", initials: "SJ" },
  { name: "Chris Patel", date: "Jan 28", avatar: "", initials: "CP" },
  { name: "Emily Rodriguez", date: "Feb 14", avatar: "", initials: "ER" },
  { name: "Ryan Martinez", date: "Jan 30", avatar: "", initials: "RM" },
];

export const upcomingAnniversaries = [
  { name: "Amanda Lee", years: 5, date: "Feb 5", avatar: "", initials: "AL" },
  { name: "Jessica Taylor", years: 3, date: "Feb 10", avatar: "", initials: "JT" },
  { name: "Michael Chen", years: 4, date: "Feb 12", avatar: "", initials: "MC" },
];
