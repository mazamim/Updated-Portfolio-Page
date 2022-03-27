var repodetails = [

  {
    projectName: 'Tech Blog',
    imageUrl: "https://media.istockphoto.com/photos/wood-block-cube-put-the-front-computer-keyboard-with-word-blog-and-picture-id1008719744?s=612x612",
    projectCategory: "MVC",
    gitHubLink:"https://github.com/mazamim/Tech-Blog.git",
    updated_at: "27/03/2022",
    siteLink: 'https://monash-tech-blog.herokuapp.com/',
  },



  {
    projectName: 'Recipe Project',
    imageUrl: "https://media.istockphoto.com/photos/vegan-glutenfree-creamy-spinach-pasta-picture-id1182467837?s=612x612",
    projectCategory: "MVC",
    gitHubLink:"https://github.com/Pattiqus/myRecipe.git",
    updated_at: "13/03/2022",
    siteLink: 'https://my-recipe-pbmm.herokuapp.com/',
  },



  {
    projectName: 'Day Planner',
    imageUrl: "https://media.istockphoto.com/photos/booking-a-covid19-vaccination-picture-id1325562145?s=612x612",
    projectCategory: "Javascript",
    gitHubLink:"https://github.com/mazamim/day-planner.git",
    updated_at: "26/12/2021",
    siteLink: 'https://mazamim.github.io/day-planner/',
  },

  {
    projectName: 'Image Grid',
    imageUrl: "https://images.unsplash.com/photo-1627042435809-8e75a5d7b1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    projectCategory: "React",
    gitHubLink:"https://github.com/mazamim/react-image-grid.git",
    updated_at: "30/01/2022",
    siteLink: 'https://github.com/mazamim/react-image-grid.git',
  },
];
var repoStatus = false;

function callGit() {
   var index = 0;
  // axios.get("https://api.github.com/users/mazamim/repos").then((response) => {
  //   response.data.map((element) => {
  //     axios
  //       .get(`https://api.github.com/repos/${element.full_name}/deployments`)
  //       .then((myResponse) => {
  //         if (myResponse.data.length > 0) {
  //           const number = Math.floor(Math.random() * 4);
  //           var defaultUrl =
  //             '"https://images.unsplash.com/photo-1628277613967-6abca504d0ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"';
  //           const { name, language, updated_at, html_url } = element;
  //           axios
  //             .get(`https://api.unsplash.com/search/photos?query=${name}`, {
  //               headers: {
  //                 Authorization:
  //                   "Client-ID gQVMOjL4HUqNYan3-z1-I9tKntkqzDD_xrjTXwKYI1Y",
  //               },
  //             })
  //             .then((iurl) => {
  //               let localrepodetails = {
  //                 projectName: name.toUpperCase(),
  //                 imageUrl: iurl.data.results[0].urls.regular || defaultUrl,
  //                 projectCategory: language,
  //                 gitHubLink: html_url,
  //                 updated_at: moment(updated_at).format("YYYY/MM/DD"),
  //                 siteLink: `https://mazamim.github.io/${name}`,
  //               };
  //               createSlider(localrepodetails, index);
  //               index = index + 1;
  //               repodetails.push(localrepodetails);
  //             });
  //         }
  //       });
  //   });
  // });


  repodetails.map((element)=>{
    createSlider(element, index);
    index = index + 1;
  })

}

callGit();

var FormEl = $("#myform");

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  let data = {
    firstname: $("#fname").val(),
    lastname: $("#lname").val(),
    email: $("#email").val(),
    subject: $("#subject").val(),
  };
  sendEmail(data);
}

// Create a submit event listener on the form element
FormEl.on("submit", handleFormSubmit);

function sendEmail(data) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "mazamim912022@gmail.com",
    Password: "myMinha@2016",
    To: "mazamim91@gmail.com",
    From: "mazamim912022@gmail.com",
    Subject: "Sending Email using javascript",
    Body: data,
  }).then(function (message) {
    console.log(data);
    $("#fname").val(""),
      $("#lname").val(""),
      $("#email").val(""),
      $("#subject").val("");

    alertify.alert(
      "Message Sent",
      "I will Get In touch with " + data.email + " assoon as Possible",
      function () {
        alertify.message("OK");
      }
    );
  });
}

function createSlider(localrepodetails, index) {
  var li = $("<li>");
  li.attr("data-target", "#featured");
  li.attr("data-slide-to", index.toString());
  if (index == 0) {
    li.attr("class", "active");
  }
  $("#slider").append(li);

  //create left carousel
  var carouselitem = $("<div>");

  if (index == 0) {
    carouselitem.attr("class", "carousel-item active");
  } else {
    carouselitem.attr("class", "carousel-item");
  }
  $("#carouselParent").append(carouselitem);

  var flowzoom = $("<div>");
  flowzoom.attr("class", "card border-0 rounded-0 text-light overflow zoom");
  carouselitem.append(flowzoom);

  var positionrelative = $("<div>");
  positionrelative.attr("class", "position-relative");
  flowzoom.append(positionrelative);

  var ratioleftcoverimagewrapper = $("<div>");
  ratioleftcoverimagewrapper.attr("class", "ratio_left-cover-1 image-wrapper");
  positionrelative.append(ratioleftcoverimagewrapper);

  var aTag = $("<a>");
  aTag.attr("href", localrepodetails.imageUrl);
  ratioleftcoverimagewrapper.append(aTag);
  var img = $("<img>");
  img.attr("class", "img-fluid img-thumbnail");
  img.attr("src", localrepodetails.imageUrl);

  aTag.append(img);

  var positionabsolutebgshadow = $("<div>");
  positionabsolutebgshadow.attr(
    "class",
    "position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow"
  );
  positionrelative.append(positionabsolutebgshadow);

  var aTag2 = $("<a>");
  aTag2.attr("href", localrepodetails.gitHubLink);
  positionabsolutebgshadow.append(aTag2);

  var posttitle = $("<div>");
  posttitle.attr("class", "h3 post-title text-white my-1");
  aTag2.append(posttitle);
  posttitle.text(localrepodetails.projectName);

  var newsmeta = $("<div>");
  newsmeta.attr("class", "news-meta");
  positionabsolutebgshadow.append(newsmeta);
  var span = $("<span>");
  span.attr("class", "news-date");
  span.text(localrepodetails.updated_at);
  newsmeta.append(span);

  var outer = $("<div>");
  outer.attr("class", "col-6 pb-1 pt-0 pr-1");
  $("#myRow").append(outer);

  var cardborder = $("<div>");
  cardborder.attr("class", "card border-0 rounded-0 text-white overflow zoom");
  outer.append(cardborder);

  var positionrelative2 = $("<div>");
  positionrelative2.attr("class", "position-relative");
  cardborder.append(positionrelative2);

  var imagewrapper = $("<div>");
  imagewrapper.attr("class", "ratio_right-cover-2 image-wrapper");
  positionrelative2.append(imagewrapper);

  var aTag3 = $("<a>");
  aTag3.attr("href", localrepodetails.gitHubLink);
  imagewrapper.append(aTag3);

  var img2 = $("<img>");
  img2.attr("class", "img-fluid img-thumbnail");
  img2.attr("src", localrepodetails.imageUrl);

  aTag3.append(img2);

  var positionabsolutebgShadow = $("<div>");
  positionabsolutebgShadow.attr(
    "class",
    "position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow"
  );
  positionrelative2.append(positionabsolutebgShadow);

  var aTagCategory = $("<a>");
  aTagCategory.attr("href", localrepodetails.gitHubLink);
  aTagCategory.attr("class", "p-1 badge badge-primary rounded-0");
  aTagCategory.text(localrepodetails.projectCategory);
  positionabsolutebgShadow.append(aTagCategory);

  var aTitle = $("<a>");
  aTitle.attr("href", localrepodetails.siteLink);
  aTitle.attr("class", "h5 text-white my-1");
  positionabsolutebgShadow.append(aTitle);

  var h2 = $("<h2>");
  h2.attr("class", "h5 text-white my-1");
  aTitle.append(h2);
  h2.text(localrepodetails.projectName);
}
