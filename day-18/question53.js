// Pulling Apart a Nested Object:
;
var programmerSkills = {
    languages: ["Python", "Typescript", "Javascript"],
    tools: ["VS Code", "Sublime Text", "Atom"],
    frameWorks: ["React", "Angular", "Vue"]
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameWorks = programmerSkills.frameWorks;
console.log("The skills of a programmer include:\n- ".concat(languages[0], ", ").concat(tools[0], ", and ").concat(frameWorks[0], "."));
