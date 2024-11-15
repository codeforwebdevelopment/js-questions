Example-

querySelector(“div.caption”).

querySelector(‘h1’).textContent

document.querySelector(“div > p”);

document.querySelector(“a[target]”);

querySelector(‘a’).click();

document.querySelector(“#demo”).innerHTML

querySelector(“h2, h3”).style.backgroundColor = “red”;

Example-

<!DOCTYPE html>

<html>

<head>

<title>Learning About Nodes</title>

<style>

* { border: 2px solid #dedede; padding: 15px; margin: 15px; }

html { margin: 0; padding: 0; }

body { max-width: 600px; font-family: sans-serif; color: #333; }

</style>

</head>

<body>

<h1>Shark World</h1>

<p>The world’s leading source on <strong>shark</strong> related information.</p>

<h2 id=”myHeading” class=”dummy”>Types of Sharks</h2>

<ul>

<li>Hammerhead</li>

<li>Tiger</li>

<li>Great White</li>

</ul>

</body>

<script>

console.log(document.getElementById(“myHeading”).className)

const h1 = document.getElementsByTagName(‘h1’);

const p = document.getElementsByTagName(‘p’)[0];

const ul = document.getElementsByTagName(‘ul’)[0];

console.log(h1)

</script>

</html>




If you want to check a particular tag you can do that

console.log(document.head)

It will return

Head tag


