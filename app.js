var repodetails=[];
var repoStatus=false;


function  callGit(){
            var index=0
  axios.get('https://api.github.com/users/mazamim/repos').then((response)=>{


    response.data.map((element)=>{
      axios.get(`https://api.github.com/repos/${element.full_name}/deployments`).then((myResponse)=>{
    

        if (myResponse.data.length>0){
          console.log(element)
       const {name,language,updated_at,html_url}= element
        
       axios.get(`https://api.unsplash.com/search/photos?query=${name}`,
       {
         headers:{Authorization:'Client-ID gQVMOjL4HUqNYan3-z1-I9tKntkqzDD_xrjTXwKYI1Y'}
       }).then((iurl)=>{

        let localrepodetails={
          projectName:name.toUpperCase(),
         imageUrl:iurl.data.results[0].urls.regular,
         projectCategory:language,
         gitHubLink:html_url,
         updated_at:moment().format('YYYY/MM/DD'),
         siteLink:`https://mazamim.github.io/${name}`
         }

         createSlider(localrepodetails,index)
         index=index+1;
         repodetails.push(localrepodetails)

       })
         

        

      
     
        
        
        }
    
        
      })
    
       
    
      })

  })




  console.log(repodetails)

  
}




callGit()

async function callunplashApi(name){
  const response = await axios.get(`https://api.unsplash.com/search/photos?query=${name}`,
  {
    headers:{Authorization:'Client-ID gQVMOjL4HUqNYan3-z1-I9tKntkqzDD_xrjTXwKYI1Y'}
  })

return response.data.results[0].urls.regular
}




var FormEl = $('#myform');



// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
let data ={
 firstname:$('#fname').val(),
 lastname:$('#lname').val(),
 email:$('#email').val(),
 subject:$('#subject').val()
 
}
sendEmail(data)





}

// Create a submit event listener on the form element
FormEl.on('submit', handleFormSubmit);

function sendEmail(data) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "mazamim912022@gmail.com",
      Password: "myMinha@2016",
      To: 'mazamim91@gmail.com',
      From: "mazamim912022@gmail.com",
      Subject: "Sending Email using javascript",
      Body: data,
    })
      .then(function (message) {


        console.log(data)
        $('#fname').val(''),
        $('#lname').val(''),
        $('#email').val(''),
        $('#subject').val('')

        alertify
        .alert('Message Sent','I will Get In touch with '+data.email+" assoon as Possible", function(){
          alertify.message('OK');
        });
      });
  }


function createSlider(localrepodetails,index){

    var li=$('<li>')
    li.attr('data-target','#featured')
    li.attr('data-slide-to',(index).toString())
    if (index == 0){
      li.attr('class','active')
    }
  $('#slider').append(li)



//create left carousel
  var carouselitem =$('<div>')

  if (index == 0){
    carouselitem.attr('class','carousel-item active')
  }
  else{
    carouselitem.attr('class','carousel-item')
  }
  $('#carouselParent').append(carouselitem)
  
  var flowzoom=$('<div>')
 flowzoom.attr('class','card border-0 rounded-0 text-light overflow zoom')
   carouselitem.append(flowzoom)
  
  var positionrelative =$('<div>')
  positionrelative.attr('class','position-relative')
  flowzoom.append(positionrelative)
  
  var ratioleftcoverimagewrapper=$('<div>')
  ratioleftcoverimagewrapper.attr('class','ratio_left-cover-1 image-wrapper')
  positionrelative.append(ratioleftcoverimagewrapper)
  
  var aTag=$('<a>')
  aTag.attr('href',localrepodetails.imageUrl)
  ratioleftcoverimagewrapper.append(aTag)
  var img=$('<img>')
  img.attr('class','img-fluid img-thumbnail')
  img.attr('src',localrepodetails.imageUrl)
  
  aTag.append(img)
  
  
  var positionabsolutebgshadow=$('<div>')
  positionabsolutebgshadow.attr('class','position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow')
  positionrelative.append(positionabsolutebgshadow)
  
  
  var aTag2=$('<a>')
  aTag2.attr('href',localrepodetails.gitHubLink)
  positionabsolutebgshadow.append(aTag2)
  
  var posttitle=$('<div>')
  posttitle.attr('class','h3 post-title text-white my-1')
  aTag2.append(posttitle)
   posttitle.text(localrepodetails.projectName)
  
  
  
var newsmeta=$('<div>')
newsmeta.attr('class','news-meta')
positionabsolutebgshadow.append(newsmeta)
 var span=$('<span>')
 span.attr('class','news-date')
 span.text(localrepodetails.updated_at)
 newsmeta.append(span)



 var outer=$('<div>')
outer.attr('class','col-6 pb-1 pt-0 pr-1')
$('#myRow').append(outer)

var cardborder=$('<div>')
cardborder.attr('class','card border-0 rounded-0 text-white overflow zoom')
outer.append(cardborder)

var positionrelative2=$('<div>')
positionrelative2.attr('class','position-relative')
cardborder.append(positionrelative2)


var imagewrapper=$('<div>')
imagewrapper.attr('class','ratio_right-cover-2 image-wrapper')
positionrelative2.append(imagewrapper)


var aTag3=$('<a>')
aTag3.attr('href',localrepodetails.gitHubLink)
imagewrapper.append(aTag3)


var img2=$('<img>')
img2.attr('class','img-fluid img-thumbnail')
img2.attr('src',localrepodetails.imageUrl)

aTag3.append(img2)



var positionabsolutebgShadow=$('<div>')
positionabsolutebgShadow.attr('class','position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow')
positionrelative2.append(positionabsolutebgShadow)


var aTagCategory=$('<a>')
aTagCategory.attr('href',localrepodetails.gitHubLink)
aTagCategory.attr('class',"p-1 badge badge-primary rounded-0")
aTagCategory.text(localrepodetails.projectCategory)
positionabsolutebgShadow.append(aTagCategory)


var aTitle=$('<a>')
aTitle.attr('href',localrepodetails.siteLink)
aTitle.attr('class',"h5 text-white my-1")
positionabsolutebgShadow.append(aTitle)

var h2=$('<h2>')
h2.attr('class','h5 text-white my-1')
aTitle.append(h2)
h2.text(localrepodetails.projectName)


}


















//slider

{/* <li data-target="#featured" data-slide-to="0" class="active"></li>
<li data-target="#featured" data-slide-to="1"></li>
<li data-target="#featured" data-slide-to="2"></li>
<li data-target="#featured" data-slide-to="3"></li> */}

{/* <div class="carousel-item active">
<div class="card border-0 rounded-0 text-light overflow zoom">
    <div class="position-relative">
        <!--thumbnail img-->
        <div class="ratio_left-cover-1 image-wrapper">
            <a href="https://black-mandarin.github.io/Go-to-your-Movie/">
                <img class="img-fluid img-thumbnail"
                src="assets/images/pic1.jpg"
                alt="Go to movie">
            </a>
        </div>
        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
            <!--title-->
            <a href="https://black-mandarin.github.io/Go-to-your-Movie/">
                <h2 class="h3 post-title text-white my-1">Neearby Cinemas- Project</h2>
            </a>
            <!-- meta title -->
            <div class="news-meta">
              
                <span class="news-date">Jan, 2022</span>
            </div>
        </div>
    </div>
</div>
</div> */}


{/* <div class="col-6 pb-1 pt-0 pr-1">
<div class="card border-0 rounded-0 text-white overflow zoom">
    <div class="position-relative">
        <!--thumbnail img-->
        <div class="ratio_right-cover-2 image-wrapper">
            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                <img class="img-fluid"
                     src="https://bootstrap.news/source/img5.jpg"
                     alt="simple blog template bootstrap">
            </a>
        </div>
        <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
            <!-- category -->
            <a class="p-1 badge badge-primary rounded-0" href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">Lifestyle</a>

            <!--title-->
            <a href="https://bootstrap.news/bootstrap-4-template-news-portal-magazine/">
                <h2 class="h5 text-white my-1">Should you see the Fantastic Beasts sequel?</h2>
            </a>
        </div>
    </div>
</div>
</div> */}


