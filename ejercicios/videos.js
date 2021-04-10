const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;
// Parsear datos
// Obtener el total de segundos de los videos de tipo Redux
// Tip: Obtener un array de objetos, donde cada objeto sea un video
// {min:5, seg: 59, tipo: 'Redux Video'}


const miArra = str.split('<ul').join(',').split('</ul').join(',').split('</li>').join(`,`).split('<li ').join(`,`).split('=').join(',').split('>').join(',').split(',');

const videos = [];

let i = 2;

while(i < miArra.length-1){
  let video = {data: miArra[(i+1)], time: miArra[(i+2)], type: miArra[(i+3)]};
  //console.log(video);
  i+=4;
  videos.push(video);
}

console.log(videos);
console.log(videos.filter(video => video.type == "Redux Video"));

function calcSeconds() {
  let segundos=0;
  const query = videos.filter(video => video.type == "Redux Video");
  console.log(query);
  for (const vid of query) {
    console.log(vid);
    let segundo = parseInt(vid.time.slice(-3,-1));
    console.log(segundo);
    segundos += segundo;
  }
  console.log(segundos);
}

console.log(calcSeconds());




























