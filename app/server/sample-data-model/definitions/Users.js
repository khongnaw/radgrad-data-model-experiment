defineUsers = function() {
  let sampleUsers = [
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
    {
      firstName: "Aaron",
      middleName: "",
      lastName: "Ohta",
      slug: "ohta",
      password: "foo",
      uhEmail: "ohta@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Wayne",
      middleName: "",
      lastName: "Shiroma",
      slug: "shiroma",
      password: "foo",
      uhEmail: "shiroma@hawaii.edu",
      role: RadGrad.role.faculty
    },
    {
      firstName: "Philip",
      middleName: "Meadows",
      lastName: "Johnson",
      slug: "philipjohnson",
      password: "foo",
      uhEmail: "johnson@hawaii.edu",
      role: RadGrad.role.admin
    },
    {
      firstName: "Henri",
      middleName: "",
      lastName: "Casanova",
      slug: "henricasanova",
      password: "foo",
      uhEmail: "henric@hawaii.edu",
      role: RadGrad.role.faculty
    },

    {
      firstName: "Sergey",
      middleName: "",
      lastName: "Negrashov",
      slug: "sergeynegrashov",
      password: "foo",
      uhEmail: "sin8@hawaii.edu",
      role: RadGrad.role.student
    },
    {
      firstName: "Anthony",
      middleName: "",
      lastName: "Christe",
      slug: "anthonychriste",
      password: "foo",
      uhEmail: "achriste@hawaii.edu",
      role: RadGrad.role.student
    }
  ];

  _.each(sampleUsers, RadGrad.user.define);
}