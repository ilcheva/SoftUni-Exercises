function table(input) {
    let output = '<table>\n';

    let data = [];

    input.forEach(e => {
        data.push(JSON.parse(e));
    })

    output += arrayAsTable(data) + '</table>';
    console.log(output);

    function arrayAsTable(data) {
        let result = '';

        data.forEach(x => {
            result += '\t<tr>\n';

            Object.values(x).forEach(v => {
                result +=`\t\t<td>${v}</td>\n`
            })
            result += '\t</tr>\n';
        })
        return result;
    }
    
    
}
table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])