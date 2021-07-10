function filter(input, criteria) {
    let employees = JSON.parse(input);
    let [key, value] = criteria.split('-');
    employees
        .filter(x => x[key] == value || key == 'all')
        .forEach((x, i) => {
            console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);

        });


        
}
filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')