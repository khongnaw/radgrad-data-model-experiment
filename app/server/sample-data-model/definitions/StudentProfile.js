defineStudentProfile = function() {
  let acID = RadGrad.user.findBySlug("anthonychriste")._id;
  let bobbyID = RadGrad.user.findBySlug("bobbysmith")._id;
  let estherID = RadGrad.user.findBySlug("estherlee")._id;

  let sampleWorkInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), hrswk: 10, studentID: acID},
    {semesterID: RadGrad.semester.get("Spring", 2016), hrswk: 20, studentID: acID}
  ];

  let sampleWorkInstanceIDs = _.map(sampleWorkInstanceData, RadGrad.workinstance.define);

  let sampleCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics311", verified: false, grade: "B", studentID: acID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: acID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics212", verified: true, grade: "A", studentID: acID}
  ];

  //bobby course instance
  let bobbyCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics623", verified: false, grade: "B", studentID: bobbyID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: bobbyID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics414", verified: true, grade: "A", studentID: bobbyID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics351", verified: true, grade: "A", studentID: bobbyID}
  ];
 // esther course instance
  let estherCourseInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), course: "ics623", verified: false, grade: "B", studentID: estherID},
    {semesterID: RadGrad.semester.get("Fall", 2014), course: "nonICS-1xx", verified: false, grade: "B", studentID: estherID, note: "Art 132"},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics414", verified: true, grade: "A", studentID: estherID},
    {semesterID: RadGrad.semester.get("Spring", 2016), course: "ics351", verified: true, grade: "A", studentID: estherID}
  ];

  let sampleCourseInstanceIDs = _.map(sampleCourseInstanceData, RadGrad.courseinstance.define)
  let bobbyCourseInstanceIDs = _.map(bobbyCourseInstanceData, RadGrad.courseinstance.define);
  let estherCourseInstanceIDs = _.map(estherCourseInstanceData, RadGrad.courseinstance.define);

  let sampleOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: acID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: acID
    }
  ];

  // bobby opportunity
  let bobbyOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: bobbyID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: bobbyID
    },
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "ieee-manoa", verified: true, hrswk: 10, studentID: bobbyID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hkn-manoa", verified: true, hrswk: 10, studentID: bobbyID}
  ];
  // esther opportunity
  let estherOpportunityInstanceData = [
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hack15", verified: true, hrswk: 10, studentID: estherID},
    {
      semesterID: RadGrad.semester.get("Spring", 2016),
      opportunity: "acm-manoa",
      verified: false,
      hrswk: 20,
      studentID: estherID
    },
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "ieee-manoa", verified: true, hrswk: 10, studentID: estherID},
    {semesterID: RadGrad.semester.get("Fall", 2015), opportunity: "hkn-manoa", verified: true, hrswk: 10, studentID: estherID}
  ];

  let sampleOpportunityInstanceIDs = _.map(sampleOpportunityInstanceData, RadGrad.opportunityinstance.define)
  let bobbyOpportunityInstanceIDs = _.map(bobbyOpportunityInstanceData, RadGrad.opportunityinstance.define);
  let estherOpportunityInstanceIDs = _.map(estherOpportunityInstanceData, RadGrad.opportunityinstance.define);


  // Set degree plan
  let sampleDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: sampleCourseInstanceIDs,
    opportunityInstanceIDs: sampleOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: acID
  });

  let bobbyDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: bobbyCourseInstanceIDs,
    opportunityInstanceIDs: bobbyOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: bobbyID
  });

  let estherDegreePlan = RadGrad.degreeplan.define({
    courseInstanceIDs: estherCourseInstanceIDs,
    opportunityInstanceIDs: estherOpportunityInstanceIDs,
    workInstanceIDs: sampleWorkInstanceData,
    studentID: estherID
  });

  RadGrad.user.setDegreePlanID(acID, sampleDegreePlan);
  RadGrad.user.setDegreeGoalIDs(acID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(acID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(acID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(acID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(acID, RadGrad.semester.get("Fall", 2018));


  RadGrad.user.setDegreePlanID(bobbyID, bobbyDegreePlan);
  RadGrad.user.setDegreeGoalIDs(bobbyID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(bobbyID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(bobbyID, "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/1eb/082/154da42.jpg");
  RadGrad.user.setAboutMe(bobbyID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(bobbyID, RadGrad.semester.get("Fall", 2018));

  RadGrad.user.setDegreePlanID(estherID, estherDegreePlan);
  RadGrad.user.setDegreeGoalIDs(estherID, [RadGrad.slug.getEntityID("degree-goal-sv-tech", "DegreeGoal")]);
  RadGrad.user.setInterestTagIDs(estherID, [RadGrad.slug.getEntityID("software-engineering", "Tag")]);
  RadGrad.user.setPicture(estherID, "");
  RadGrad.user.setAboutMe(estherID, "I am a student at the [University of Hawaii](http://www.hawaii.edu/).");
  RadGrad.user.setSemesterID(estherID, RadGrad.semester.get("Fall", 2018));



};

