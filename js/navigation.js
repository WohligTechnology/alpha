// var adminURL = "";
// if (isproduction) {
//     adminURL = "http://www.wohlig.co.in/demo/index.php";
// } else {
//     adminURL = "http://localhost/demo/index.php";
// }
// var adminurl = "http://localhost:80/api/";

var adminurl = "http://alpha.tingdom.in/api/";

var imgurl = adminurl + "upload/";
var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Overview",
        classis: "active",
        anchor: "overview",
        subnav: [{
            name: "About Us",
            classis: "active",
            anchor: "aboutus",
            subnavs: []
          },{
              name: "Journey",
              classis: "active",
              anchor: "journey",
              subnavs: []
            }]

    }, {
        name: "Products",
        classis: "",
        anchor: "product",
        subnav: [{
            name: "Flexible",
            classis: "",
            anchor: "flexible",
            // isId: "yes",
            subnavs: [{
                name: "PP/PE Bags & Liners",
                classis: "",
                anchor: "bags-liners",
                // isId: "yes",
            }, {
                name: "POF Shrink Film",
                classis: "",
                anchor: "pof",
                // isId: "no",
            },{
                name: "Speciality Films",
                classis: "",
                anchor: "speciality-film",
                // isId: "no",
            }]
        }, {
            name: "Rigid",
            classis: "",
            anchor: "pet",
            subnavs: [{
                name: "PET Bottles",
                classis: "",
                anchor: "pet",
                // isId: "yes",
            }]
            // isId: "no",
        }]
    },

    {
        name: "Quality Policy",
        classis: "",
        anchor: "quality-policy",
        subnav: []
    },
    {
        name: "Certifications",
        classis: "",
        anchor: "certifications",
        subnav: []
    },
    {
        name: "News",
        classis: "",
        anchor: "news",
        subnav: []
    },
    {
        name: "Events",
        classis: "",
        anchor: "events",
        subnav: []
    },{
        name: "Careers",
        classis: "",
        anchor: "careers",
        subnav: []
    },{
        name: "Contact Us",
        classis: "",
        anchor: "contact-us",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        sendEnquiryEmail: function (input,callback) {
                       console.log(input);
                       $http({
                           url: adminurl + 'Enquiry/sendEnquiryEmail',
                           method: 'POST',
                           withCredentials: true,
                           data: input
                       }).then(function (data) {
                           data = data.data;
                           callback(data);
                       });
                   },
                   sendCareerEmail: function (input,callback) {
               console.log(input);
               $http({
                   url: adminurl + 'Careers/sendCareersEmail',
                   method: 'POST',
                   withCredentials: true,
                   data: input
               }).then(function (data) {
                   data = data.data;
                   callback(data);
               });
           },

           getHomeSlider: function(callback) {
               $http({
                   url: adminurl + 'HomeSlider/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },

           getAllClients: function(callback) {
               $http({
                   url: adminurl + 'clients/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getJourney: function(callback) {
               $http({
                   url: adminurl + 'journey/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getLatestNews: function(callback) {
               $http({
                   url: adminurl + 'latestNews/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getProductStatistics: function(callback) {
               $http({
                   url: adminurl + 'productStatistics/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },

           getDetailNews: function(id, callback) {
               var data = {
                   _id: id,
               };
               $http({
                   url: adminurl + 'latestNews/getone',
                   method: 'POST',
                   withCredentials: true,
                   data: data
               }).then(callback);
           },

           getProducts: function(callback) {
               $http({
                   url: adminurl + 'Products/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getShrinkFilm: function(callback) {
               $http({
                   url: adminurl + 'ShrinkFilm/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getBottles: function(callback) {
               $http({
                   url: adminurl + 'Bottles/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getSpecialityFilms: function(callback) {
               $http({
                   url: adminurl + 'SpecialityFilms/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getCollation: function(callback) {
               $http({
                   url: adminurl + 'Collation/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },
           getAgricultural: function(callback) {
               $http({
                   url: adminurl + 'Agricultural/getAll',
                   method: 'POST',
                   withCredentials: true
               }).then(callback);
           },


    };
});
