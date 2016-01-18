defineTags = function() {

  let sampleTags = [
    {
      name: "Software Engineering",
      slug: "software-engineering",
      description: "The systematic application of scientific and technological knowledge, methods, and experience to the design, implementation, testing, and documentation of software",
      tagType: "cs-disciplines"
    },
    {
      name: "Psychology",
      slug: "psychology",
      description: "The scientific study of the human mind and its functions, especially those affecting behavior in a given context",
      tagType: "non-cs-disciplines"
    },
    {
      name: "Silicon Valley",
      slug: "silicon-valley",
      description: "the southern portion of the San Francisco Bay Area, centering on the Santa Clara valley.",
      tagType: "locations"
    },
    {
      name: "Data Scientist",
      slug: "data-scientist",
      description: "Combine statistics, data mining, and predictive analytics to gain insight from large data sets.",
      tagType: "professional-goals"
    },
    {
      name: "High Performance Engineer",
      slug: "concurrent-programming",
      description: "The study of multi threaded systems",
      tagType: "professional-goals"
    },
    {
      name: "Network Engineer",
      slug: "network-engineering",
      description: "The study of computer network protocol and different layers of networking",
      tagType: "professional-goals"
    },
    {
      name: "Hardware Engineer",
      slug: "computer-engineering",
      description: "The physics and implementation of microelectronics to build computer systems",
      tagType: "professional-goals"
    },
    {
      name: "Artificial Intelligence Engineer",
      slug: "ai-engineer",
      description: "The study of artificial intelligence",
      tagType: "professional-goals"
    }
  ];

  _.each(sampleTags, RadGrad.tag.define);
};