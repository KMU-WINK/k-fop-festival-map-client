
const apiKey = "624240076b1147a7ee604d6d83ea9190";

export const getWeather = async (city) => {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, {
        method: 'get',
        'Content-Type': 'application/json',
    });
    const data = await response.json();
    return data.weather[0];
};


export const getPopularBooth = () => {
    return [
        {
            thumbnailUrl : 'https://wink.kookmin.ac.kr/static/images/upload/IMG_20190626_014736_792.jpg',
            title : '예술대학 분장',
            bothCode : 'B-1',
        },
        {
            thumbnailUrl : 'https://wink.kookmin.ac.kr/static/images/upload/IMG_20190626_014736_792.jpg',
            title : '네이버',
            bothCode : 'A-1',
        },
        {
            thumbnailUrl : 'https://wink.kookmin.ac.kr/static/images/upload/IMG_20190626_014736_792.jpg',
            title : '윙크 대마초 체험',
            bothCode : 'A-1',
        },
    ];
};