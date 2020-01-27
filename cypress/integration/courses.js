describe('Course Card Page', () => {

  beforeEach(() => {

    cy.fixture('courses.json').as("coursesJSON");

    cy.server();

    cy.route('/api/courses', "@coursesJSON").as("courses");



    cy.visit('/');

    // cy.fixture('testing-lessons-page-1.json').as("testingLesson1JSON")
    // cy.route('/courses/id', "@testingLesson1JSON").as("course");


  });

  // it('view course should display list of testing lessons', () => {
  //   const title  = cy.get('.mat-card-title');
  //   // const button = cy.get('.mat-button').first().click();
  //   // const data = cy.get('.mat-table').children();
  //   console.log(title);
  //
  // })
})
