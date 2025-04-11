import Card from "../Card";

const certificateList = [
  {
    title: "AWS Cloud Technical Essentials",
    file: "/Certificates/AWS_Cloud_Technical_Essentials.pdf",
  },
  {
    title: "Foundations in Cloud Computing",
    file: "/Certificates/Fundamentals_of_Generative_AI_for_Beginners.pdf",
  },
  {
    title: "GenAI in Business Discover the Possibilities",
    file: "/Certificates/GenAI_in_Business_Discover_the_Possibilities.pdf",
  },
  {
    title: "Generative AI Impact, Considerations, and Ethical Issues",
    file: "/Certificates/Generative_AI_Impact,_Considerations,_and_Ethical_Issues.pdf",
  },
  {
    title: "Introduction to Microsoft 365 Copilot",
    file: "/Certificates/Introduction_to_Microsoft_365_Copilot.pdf",
  },
  {
    title: "Migrating to the AWS Cloud",
    file: "/Certificates/Migrating_to_the_AWS_Cloud.pdf",
  },
  {
    title: "User Awareness and Education for Generative AI",
    file: "/Certificates/User_Awareness_and_Education_for_Generative_AI.pdf",
  },
];

console.log(certificateList);

function Certificates() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Certificates
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificateList.map((cert, index) => (
          <Card key={index} title={cert.title} link={cert.file} />
        ))}
      </div>
    </main>
  );
}

export default Certificates;
