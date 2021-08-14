function attachEvents() {
    const locationsUrl = 'https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app/locations.json';
    const baseUrl = 'https://my-first-app-js-default-rtdb.europe-west1.firebasedatabase.app/'
    let weatherBtn = document.getElementById('submit')
    let locationName = document.getElementById('location')
    let currentDiv = document.getElementById('current')
    let forecastParentDiv = document.getElementById('forecast')
    let upcomingDiv = document.getElementById('upcoming')

    const symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'degrees': '&#176;',
    }

    weatherBtn.addEventListener('click', (e) => {

        fetch(locationsUrl)
            .then(res => res.json())
            .then(data => {
                let { code } = data.find(city => city.name === locationName.value)

                let current = fetch(baseUrl + `today/${code}.json`)
                    .then(res => res.json())


                let upcoming = fetch(baseUrl + `upcoming/${code}.json`)
                    .then(res => res.json())

                Promise.all([current, upcoming])
                    .then(showForecast)
                    .catch(err => console.log(err))
            })

    })

    function createElement(ele, classes, content) {
        let element = document.createElement(ele);
        element.className = classes;
        element.innerHTML = content;
        return element;
    }

    function showForecast([currData, upcData]) {
        forecastParentDiv.style.display = 'block';
        showCurrent(currData)
        showUpcoming(upcData);

    }

    function showCurrent(currData) {
        let forecastDiv = createElement('div', 'forecasts', '')

        let currentSymbol = symbols[currData.forecast.condition];
        let conditionSymbolSpan = createElement('span', 'condition symbol', currentSymbol);


        let conditionInfoSpan = createElement('span', 'condition', '');

        let forecastCitySpan = createElement('span', 'forecast-data', currData.name);

        let highLow = `${currData.forecast.low}${symbols.degrees}/${currData.forecast.high}${symbols.degrees}`;
        let forecastInfoSpan = createElement('span', 'forecast-data', highLow)

        let forecastConditionSpan = createElement('span', 'forecast-data', currData.forecast.condition)

        forecastDiv.appendChild(conditionSymbolSpan);
        currentDiv.appendChild(forecastDiv);
        conditionInfoSpan.appendChild(forecastCitySpan);
        conditionInfoSpan.appendChild(forecastInfoSpan);
        conditionInfoSpan.appendChild(forecastConditionSpan);


        forecastDiv.appendChild(conditionInfoSpan);


    }

    function showUpcoming(upcData) {
        let forecastInfo = createElement('div', 'forecast-info', '')
        upcData.forecast.forEach(obj => {

            let upcomingSpan = createElement('span', 'upcomig', '')

            let conditionSymbolSpan = createElement('span', 'symbol', symbols[obj.condition])

            let highLow = `${obj.low}${symbols.degrees}/${obj.high}${symbols.degrees}`;
            let forecastInfoSpan = createElement('span', 'forecast-data', highLow)
            let forecastConditionSpan = createElement('span', 'forecast-data', obj.condition)


            upcomingSpan.appendChild(conditionSymbolSpan)
            upcomingSpan.appendChild(forecastInfoSpan)
            upcomingSpan.appendChild(forecastConditionSpan)
            forecastInfo.appendChild(upcomingSpan)

        })
        upcomingDiv.appendChild(forecastInfo)
    }
}
attachEvents()