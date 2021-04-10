function components(input) {
    let result = {};
    input.forEach(line => {
        let [system, component, subcomponent] = line.split(' | ');

        if (!result[system]) {
            result[system] = {};
        }
        if (!result[system][component]) {
            result[system][component] = [];
        }
        result[system][component].push(subcomponent);
    });

    Object.entries(result).sort((curr, next) => {
        return Object.entries(next[1]).length - Object.entries(curr[1]).length || curr[0].localeCompare(next[0]);
    }).forEach(([sys, componen]) => {
        console.log(sys);
        Object.entries(componen).sort((curr, next) => {
            return next[1].length - curr[1].length;
        }).forEach(([compo, subcompo]) => {
            console.log(`|||${compo}`);
            subcompo.forEach(sub => console.log(`||||||${sub}`))
        })
    })

}
components(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])