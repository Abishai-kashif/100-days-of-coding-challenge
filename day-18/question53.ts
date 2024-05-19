// Pulling Apart a Nested Object:

interface programmerSkillsType {
    languages: string[],
    tools: string[],
    frameWorks: string[]
};


let programmerSkills: programmerSkillsType = {
    languages: ["Python", "Typescript", "Javascript"],
    tools: ["VS Code", "Sublime Text", "Atom"],
    frameWorks: ["React", "Angular", "Vue"]
};


let { languages, tools, frameWorks} = programmerSkills;

console.log(`The skills of a programmer include:
- ${languages[0]}, ${tools[0]}, and ${frameWorks[0]}.`);

