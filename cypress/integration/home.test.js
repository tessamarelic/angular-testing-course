


describe('Home Page', () => {

    beforeEach(() => {

        cy.fixture('courses.json').as("coursesJSON");

        cy.server();

        cy.route('/api/courses', "@coursesJSON").as("courses");

        cy.visit('/');

    });

    it('should display a list of courses', () => {

        cy.contains("All Courses");

        cy.wait('@courses');

        cy.get("mat-card").should("have.length", 9);

    });

    it('should display the advanced courses', () => {

        cy.get('.mat-tab-label').should("have.length", 2);

        cy.get('.mat-tab-label').last().click();

        cy.get('.mat-tab-body-active .mat-card-title').its('length').should('be.gt', 1);

        cy.get('.mat-tab-body-active .mat-card-title').first()
            .should('contain', "Angular Security Course");

    });

  it('should display the advanced courses', () => {

    cy.get('.mat-tab-label').should("have.length", 2);

    cy.get('.mat-tab-label').first().click();

  });

  it('should navigate to /courses', () => {
    cy.fixture('testing-course.json').as("testingCourseJSON")
    cy.route('/api/courses/12', "@testingCourseJSON").as("course");
    cy.get('.mat-tab-label').should("have.length", 2);

    cy.get('.mat-tab-label').first().click();

    const button = cy.get('.mat-card-actions').first();
    button.click();



    cy.fixture('testing-lessons-page-1.json').as("testingLessons1CourseJSON")
    cy.route('/api/lessons?courseId=12&filter=&sortOrder=asc&pageNumber=0&pageSize=3', "@testingLessons1CourseJSON").as("dataSource");
    // cy.wait('@dataSource');
    // const table = cy.get('.mat-row').should("have.length", 3);

  });




});






















