const say = require('say');

var texts = [
  'Are you sure?',
  'You can do better, come on!',
  'Ugly code!',
  'muhahaha',
  'a',
]

function shouldSpeak() {
  var date = new Date();
  if(date > new Date("Fri Jan 12 2018 20:14:29 GMT+0100 (CET)")) {
    if(Math.floor(Math.random() * 10) > 6) {
      return true;
    }
  }
  return false;
}

function itsMe() {
  if(shouldSpeak()) {
    var textIndex = Math.floor(Math.random() * (texts.length));
    say.speak(texts[textIndex]);
  }
}

itsMe();