import React from "react";

const teamMembers = [
  { name: "Suyan Man Amatya", role: "Director" },
  { name: "Bimal Thapa", role: "Editor" },
  { name: "Rupesh Silwal", role: "Technical" },
  { name: "Bayapak Chudali", role: "Supporter" },
];

const BehindTheBusiness = () => {
  return (
    <section className="bg-gray-100 py-10 px-5 sm:px-10 mt-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Behind the Business
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Meet the passionate team working behind the scenes to make this business
        a reality.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
          >
            {/* Image placeholder, if you want to include images later */}
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-200 rounded-full"></div>
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BehindTheBusiness;
