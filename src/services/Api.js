const accessKey = 'a0e178e53c6e4077834d7d4b21b6311b';
const baseUrl = 'http://api.weatherbit.io/v2.0/';

export const hourlyForecast = `${baseUrl}history/hourly?key=${accessKey}&city=Chicago&start_date=2021-06-05&end_date=2021-06-06`
export const dailyForecast = `${baseUrl}forecast/daily?city_id={city_id}}&key=${accessKey}`

