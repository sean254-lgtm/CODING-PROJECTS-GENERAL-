function getAverage(avgScores){
  let sum = 0;
  for(const score of avgScores){
    sum += score;
  }
  return sum / avgScores.length;
}

function getGrade(score){
  if(score === 100){
    return "A+";
  } else if(score >= 90 && score <= 99){
    return "A";
  } else if(score >= 80 && score <=89){
    return "B";
  } else if(score >= 70 && score <=79){
    return "C";
  } else if(score >= 60 && score <=69){
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score){
  if (getGrade(score) !== "F"){
    return true;
  } else {
    return false;
  }
}

function studentMsg(scores, stdScore){
  const average = getAverage(scores);
  const grade = getGrade(stdScore);
  const passed = hasPassingGrade(stdScore);

  if(passed){
    return `Class average: ${average} Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average} Your grade: ${grade}. You failed the course.`;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

console.log(getAverage([15, 25, 35, 45, 55, 60, 70, 60]));

console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
