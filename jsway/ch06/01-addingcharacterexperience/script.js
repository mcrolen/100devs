// TODO: create the character object here
const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  describe() {
    return `${this.name} has ${this.health} HP, ${this.strength} strength, and ${this.xp} XP.`
  }
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());