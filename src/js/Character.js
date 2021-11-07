export default class Character {
  constructor(name, type) {
    
    const typePlayer = [
      "Bowman",
      "Daemon",
      "Magician",
      "Swordsman",
      "Undead",
      "Zombie",
    ];

    if (typeof name !== "string") {
      throw new Error("Ошибка! Имя должно быть строкой!");
    }
    else if (name.length < 2 || name.length > 10) {
       throw new Error ("Ошибка! Количество символов от 2 до 10!");
     }
     else {
       this.name = name;
     }

     if (!typePlayer.includes(type)) {
       throw new Error ("Ошибка! такой игрок не существует!");
     }
     else {
       this.type = type;
     }
    
     this.health = 100;
     this.length = 1;
}

    levelUp(){
      if (this.health > 0){
        this.health = 100;
        this.level += 1;
        this.attack *= 1.2;
        this.deffence *= 1.2;
      }
      else {
        throw new Error("Ошибка! Нельзя повысить уровень умершего!");
      }
      return 1;
    }
  
    damage(points) {
      if (this.health > 0) {
        this.health -= points * (1 - this.deffence / 100);
      }
      if (this.health < 0) {
        this.health = 0;
      }

  }
}
