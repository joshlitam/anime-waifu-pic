//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
function getFetch(){
  const checkBoxes = [...document.querySelectorAll('input')]
  const tags = checkBoxes.filter(x => x.checked == true).map(x => x.value)
  console.log(tags)
  let url = "https://api.waifu.im/search/?=included_tags="
  if (tags.length < 2) {
    url += tags
  } else {
    url += tags[0]
    for (i = 1; i < tags.length; i++) {
      url += `&${tags[i]}`
    }
  }
  console.log(url)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').src = data.images[0].url
        document.querySelector('img').hidden = false
        document.querySelector('h2').innerText = `Tag: ${tags.join(", ")}`
        document.querySelector('#link-source').innerText = ` ${data.images[0].source}`
        document.querySelector('a').href = data.images[0].source
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// <!DOCTYPE html>
// <html lang="en">
// 	<head>
//     	<meta charset="utf-8">
//     	<meta name="description" content="This is where your description goes">
//     	<meta name="keywords" content="one, two, three">

// 		<title>Title in the tab</title>

// 		<!-- external CSS link -->
// 		<link rel="stylesheet" href="css/normalize.css">
// 		<link rel="stylesheet" href="css/style.css">
// 	</head>
// 	<body>

// 		<h1>Anime Waifu Picture</h1>
// 		<label for="cars">Choose a tag:</label>
// 		<select name="cars" id="cars">
// 			<option value="volvo">Maid</option>
// 			<option value="saab">Waifu</option>
// 			<option value="opel">Marin-Kitagawa</option>
// 			<option value="audi">Mori-Calliope</option>
// 			<option value="audi">Raiden-Shogun</option>
// 			<option value="audi">Oppai</option>
// 			<option value="audi">Selfies</option>
// 			<option value="audi">Uniform</option>
// 			<option value="audi">Random</option>
// 		</select>
// 		<br><br>
// 		<button type="button" name="button">Get Picture</button>

// 		<h2>Name: </h2>
// 		<iframe src="" frameborder="0"></iframe>
// 		<img src="img/pokemon.jpeg" alt="">
// 		<h3>Description: </h3>

// 		<script type="text/javascript" src="js/main.js"></script>
// 	</body>
// </html>

