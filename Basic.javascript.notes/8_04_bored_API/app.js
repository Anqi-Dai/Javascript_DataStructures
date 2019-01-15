// this will be the js file that does everyting

const boredAPI = new bored();

const ui = new UI();

boredAPI
  .getEasyOne("easy", 1)
  .then(dat => console.log(dat))
  .catch(err => console.log(err));
