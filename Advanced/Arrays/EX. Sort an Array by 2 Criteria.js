function sorting(input) {
     input.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return -1;
        }
    }).forEach(e => console.log(e));

}
sorting(['test', 
'Deny', 
'omen', 
'Default'])