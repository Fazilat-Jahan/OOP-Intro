#!/usr/bin/env node
class Fazilat {
    profession;
    professionalLink;
    constructor(profession, professionalLink) {
        this.profession = profession;
        this.professionalLink = professionalLink;
    }
    getCurrentInfo() {
        return `\nProfession: ${this.profession}, Professional Link: ${this.professionalLink}\n`;
    }
    getCurrentinfo() {
        return `\nOn Going Studies: ${this.profession}, Professional Link: ${this.professionalLink}\n`;
    }
}
let currentInfo = new Fazilat("Freelancer", "https://www.linkedin.com/in/fazilatjahan");
let currentStudies = new Fazilat("Genrative AI Engineering", "https://github.com/Fazilat-Jahan");
console.log(currentInfo.getCurrentInfo());
console.log(currentStudies.getCurrentinfo());
export {};
