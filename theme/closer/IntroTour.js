
function showHomeTour() {
    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    tour.addStep('home1', {
        title: "Welcome",
        text: "Welcome to CLOSER Discovery. Use this portal to find information about variables, questions, and other metadata.",
    });

    tour.addStep('home2', {
        title: "Search",
        text: "Search for information by text, topic, and other facets.",
        attachTo: '#nav-link-search bottom',
    });

    tour.addStep('home3', {
        title: "Explore",
        text: "Use Explore to point and click through topics to find information.",
        attachTo: '#nav-link-explore bottom',
    });

    tour.addStep('home4', {
        title: "Basket",
        text: "Save interesting things for later in your basket.",
        attachTo: '#nav-link-basket bottom',
        buttons: {
            text: "Finish",
            action: tour.next
        }
    });

    tour.start()
};

function showSearchTour() {

    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    // Text box
    tour.addStep('search1', {
        title: "Query",
        text: "Enter the text you want to find.",
        attachTo: "#search-group bottom",
    });

    // Item type facet
    if ($("#item-type-panel").length) {
        tour.addStep('search2', {
            title: "Item Types",
            text: "Choose which types of items you would like to find.",
            attachTo: "#item-type-panel right",
        });
    }

    // Life stage
    if ($("#life-stage-panel").length) {
        tour.addStep('search2', {
            title: "Life Stage",
            text: "Choose the life stages you would like to search within.",
            attachTo: "#life-stage-panel right",
        });
    }

    // Topic facet
    if ($("#topic-panel").length) {
        tour.addStep('search2', {
            title: "Topic",
            text: "Choose the topics you would like to search within.",
            attachTo: "#topic-panel right",
        });
    }

    // Results
    if ($("#no-query-message").length) {
        tour.addStep('searchLast', {
            title: "Results",
            text: "After searching, your results will show here.",
            attachTo: '#no-query-message top',
            buttons: {
                text: "Finish",
                action: tour.next
            }
        });
    }
    else if ($("#search-results").length) {
        tour.addStep('searchLast', {
            title: "Results",
            text: "Here are your search results. Click the header link to find details about an item.",
            attachTo: '#search-results top',
            buttons: {
                text: "Finish",
                action: tour.next
            }
        });
    }

    tour.start();
};

function showExploreTour() {

    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    tour.addStep('concepts', {
        title: 'Topics',
        text: 'The left sidebar shows a list of topics. Select a topic to see variables and other items.',
        attachTo: '#concept-system-tree right',
    });

    tour.addStep('concordance', {
        title: "Concordance",
        text: "When a topic is selected, the concordance table shows variables in that topic. Select a row to see summary statistics.",
        attachTo: "#concordance-wrapper top"
    });

    tour.addStep("concordance-details", {
        title: "Details",
        text: "The right side shows details about the selected item, including any descriptive statistics in the metadata.",
        attachTo: "#concordance-details left"
    });
    
    tour.addStep("left-pane-buttons", {
        title: "Views",
        text: "Use these buttons to switch between the concordance views or lists of variables, questions, and other item types.",
        attachTo: "#left-pane-buttons bottom",
        buttons: {
            text: "Finish",
            action: tour.next
        }
    });
    

    tour.start()
};

function showBasketTour() {

    var tour = new Shepherd.Tour({
        defaults: {
            classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
            scrollTo: true,
            showCancelLink: true
        }
    });

    tour.addStep('basket1', {
        title: 'Basket',
        text: "The basket lets you save variables, questions, or other items that interest you.",
        attachTo: '.basket-items bottom',
    });


    // Download metadata or data
    tour.addStep('basket2', {
        title: 'Basket',
        text: "You can download information about items in you basket in various formats.",
        attachTo: '#download-ddi-link right',
    });


    // Create multiple
    tour.addStep('basket3', {
        title: 'Basket',
        text: "You can create multiple baskets to organize your items however you like.",
        attachTo: '#create-basket-link right',
        buttons: {
            text: "Finish",
            action: tour.next
        }
    });


    tour.start()
};
