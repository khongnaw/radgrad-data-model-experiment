defineCourses = function() {
  let sampleCourses = [
    {
      name: "Program Structure",
      slug: "ics212",
      number: "ICS 212",
      description: "Program organization paradigms, programming environments, implementation of a module from specifications, the C and C++ programming languages.",
      tags: ["software-engineering"]
    },
    {
      name: "nonICS 100-level course",
      slug: "nonICS-1xx",
      number: "nonICS 1xx",
      description: "Any non ICS course at the 100 level.",
      tags: []
    },
    {
      name: "Algorithms",
      slug: "ics311",
      number: "ICS 311",
      description: "Design and correctness of algorithms, including divide-and-conquer, greedy and dynamic programming methods.",
      tags: ["software-engineering", "silicon-valley"]
    },
    {
      name: "Concurrent Programming",
      slug: "ics432",
      number: "ICS 432",
      description: "Apply and implement multi threaded programs",
      tags: ["concurrent-programming"]
    },
    {
      name: "Network Design",
      slug: "ics351",
      number: "ICS 351",
      description: "Overview of the internet and its capabilities; introduction to HTTP, TCP/IP, ethernet, and wireless 802.11; routers, switches, and NAT; network and wireless security; practical experience in designing and implementing networks.",
      tags: ["network-engineering"]
    },
    {
      name: "Software Engineering II",
      slug: "ics414",
      number: "ICS 414",
      description: "Project management, quality, and productivity control, testing and validation, team management",
      tags: ["software-engineering"]
    },
    {
      name: "Data Security",
      slug: "ics623",
      number: "ICS 623",
      description: "Symmetric encryption algorithms, secure hashing, algorithms, unicity distance, large number and finite field algebra and arithmetic, public key algorithms for encryption, digital signatures, and key exchange.",
      tags: ["computer-engineering"]
    }
  ];

  _.each(sampleCourses, RadGrad.course.define);
};
