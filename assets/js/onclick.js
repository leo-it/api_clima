const key = "6e91c8ded2644548a6d9fda4b7429327";

$(document).ready(function () {
    let d;
   

    //ECONOMIA
$("#btnNoticiasEconomia").on("click",function(){
   
    $.ajax({
        method: "GET",
        url: `https://api.jornalia.net/api/v1/articles?apiKey=${key}&search=coronavirus+d%C3%B3lar&providers=Clarin%2CPagina12%2CLaNacion%2CTelam&categories=POLITICA%2CECONOMIA%2CSALUD&startDate=2020-10-01&endDate=2020-10-31`,
        success: function (data) {
            console.log("info  ", data.articles);
            d = data.articles;
            let i=0;
            console.log(data.articles);
            for (let da of d) {
                if(d[i].imageUrl!=null && d[i].category ==="Economía" ){

                $("#noticiasEconomia").append(`
                
                <div class="col poli" id=""> 
                <div class="card " style="width: 18rem;">
  <img src="${d[i].imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="card-title">${d[i].category}</h1>
    <p class="card-text"> ${d[i].description}</p>
    
  </div>
</div>
    </div>
                
                
                `)
            }
     i++;
  
    }
   } 
  }) 
  $('#eliminarEconomia').on('click',function(){ 
    $(".poli").remove();
});  
 })



//POLITICA 


 $("#btnPolitica").on("click",function(){
   
    $.ajax({
        method: "GET",
        url: `https://api.jornalia.net/api/v1/articles?apiKey=${key}&search=coronavirus+d%C3%B3lar&providers=Clarin%2CPagina12%2CLaNacion%2CTelam&categories=POLITICA%2CECONOMIA%2CSALUD&startDate=2020-10-01&endDate=2020-10-31`,
        success: function (data) {
            console.log("info  ", data.articles);
            d = data.articles;
            let i=0;
            for (let da of d) {
                if(d[i].imageUrl!=null && d[i].category ==="Política"){

                $("#noticiasPolitica").append(`
                
                <div class="col poli" id=""> 
                <div class="card " style="width: 18rem;">
  <img src="${d[i].imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="card-title">${d[i].category}</h1>
    <p class="card-text"> ${d[i].description}</p>
    
  </div>
</div>
    </div>
                
                
                `)
            }
     i++;
  
    }
   } 
  }) 
  $('#eliminarPolitica').on('click',function(){ 
    $(".poli").remove();
});  
 })





//img 


$("#coronaBtn").on("click",function(){
   
    $.ajax({
        method: "GET",
        url: `https://api.jornalia.net/api/v1/articles?apiKey=${key}&search=coronavirus`,
        success: function (data) {
            console.log("info  ", data.articles);
            d = data.articles;
            let i=0;
            console.log(data.articles);
            for (let da of d) {
                if(d[i].imageUrl!=null ){

                $("#noticiasPolitica").append(`
                
                <div class="col poli" id=""> 
                <div class="card " style="width: 18rem;">
  <img src="${d[i].imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h1 class="card-title">${d[i].category}</h1>
    <p class="card-text"> ${d[i].description}</p>
    
  </div>
</div>
    </div>
                
                
                `)
            }
     i++;
  
    }
   } 
  }) 
  $('#eliminarCorona').on('click',function(){ 
    $(".poli").remove();
});  
 })


 /*
// card3 btn2
let j=0;

$("#coronaBtn2").on("click",function(){
   
    $.ajax({
        method: "GET",
        url: `https://api.jornalia.net/api/v1/articles?apiKey=${key}&search=coronavirus`,
        success: function (data) {
            console.log("info  ", data.articles);
            d = data.articles;
           
            console.log(data.articles);
            
                
                    $('#coronaBtn2').on('click',function(){ 
                        $("#imgCard").remove();
                    });  
                    for (let da of d) {
                          $("#noticiasPoliticaCard").append(`
                             
                 <img src="${d[j].imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
   
    
  </div>
</div>
    </div>                
                `)
                     }
               
  
    }
   } 
 ) 
  
 })


 */





});