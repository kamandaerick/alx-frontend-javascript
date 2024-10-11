interface MajorCredits {
 credits: number;
 _majorBrand: 'majorCredits';
}

interface Mainorredits {
  credits: number;
  _minorBrand: 'minorCredits';
}

function sumMajorCredits(subjects: MajorCredits[]): number {
  let total = 0;
  for (let i = 0; i < subjects.length; i++) {
    total += subjects[i].credits;
  }
  return total;
}

function sumMinorCredits(subjects: Mainorredits[]): number {
  let total = 0;
  for (let i = 0; i < subjects.length; i++) {
    total += subjects[i].credits;
  }
  return total;
}