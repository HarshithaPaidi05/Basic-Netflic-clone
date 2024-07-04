let movies = [
   {
      name:"dasara",
      poster:"https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_04/story_29463/assets/2.jpeg?time=1680590468",
      rating:9
   },
   {
      name:"love story",
      poster:"https://files.prokerala.com/movies/pics/800/birthday-poster-of-sai-pallavi-movie-113601.jpg",
      rating:7
   },
   {
      name:"Most Eligible Bachelor",
      poster:"https://i.pinimg.com/736x/c0/15/d6/c015d6f343aa87b648e26a3687790797.jpg",
      rating:9.5
   },
   {
      name:"Miss shetty Mr polishetty",
      poster:"https://i.pinimg.com/736x/ba/64/68/ba6468e8e5dfb8c52dad0b50af73eb25.jpg",
      rating:8.5
   },
   {
      name:"Premalu",
      poster:"https://pbs.twimg.com/media/GHbyt4_WYAA1Buz.jpg:large",
      rating:9.2
   },
   {
      name:"Tillu square",
      poster:"https://feeds.abplive.com/onecms/images/uploaded-images/2024/01/01/72857401f76ee61b2541f5c70121b2622bcad.jpeg?impolicy=abp_cdn&imwidth=800",
      rating:9.3
   },
   {
      name:"Hanuman",
      poster:"https://imagevars.gulfnews.com/2023/07/01/hanuman-poster_18911bf9a9d_original-ratio.jpg",
      rating:9.5
   },
   {
      name:"Majili",
      poster:"https://i.pinimg.com/736x/89/37/05/8937054984fbba8769c797ebccb4ba82.jpg",
      rating:9

   },
   {
      name:"Devara",
      poster:"https://pbs.twimg.com/media/GD2mMJuXcAAWpS2.jpg:large",
      rating:9
   },
   {
      name:"BRO",
      poster:"https://m.media-amazon.com/images/M/MV5BN2M2ZTM2MzMtZGMzMy00Yzc2LWEwNTUtNTI4OGJiNzYwZTUxXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
      rating:9.5
   },
   {
      name:"Guntur Kaaram",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGa7kWxjFToSHwWtmendqDUvRG2qZR6-GcMw&usqp=CAU",
      rating:9
   },
   {
      name:"Ala Vaikuntapuramlo",
      poster:"https://www.scrolldroll.com/wp-content/uploads/2022/06/ala-vaikunthapuramloo-best-telugu-movies-netflix.jpg",
      rating: 8
   },

]

function SearchMovie()
{
   let movieName = document.getElementById('search').value;

   if(movieName!=="")
   {

      let result = movies.filter(function(movie)
      {
         return movie.name.toUpperCase().includes(movieName.toUpperCase())
      })

      displayMovies(result);
   }

   else{
      displayMovies(movies);
   }
  



}

/*function displayMovies()
{
   let movieDIV = document.createElement("div");
   movieDIV.classList.add("movie");

   let overlayDIV = document.createElement("div");
   overlayDIV.classList.add("overlay");

 

   movieDIV.appendChild(overlayDIV);

   console.log(movieDIV);
}

displayMovies();*/


function displayMovies(data)
{
   document.getElementById("movies").innerHTML="";

   let htmlString = ``;

   for(let i=0 ; i<data.length;i++)
   {
      
       htmlString=htmlString+`
          <div class="movie">
      <div class="overlay">

         <div class="video">

         </div>

         <div class="details">
            <h1>${data[i].name}</h1>
            <h2>IMDB : ${data[i].rating}</h2>
            

         </div>

      </div>
      <img class="poster" src="${data[i].poster}" alt="poster">

   </div> 
   `
   }

   console.log(htmlString);

   document.getElementById('movies').innerHTML=htmlString;
}

displayMovies(movies);



