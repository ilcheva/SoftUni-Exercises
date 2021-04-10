function solve(name, age, weigth, height) {
    let bmi = Math.round(Number(weigth) / ((Number(height) / 100) * (Number(height) / 100)));
    let status = calcStatus(bmi);

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weigth,
            height: height,
        },
        BMI: bmi,
        status: status,
    };

    if (status == 'obese') {
       person.recommendation = 'admission required';
    };
    return person;

    function calcStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }
}

solve('Peter', 29, 75, 182)
solve('Honey Boo Boo', 9, 57, 137)