// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
const drivers2  = [...drivers, name];

return drivers2;
}

function prependDriver(name) {
  const drivers2 = [name,...drivers];

  return drivers2;
}

function removeLastDriver() {
  const drivers2 = drivers.slice(0,2);

  return drivers2;
}

function removeFirstDriver() {
  const drivers2 = drivers.slice(1);

  return drivers2;
}
