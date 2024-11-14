let authorDataService = { getAuthors : function() {} };
let bookDataService = { getBooks : function() {} };
let dataService = Object.assign({}, authorDataService,bookDataService,userDataService);
let userDataService = { getUsers : function() {} };
dataService.getAuthors();
dataService.getBooks();
dataService.getUsers();