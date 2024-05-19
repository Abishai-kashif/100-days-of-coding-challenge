// Assigns Grades to Students based on their Test Scores :

// this takes scores from 0 to 100 & returns grades based on score
function assignGrade(score: number) {
	if (score >= 90 && score <= 100) {
		return "A+";
	} else if (score >= 80 && score < 90) {
		return "A";
	} else if (score >= 70 && score < 80) {
		return "B";
	} else if (score >= 60 && score < 70) {
		return "C";
	} else if (score >= 50 && score < 60) {
		return "D";
	} else if (score >= 33 && score < 50) {
		return "E";
	} else if (score < 33 && score >= 0) {
		return "F";
	} else {
		return "Enter Valid Score";
	}
}

let grade: string = assignGrade(98);
console.log(grade); // "A+"
