/// <reference types="cypress" /> 
// import '@testing-library/cypress/add-commands';
// import "cypress-real-events/support";
// import { MailSlurp } from "mailslurp-client";
// const apiKey = Cypress.env('MAILSLURP_API_KEY');
// const mailslurp = new MailSlurp({ apiKey });

Cypress.Commands.add('signInWithEmail', (email, password) => {
  // check if user is on sign in page
  cy.get('body')
    .then($body => {
      if ($body.find('#login-form').length > 0) {
        cy.get('h1').should('contain', 'Sign in with Chick-fil-A One®')
        cy.get('[name="pf.username"]')
          .clear()
          .type(email)
          .should('have.value', email)
        cy.get('[name="pf.pass"]')
          .clear()
          .type(password, { log: false })
          .should('have.value', password)
        cy.get('[name="pf.ok"]').forceClick()
        cy.wait(2000);
        cy.visit("/")
        cy.log('User is signed in.');
      } else {
        assert.isOk('everything', 'You are already signed in.')
      }
    }) 
});

Cypress.Commands.add('signInWithGoogle', () => {
  cy.get("h1").should("contain", "Sign in with Chick-fil-A One®")
  cy.get('.google-log-in').forceClick()
});

Cypress.Commands.add('checkPathName', pathname => {
  cy.location().should(loc => expect(loc.pathname).to.include(pathname))
})

Cypress.Commands.add('ifContains', (ele, txt) => {
  cy.get(ele).should('contain', txt)
})

Cypress.Commands.add('acceptCookies', () => {
  cy.checkForOverlay('#onetrust-button-group', '#onetrust-accept-btn-handler', { timeout: 4000 })
})

Cypress.Commands.add('acceptCookiesCa', () => {
  cy.checkForOverlay('.footer-modules', '.optanon-button-allow', { timeout: 4000 })
})

Cypress.Commands.add('getCy', dataCyValue =>
  cy.get(`[data-cy="${dataCyValue}"]`)
)

// assess whether this causes tests to pass when they should fail
Cypress.Commands.add('forceClick', { prevSubject: true }, $subject => {
  cy.wrap($subject).click({ force: true });
});

Cypress.Commands.add('clearAllBrowserData', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  let cleared = false; // only do once per test run, to allow for OAuth
  cy.on('window:before:load', window => {
    if (!cleared) {
      window.localStorage.clear();
      cleared = true;
    }
  });
});

Cypress.Commands.add('checkVisibNClick', locator => {
  cy.get(locator)
    .should('be.visible')
    .click({ force: true })
})

Cypress.Commands.add('get$', (selector) => {
  return cy.wrap(Cypress.$(selector)).should("have.length.gte", 1); 
})

Cypress.Commands.add('verifyHref', (locator, url) => {
  cy.get(locator)
    .should('have.attr', 'href', url)
})

Cypress.Commands.add('getDataCy', (dataCy) => {
  cy.get(`[data-cy="${dataCy}"]`)
})

Cypress.Commands.add('addItemToOrder', ({
    categoryTag = 'MOBILE_ENTREES',
    itemTag = 'SANDWICH_CFA_CHICKEN',
  } = {}) => {
    cy.getDataCy(categoryTag).forceClick();
    cy.getDataCy(itemTag).forceClick();
    cy.getDataCy('AddToOrder').forceClick();
  },
);

Cypress.Commands.add('checkDefaultLocation', (location) => {
  cy.get('.store-name')
    .should('be.visible')
    .then(($link) => {
        const linkName = $link.text();
        if (linkName === location) {
          expect(linkName).to.contain(location)
          $link.trigger("click")
        } else {
          cy.get('#find-location').forceClick()
          cy.get('#location-search')
            .type(Cypress.env('locations').marketableName)
            .should('have.value', Cypress.env('locations').marketableName)
          cy.get(':nth-child(2) > .icon-search-off').forceClick()
        }
    })
})

Cypress.Commands.add('chooseTime', () => {
  // select from calendar
  cy.checkVisibNClick('#date')
  cy.checkVisibNClick('.ui-datepicker-next > .ui-icon')
  cy.checkVisibNClick(':nth-child(4) > :nth-child(6) > .ui-state-default')
  cy.get('#time').select(Cypress.env('pickupTime'))
    .should('have.value', Cypress.env('pickupTime'))
  cy.checkVisibNClick('#btn-continue')
})

Cypress.Commands.add('checkoutOrder', () => {
  cy.checkVisibNClick('#btn-cart')
  cy.acceptCookies()
  cy.findByText('Proceed to checkout').forceClick()
  cy.checkIfSignedIn()
  cy.get("h1")
    .should("contain", "Paper goods");
  cy.get('#PaperGoodsCount')
    .type(25)
    .should('be.visible')
  cy.checkVisibNClick('#checkout-continue-to-step2')

  cy.get("h1").should("contain", "Contact information");
  // contact info selected by default
  cy.checkVisibNClick('#checkout-continue-to-step3')

  cy.get("h1").should("contain", "Payment information")
  cy.get('#creditSelect-1')
    .check({ force: true })
    .should('be.checked')
  cy.checkVisibNClick('#checkout-continue-final')

  cy.checkVisibNClick('[action="submit"]')
  cy.get("h1").should("contain", "Thanks for your order! You will earn")
})

Cypress.Commands.add('orderPickup', () => {
  cy.checkPathName('/orderfood')
  cy.checkVisibNClick('.catering > .btn-order-pickup')
  cy.get('.overlay-pickup-time').should('be.visible')
  cy.chooseTime()
})

Cypress.Commands.add('orderDelivery', (datatable) => {
  cy.get('#olodeliverylbid > .overlay-delivery').should('be.visible')
  datatable.hashes().forEach(row => {
    cy.get$('#Address').type(row.address)
    cy.get('#City').type(row.city)
    cy.get('#State')
        .select(row.state).should('have.value', 'GA')
    cy.get('#Zip').type(row.zipCode)
})
  cy.checkVisibNClick('#delivery-order-form > .buttons-container > .btn-round')
  cy.chooseTime()
})

Cypress.Commands.add('createAccount', (email, password) => {
  cy.get('#firstName')
    .type('Automation')
    .should('have.value', 'Automation')
  cy.get('#lastName')
    .type('Tester1')
    .should('have.value', 'Tester1')
  cy.get('#primaryEmail')
    .type(email)
    .should('have.value', email)
  cy.get('#confirmEmail')
    .type(email)
    .should('have.value', email)
  cy.get('#credentials')
    .type(password)
    .should('have.value', password)
  cy.get('#confirmCredentials')
    .type(password)
    .should('have.value', password)
  cy.get('.flipswitch-label').forceClick()
  cy.get('#registerBtn').forceClick()
})

Cypress.Commands.add('changeQuantity', () => {
  cy.get('.p-block__card > .p-qty > .p-qty__select > .p-qty__btn--inc').as('incQuant')
  .should('be.visible')
  for(let n = 0; n < row.quantity; n ++) {
      cy.get('@incQuant').forceClick()
  }
})

Cypress.Commands.add('checkIfSignedIn', () => {
  cy.wait(1000)
  cy.get('body')
  .then($body => {
    // check if already signed in
    if ($body.find('#logout-link').length > 0 || $body.find('.username').length > 0) {
      cy.log("first")
      assert.isOk('everything', 'User is already signed in.')
    }
    // check if not signed in but on the signin page 
    else if (cy.get('a').should('contain', 'Chick-fil-A One')) {
      cy.findByText('Sign In').forceClick()
      cy.fixture('testAccounts').then(data => {
        cy.signInWithEmail(data.testUser.email, data.testUser.password)
      })
    }
    // if not on sign in page then go to sign in page and sign in
    else {
      cy.log("first")
      cy.findByText('Sign In').forceClick()
      cy.fixture('testAccounts').then(data => {
        cy.signInWithEmail(data.testUser.email, data.testUser.password)
      })
    }
  })
})

Cypress.Commands.add('checkForOverlay', (overlay, locator) => {
  cy.wait(1000)
  cy.get('body')
  .then($body => {
      if ($body.find(overlay).length > 0) {
        cy.get(locator).click({ force: true })
      } else {
          assert.isOk('everything', 'no overlay found');
      }
  })
})

Cypress.Commands.add('createInbox', () => {
  // return { id, emailAddress } or a new randomly generated inbox
  return mailslurp.createInbox();
});

Cypress.Commands.add('waitForLatestEmail', (inboxId) => {
  return mailslurp.waitForLatestEmail(inboxId);
});

Cypress.Commands.add('getLocationIframeBody', () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
  .iframe('#locatoriframe')
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap)
})

// Cypress.Commands.add("apiLogin", () => {
//   cy.request({
//     method: 'POST',
//     url: `https://login.qa.crndev.chick-fil-a.com/as/XK8Pa/resume/as/authorization.ping`,
//     body: {
//       "pf.username": `${Cypress.env('username')}`,
//       "pf.pass": `${Cypress.env('password')}`
//     },
//   }).then((resp) => {
//     //window.localStorage.setItem("jwt", resp.body.user.token);
//     expect(resp.status).to.eq(200)
//     expect(resp).to.have.property('headers')
//   });
// });

//In Home Page, buttons click function
Cypress.Commands.add('homeButtonsClickFunc', (buttonsSelector) => {
  cy.get('.flex-wrapper .btn-round')
    .contains(buttonsSelector)
    .click()
});

Cypress.Commands.add('launchURL', ()=> {
  let url = Cypress.config().baseUrl;
  return url
});