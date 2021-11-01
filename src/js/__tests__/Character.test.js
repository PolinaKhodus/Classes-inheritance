import Character from "../Character";
import Bowman from "../Bowman";
import Daemon from "../Daemon";
import Magician from "../Magician";
import Swordsman from "../Swordsman";
import Undead from "../Undead";
import Zombie from "../Zombie";

test("Заданный персонаж не существует", () => {
  expect(() => {
    const result = new Character("xxx", "Fairy");
    return result;
  }).toThrow();
});


test('should return the created Bowman', () => {
  expect(new Bowman('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Bowman',
    attack: 25,
    deffence: 25,
  });
});


test('should return the created Daemon', () => {
  expect(new Daemon('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Daemon',
    attack: 10,
    deffence: 40,
  });
});


test('should return the created Magician', () => {
  expect(new Magician('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Magician',
    attack: 10,
    deffence: 40,
  });
});


test('should return the created Swordsman', () => {
  expect(new Swordsman('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    deffence: 10,
  });
});

test('should return the created Undead', () => {
  expect(new Undead('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Undead',
    attack: 25,
    deffence: 25,
  });
});

test('should return the created Zombie', () => {
  expect(new Zombie('John')).toEqual({
    name: 'John',
    health: 100,
    level: 1,
    type: 'Zombie',
    attack: 40,
    deffence: 10,
  });
});
