// SampleData.js

const candidates = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    phone: "555-1234",
    uploadedBy: "Prem",
    uploadedDate: "2023-10-01",
    vendorName: "TechRecruiters Inc.",
    techStack: "Angular, dotnet, Azure",
    position: "Senior Engineer",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@email.com",
    phone: "555-5678",
    uploadedBy: "Sudha",
    uploadedDate: "2023-10-02",
    vendorName: "TalentSearch Co.",
    techStack: "dotnet+react",
    position: "Software Engineer",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@email.com",
    phone: "555-8765",
    uploadedBy: "Prem",
    uploadedDate: "2023-10-03",
    vendorName: "CodeTalent Solutions",
    techStack: "React, dotnet, Azure",
    position: "Senior Engineer",
  },
  {
    id: 4,
    name: "Diana Martinez",
    email: "diana.martinez@email.com",
    phone: "555-4321",
    uploadedBy: "Hema",
    uploadedDate: "2023-10-04",
    vendorName: "TechHire Pro",
    techStack: "React, java, Azure",
    position: "Senior Engineer",
  },
  {
    id: 5,
    name: "Edward Davis",
    email: "edward.davis@email.com",
    phone: "555-9876",
    uploadedBy: "Sudha",
    uploadedDate: "2023-10-05",
    vendorName: "RecruitWise Solutions",
    techStack: "React, dotnet, Azure",
    position: "Senior Engineer",
  },
  {
    id: 6,
    name: "Fiona White",
    email: "fiona.white@email.com",
    phone: "555-8765",
    uploadedBy: "Vaishnavi",
    uploadedDate: "2023-10-06",
    vendorName: "CodeTalent Solutions",
    techStack: "React, dotnet, Azure",
    position: "Lead Engineer",
  },
  {
    id: 7,
    name: "George Wilson",
    email: "george.wilson@email.com",
    phone: "555-2345",
    uploadedBy: "Abi",
    uploadedDate: "2023-10-07",
    vendorName: "TechRecruiters Inc.",
    techStack: "Angular, TypeScript, RxJS",
    position: "Senior Engineer",
  },
  {
    id: 8,
    name: "Helen Adams",
    email: "helen.adams@email.com",
    phone: "555-6789",
    uploadedBy: "Hema",
    uploadedDate: "2023-10-08",
    vendorName: "TalentSearch Co.",
    techStack: "dotnet+react",
    position: "Software Engineer",
  },
  {
    id: 9,
    name: "Ian Turner",
    email: "ian.turner@email.com",
    phone: "555-3456",
    uploadedBy: "Hema",
    uploadedDate: "2023-10-09",
    vendorName: "RecruitWise Solutions",
    techStack: "React, java, Azure",
    position: "Senior Engineer",
  },
  {
    id: 10,
    name: "Jennifer Lee",
    email: "jennifer.lee@email.com",
    phone: "555-7890",
    uploadedBy: "Vaishnavi",
    uploadedDate: "2023-10-10",
    vendorName: "TechHire Pro",
    techStack: "Angular, dotnet, Azure",
    position: "Software Engineer",
  },
  {
    id: 11,
    name: "Kevin Baker",
    email: "kevin.baker@email.com",
    phone: "555-4567",
    uploadedBy: "Vaishnavi",
    uploadedDate: "2023-10-11",
    vendorName: "CodeTalent Solutions",
    techStack: "React, java, Azure",
    position: "Lead Engineer",
  },
  {
    id: 12,
    name: "Laura Green",
    email: "laura.green@email.com",
    phone: "555-8901",
    uploadedBy: "Abi",
    uploadedDate: "2023-10-12",
    vendorName: "TechRecruiters Inc.",
    techStack: "dotnet+react",
    position: "Software Engineer",
  },
  {
    id: 13,
    name: "Michael Taylor",
    email: "michael.taylor@email.com",
    phone: "555-5678",
    uploadedBy: "Sudha",
    uploadedDate: "2023-10-13",
    vendorName: "TalentSearch Co.",
    techStack: "Node.js, Express, MongoDB, React, SQL Server, Azure",
    position: "Lead Engineer",
  },
  {
    id: 14,
    name: "Nancy Turner",
    email: "nancy.turner@email.com",
    phone: "555-1234",
    uploadedBy: "Prem",
    uploadedDate: "2023-10-14",
    vendorName: "RecruitWise Solutions",
    techStack: "React, dotnet, Azure",
    position: "Lead Engineer",
  },
  {
    id: 15,
    name: "Oscar Brown",
    email: "oscar.brown@email.com",
    phone: "555-8765",
    uploadedBy: "Prem",
    uploadedDate: "2023-10-15",
    vendorName: "CodeTalent Solutions",
    techStack: "dotnet+Reacr",
    position: "Software Engineer",
  },
  {
    id: 16,
    name: "Penelope Adams",
    email: "penelope.adams@email.com",
    phone: "555-2345",
    uploadedBy: "Vaishnavi",
    uploadedDate: "2023-10-16",
    vendorName: "TechRecruiters Inc.",
    techStack: "Angular, dotnet, Azure",
    position: "Senior Engineer",
  },
  {
    id: 17,
    name: "Quincy Wilson",
    email: "Abi",
    phone: "555-6789",
    uploadedBy: "Prem",
    uploadedDate: "2023-10-17",
    vendorName: "TalentSearch Co.",
    techStack: "React, java, Azure",
    position: "Software Engineer",
  },
  {
    id: 18,
    name: "Rachel Turner",
    email: "rachel.turner@email.com",
    phone: "555-3456",
    uploadedBy: "Sudha",
    uploadedDate: "2023-10-18",
    vendorName: "TechHire Pro",
    techStack: "dotnet+React",
    position: "Software Engineer",
  },
  {
    id: 19,
    name: "Samuel Lee",
    email: "Vaishnavi",
    phone: "555-7890",
    uploadedBy: "Technical Recruiter",
    uploadedDate: "2023-10-19",
    vendorName: "CodeTalent Solutions",
    techStack: "Angular, dotnet, Azure",
    position: "Lead Engineer",
  },
  {
    id: 20,
    name: "Tina Baker",
    email: "diana.martinez@email.com",
    phone: "555-4567",
    uploadedBy: "HR Coordinator",
    uploadedDate: "2023-10-20",
    vendorName: "RecruitWise Solutions",
    techStack: "Azure, SQL",
    position: "Data Engineer",
  },
];

export default candidates;
