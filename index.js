let menuSteam = document.querySelector('header p.steam');
let subMenuSteam = document.querySelector('div.menuSteam');
let menuView = document.querySelector('header p.view');
let subMenuView = document.querySelector('div.menuView');
let menuFriends = document.querySelector('header  p.friends');
let subMenuFriends = document.querySelector('div.menuFriends');
let menuGames = document.querySelector('header p.games');
let subMenuGames = document.querySelector('div.menuGames');
let menuHelp = document.querySelector('header p.help');
let subMenuHelp = document.querySelector('div.menuHelp');


menuSteam.addEventListener('click', function() {
    subMenuSteam.classList.toggle('invisible');
    subMenuView.classList.add('invisible');
    subMenuFriends.classList.add('invisible');
    subMenuGames.classList.add('invisible');
    subMenuHelp.classList.add('invisible');
});
menuView.addEventListener('click', function() {
    subMenuView.classList.toggle('invisible');
    subMenuSteam.classList.add('invisible');
    subMenuFriends.classList.add('invisible');
    subMenuGames.classList.add('invisible');
    subMenuHelp.classList.add('invisible');
});
menuFriends.addEventListener('click', function() {
    subMenuFriends.classList.toggle('invisible');
    subMenuView.classList.add('invisible');
    subMenuSteam.classList.add('invisible');
    subMenuGames.classList.add('invisible');
    subMenuHelp.classList.add('invisible');
});
menuGames.addEventListener('click', function() {
    subMenuGames.classList.toggle('invisible');
    subMenuView.classList.add('invisible');
    subMenuSteam.classList.add('invisible');
    subMenuFriends.classList.add('invisible');
    subMenuHelp.classList.add('invisible');
});
menuHelp.addEventListener('click', function() {
    subMenuHelp.classList.toggle('invisible');
    subMenuView.classList.add('invisible');
    subMenuSteam.classList.add('invisible');
    subMenuFriends.classList.add('invisible');
    subMenuGames.classList.add('invisible');
});






























