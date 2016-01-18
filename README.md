# RadGrad Data Model Experiment

![](https://raw.githubusercontent.com/khongnaw/radgrad-data-model-experiment/master/doc/images/Capture.JPG)

This application demonstrates my understanding of the [RadGrad data model](https://github.com/radgrad/data-model-example) by defining an arrangement of entities.


### Define four additional courses of your choice from the ICS curriculum.

```
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
```
### Define one new degree goal, “Network Engineer”, and another one of your own choosing.
```
    {name: "Network Engineer", slug: "degree-goal-network", description: "Able to maintain computer network system"},
    {name: "Software Engineer", slug: "degree-goal-software", description: "Effectively able to work in large coding projects using various tools (Git,Huboard,etc.)"}
```
### Define one new opportunity, “IEEE Student Branch”, and another one of your own choosing.
```
        {
          name: "IEEE Student Branch",
          slug: "ieee-manoa",
          description: "IEEE Student Chapter",
          opportunityType: "club",
          sponsor: "ohta",
          tags: ["computer-engineering", "silicon-valley"],
          startActive: moment("2015-01-12").toDate(),
          endActive: moment("2016-02-12").toDate()
        },
        {
          name: "Eta Kappa Nu (HKN)",
          slug: "hkn-manoa",
          description: "HKN Student Chapter",
          opportunityType: "club",
          sponsor: "shiroma",
          tags: ["computer-engineering", "silicon-valley"],
          startActive: moment("2015-01-12").toDate(),
          endActive: moment("2016-02-12").toDate()
        }
```
### Define four new Tags of your own choosing. They should be useful and relevant to computer science students.
```
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
```
### Define two new students. Each student should have at least four course instances, and four opportunity instances. Make sure all of your new additions are incorporated into the student profile definitions.

```
       {
         firstName: "Bobby",
         middleName: "",
         lastName: "Smith",
         slug: "bobbysmith",
         password: "foo",
         uhEmail: "bob@hawaii.edu",
         role: RadGrad.role.student
       },
       {
         firstName: "Esther",
         middleName: "",
         lastName: "Lee",
         slug: "estherlee",
         password: "foo",
         uhEmail: "esther@hawaii.edu",
         role: RadGrad.role.student
       },
```
Please refer to the [StudentProfile.js](https://github.com/khongnaw/radgrad-data-model-experiment/blob/master/app/server/sample-data-model/definitions/StudentProfile.js) file to see Esther and Bob's profile definitions.






