#!/usr/bin/env node

class Fazilat{
    profession: string
    professionalLink: string

    constructor(profession:string, professionalLink:string){
        this.profession= profession
        this.professionalLink= professionalLink
    }
    
    getCurrentInfo():string{
        return `\nProfession: ${this.profession}, Professional Link: ${this.professionalLink}\n`
        
    }
    getCurrentinfo():string{
        return `\nOn Going Studies: ${this.profession}, Professional Link: ${this.professionalLink}\n`
        
    }
}

let currentInfo = new Fazilat ("Freelancer", "https://www.linkedin.com/in/fazilatjahan")
let currentStudies = new Fazilat("Genrative AI Engineering", "https://github.com/Fazilat-Jahan")

console.log(currentInfo.getCurrentInfo());
console.log(currentStudies.getCurrentinfo());

