//process.stdout.write('hello from spinner2.js... \rheyyy\n');

let character = ['\r| ', '\r/ ', '\r- ', '\r\\ ', '\r| ', '\r/ ', '\r- ', '\r\\ '];
let time = 100;

for (let key of character) {

  setTimeout(() => {
    process.stdout.write(key);
  }, time);
  time += 300;
}