function getAverage(testScore){
  let total=0;
  let average=0;
  for(let i=0; i < testScore.length; i++){
    total+=testScore[i];
  }
  average = total/testScore.length;
  return average;
}

function getGrade(studentScore){
  let grade="";
  if(studentScore === 100){
    grade= "A+";
  }else if(studentScore >= 90 && studentScore <= 99){
    grade= "A";
  }else if(studentScore >= 80 && studentScore <= 89){
    grade= "B";
  }else if(studentScore >= 70 && studentScore <= 79){
    grade= "C";
  }else if(studentScore >= 60 && studentScore <= 69){
    grade= "D";
  }else{
    grade= "F";
  }
  return grade;
}

function hasPassingGrade(studentScore){
  if(studentScore >= 60){
    return true
  }else{
    return false;
  }
}

function studentMsg(testScore, studentScore){
  let average= getAverage(testScore);
  let grade= getGrade(studentScore);

  if(hasPassingGrade(studentScore)){
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  } else{
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))
