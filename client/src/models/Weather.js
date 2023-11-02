export class Weather {
  constructor(data) {
    this.city = data.city // 
    this.data.temp = data.list[0].main.temp
    this.data.temp_min = data.list[0].main.temp_min
    this.data.temp_max = data.list[0].main.temp_max
    this.data.feels_like = data.list[0].main.feels_like
    this.data.weatherIcon = data.list[0].weather[0].icon
    this.details.weather = data.list[0].weather[0].description
    this.details.location = data.city.name
    this.details.timezone = data.city.timezone // pre-formatting / shift in seconds from UTC
    this.details.sunrise = data.city.sunrise // pre-formatting
    this.details.sunset = data.city.sunset // pre-formatting
    this.details.humidity = data.list[0].main.humidity
    this.conditions.clouds = data.list[0].clouds // % coverage cloudiness
    this.conditions.rain = data.list[0].rain ? data.list[0].rain : { '3h': 0 } // 3 hr rain volume in mm
    this.conditions.snow = data.list[0].snow ? data.list[0].snow : { '3h': 0 } // 3 hr snow volume in mm
    this.conditions.visibility = data.list[0].visibility // % coverage cloudiness
    this.conditions.wind = data.list[0].wind
  }
}

const weather = // https://api.openweathermap.org/data/2.5/forecast?id=5586437&appid={key}
{
  "list": [
    {
      "dt": 1698926400, // time of data calc
      "main": {
        "temp": 281.93,
        "feels_like": 281.93,
        "temp_min": 281.93,
        "temp_max": 284.75,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 924,
        "humidity": 72,
        "temp_kf": -2.82
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.21,
        "deg": 160,
        "gust": 0.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-02 12:00:00"
    },
    {
      "dt": 1698937200,
      "main": {
        "temp": 282.78,
        "feels_like": 281.4,
        "temp_min": 282.78,
        "temp_max": 284.48,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 924,
        "humidity": 62,
        "temp_kf": -1.7
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.71,
        "deg": 85,
        "gust": 3.1
      },
      "visibility": 10000,
      "pop": 0.28,
      "rain": {
        "3h": 0.13
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-02 15:00:00"
    },
    {
      "dt": 1698948000,
      "main": {
        "temp": 284.3,
        "feels_like": 282.99,
        "temp_min": 284.3,
        "temp_max": 285.49,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 925,
        "humidity": 58,
        "temp_kf": -1.19
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.08,
        "deg": 36,
        "gust": 1.1
      },
      "visibility": 10000,
      "pop": 0.24,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-02 18:00:00"
    },
    {
      "dt": 1698958800,
      "main": {
        "temp": 284.39,
        "feels_like": 283.45,
        "temp_min": 284.39,
        "temp_max": 284.39,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 924,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.93,
        "deg": 16,
        "gust": 1.02
      },
      "visibility": 10000,
      "pop": 0.68,
      "rain": {
        "3h": 0.81
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-02 21:00:00"
    },
    {
      "dt": 1698969600,
      "main": {
        "temp": 282.44,
        "feels_like": 282.01,
        "temp_min": 282.44,
        "temp_max": 282.44,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 925,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.48,
        "deg": 138,
        "gust": 2.11
      },
      "visibility": 7562,
      "pop": 1,
      "rain": {
        "3h": 4.75
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 00:00:00"
    },
    {
      "dt": 1698980400,
      "main": {
        "temp": 282.9,
        "feels_like": 282.9,
        "temp_min": 282.9,
        "temp_max": 282.9,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 926,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.07,
        "deg": 202,
        "gust": 1.31
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 3.81
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 03:00:00"
    },
    {
      "dt": 1698991200,
      "main": {
        "temp": 283.03,
        "feels_like": 283.03,
        "temp_min": 283.03,
        "temp_max": 283.03,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 926,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.51,
        "deg": 188,
        "gust": 0.6
      },
      "visibility": 10000,
      "pop": 0.8,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 06:00:00"
    },
    {
      "dt": 1699002000,
      "main": {
        "temp": 283.15,
        "feels_like": 283.15,
        "temp_min": 283.15,
        "temp_max": 283.15,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 925,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.5,
        "deg": 223,
        "gust": 0.52
      },
      "visibility": 10000,
      "pop": 0.04,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 09:00:00"
    },
    {
      "dt": 1699012800,
      "main": {
        "temp": 281.63,
        "feels_like": 281.63,
        "temp_min": 281.63,
        "temp_max": 281.63,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 925,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.47,
        "deg": 317,
        "gust": 0.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-03 12:00:00"
    },
    {
      "dt": 1699023600,
      "main": {
        "temp": 282.12,
        "feels_like": 282.12,
        "temp_min": 282.12,
        "temp_max": 282.12,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 926,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.05,
        "deg": 287,
        "gust": 1.01
      },
      "visibility": 10000,
      "pop": 0.36,
      "rain": {
        "3h": 0.13
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 15:00:00"
    },
    {
      "dt": 1699034400,
      "main": {
        "temp": 284.32,
        "feels_like": 283.74,
        "temp_min": 284.32,
        "temp_max": 284.32,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 926,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.42,
        "deg": 259,
        "gust": 1.01
      },
      "visibility": 10000,
      "pop": 0.24,
      "rain": {
        "3h": 0.13
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 18:00:00"
    },
    {
      "dt": 1699045200,
      "main": {
        "temp": 287.26,
        "feels_like": 286.55,
        "temp_min": 287.26,
        "temp_max": 287.26,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 925,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 65
      },
      "wind": {
        "speed": 1.96,
        "deg": 294,
        "gust": 2.01
      },
      "visibility": 10000,
      "pop": 0.16,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-03 21:00:00"
    },
    {
      "dt": 1699056000,
      "main": {
        "temp": 285.97,
        "feels_like": 285.27,
        "temp_min": 285.97,
        "temp_max": 285.97,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 924,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 1.13,
        "deg": 360,
        "gust": 1.1
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 00:00:00"
    },
    {
      "dt": 1699066800,
      "main": {
        "temp": 283.83,
        "feels_like": 282.94,
        "temp_min": 283.83,
        "temp_max": 283.83,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 924,
        "humidity": 76,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 61
      },
      "wind": {
        "speed": 1.59,
        "deg": 104,
        "gust": 1.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 03:00:00"
    },
    {
      "dt": 1699077600,
      "main": {
        "temp": 283.59,
        "feels_like": 282.57,
        "temp_min": 283.59,
        "temp_max": 283.59,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 924,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 67
      },
      "wind": {
        "speed": 2.51,
        "deg": 93,
        "gust": 2.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 06:00:00"
    },
    {
      "dt": 1699088400,
      "main": {
        "temp": 283.51,
        "feels_like": 282.4,
        "temp_min": 283.51,
        "temp_max": 283.51,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 923,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.98,
        "deg": 90,
        "gust": 2.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 09:00:00"
    },
    {
      "dt": 1699099200,
      "main": {
        "temp": 283.46,
        "feels_like": 282.27,
        "temp_min": 283.46,
        "temp_max": 283.46,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 922,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.04,
        "deg": 88,
        "gust": 2.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-04 12:00:00"
    },
    {
      "dt": 1699110000,
      "main": {
        "temp": 284.53,
        "feels_like": 283.37,
        "temp_min": 284.53,
        "temp_max": 284.53,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 922,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.15,
        "deg": 98,
        "gust": 1.93
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 15:00:00"
    },
    {
      "dt": 1699120800,
      "main": {
        "temp": 283.71,
        "feels_like": 282.99,
        "temp_min": 283.71,
        "temp_max": 283.71,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 922,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.68,
        "deg": 132,
        "gust": 5.81
      },
      "visibility": 6917,
      "pop": 0.96,
      "rain": {
        "3h": 1.94
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 18:00:00"
    },
    {
      "dt": 1699131600,
      "main": {
        "temp": 283.78,
        "feels_like": 283.33,
        "temp_min": 283.78,
        "temp_max": 283.78,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 921,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.16,
        "deg": 167,
        "gust": 3.82
      },
      "visibility": 7418,
      "pop": 1,
      "rain": {
        "3h": 7.75
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-04 21:00:00"
    },
    {
      "dt": 1699142400,
      "main": {
        "temp": 284.22,
        "feels_like": 283.81,
        "temp_min": 284.22,
        "temp_max": 284.22,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 921,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.43,
        "deg": 117,
        "gust": 2.41
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 3.69
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 00:00:00"
    },
    {
      "dt": 1699153200,
      "main": {
        "temp": 283.65,
        "feels_like": 283.24,
        "temp_min": 283.65,
        "temp_max": 283.65,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 921,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.62,
        "deg": 149,
        "gust": 1.7
      },
      "visibility": 9855,
      "pop": 1,
      "rain": {
        "3h": 4.25
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 03:00:00"
    },
    {
      "dt": 1699164000,
      "main": {
        "temp": 283.85,
        "feels_like": 283.22,
        "temp_min": 283.85,
        "temp_max": 283.85,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 920,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.96,
        "deg": 108,
        "gust": 4.11
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 3.38
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 06:00:00"
    },
    {
      "dt": 1699174800,
      "main": {
        "temp": 283.43,
        "feels_like": 282.79,
        "temp_min": 283.43,
        "temp_max": 283.43,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 919,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.52,
        "deg": 113,
        "gust": 5.5
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 6.13
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 09:00:00"
    },
    {
      "dt": 1699185600,
      "main": {
        "temp": 282.5,
        "feels_like": 280.92,
        "temp_min": 282.5,
        "temp_max": 282.5,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 919,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.94,
        "deg": 118,
        "gust": 2.7
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.63
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-05 12:00:00"
    },
    {
      "dt": 1699196400,
      "main": {
        "temp": 282.02,
        "feels_like": 281.47,
        "temp_min": 282.02,
        "temp_max": 282.02,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 920,
        "humidity": 84,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 69
      },
      "wind": {
        "speed": 1.54,
        "deg": 132,
        "gust": 1.51
      },
      "visibility": 10000,
      "pop": 0.4,
      "rain": {
        "3h": 0.19
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 15:00:00"
    },
    {
      "dt": 1699207200,
      "main": {
        "temp": 285.46,
        "feels_like": 284.57,
        "temp_min": 285.46,
        "temp_max": 285.46,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 921,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 48
      },
      "wind": {
        "speed": 1.29,
        "deg": 216,
        "gust": 1.11
      },
      "visibility": 10000,
      "pop": 0.4,
      "rain": {
        "3h": 0.13
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 18:00:00"
    },
    {
      "dt": 1699218000,
      "main": {
        "temp": 286.91,
        "feels_like": 285.83,
        "temp_min": 286.91,
        "temp_max": 286.91,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 920,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 4
      },
      "wind": {
        "speed": 1.64,
        "deg": 253,
        "gust": 2.42
      },
      "visibility": 10000,
      "pop": 0.24,
      "rain": {
        "3h": 0.19
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-05 21:00:00"
    },
    {
      "dt": 1699228800,
      "main": {
        "temp": 285.36,
        "feels_like": 284.18,
        "temp_min": 285.36,
        "temp_max": 285.36,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 919,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 2
      },
      "wind": {
        "speed": 1.29,
        "deg": 47,
        "gust": 1.4
      },
      "visibility": 10000,
      "pop": 0.04,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 00:00:00"
    },
    {
      "dt": 1699239600,
      "main": {
        "temp": 283.33,
        "feels_like": 281.94,
        "temp_min": 283.33,
        "temp_max": 283.33,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 918,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 7
      },
      "wind": {
        "speed": 2.9,
        "deg": 83,
        "gust": 2.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 03:00:00"
    },
    {
      "dt": 1699250400,
      "main": {
        "temp": 282.9,
        "feels_like": 281.12,
        "temp_min": 282.9,
        "temp_max": 282.9,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 916,
        "humidity": 57,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 31
      },
      "wind": {
        "speed": 3.44,
        "deg": 93,
        "gust": 3.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 06:00:00"
    },
    {
      "dt": 1699261200,
      "main": {
        "temp": 283.39,
        "feels_like": 281.93,
        "temp_min": 283.39,
        "temp_max": 283.39,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 914,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 3.81,
        "deg": 91,
        "gust": 4.41
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 09:00:00"
    },
    {
      "dt": 1699272000,
      "main": {
        "temp": 283.5,
        "feels_like": 282.31,
        "temp_min": 283.5,
        "temp_max": 283.5,
        "pressure": 1008,
        "sea_level": 1008,
        "grnd_level": 914,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 3.71,
        "deg": 140,
        "gust": 8.7
      },
      "visibility": 10000,
      "pop": 0.48,
      "rain": {
        "3h": 0.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-06 12:00:00"
    },
    {
      "dt": 1699282800,
      "main": {
        "temp": 283.41,
        "feels_like": 282.4,
        "temp_min": 283.41,
        "temp_max": 283.41,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 915,
        "humidity": 73,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.15,
        "deg": 200,
        "gust": 10.5
      },
      "visibility": 10000,
      "pop": 0.84,
      "rain": {
        "3h": 1.06
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 15:00:00"
    },
    {
      "dt": 1699293600,
      "main": {
        "temp": 284.79,
        "feels_like": 283.52,
        "temp_min": 284.79,
        "temp_max": 284.79,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 917,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.03,
        "deg": 262,
        "gust": 10
      },
      "visibility": 10000,
      "pop": 0.8,
      "rain": {
        "3h": 1.94
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 18:00:00"
    },
    {
      "dt": 1699304400,
      "main": {
        "temp": 287.03,
        "feels_like": 285.47,
        "temp_min": 287.03,
        "temp_max": 287.03,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 916,
        "humidity": 38,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 40
      },
      "wind": {
        "speed": 7.19,
        "deg": 267,
        "gust": 10.11
      },
      "visibility": 10000,
      "pop": 0.68,
      "rain": {
        "3h": 0.69
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-06 21:00:00"
    },
    {
      "dt": 1699315200,
      "main": {
        "temp": 284.32,
        "feels_like": 282.59,
        "temp_min": 284.32,
        "temp_max": 284.32,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 916,
        "humidity": 42,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 63
      },
      "wind": {
        "speed": 4.12,
        "deg": 283,
        "gust": 9.71
      },
      "visibility": 10000,
      "pop": 0.56,
      "rain": {
        "3h": 0.19
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2023-11-07 00:00:00"
    },
    {
      "dt": 1699326000,
      "main": {
        "temp": 281.4,
        "feels_like": 280.84,
        "temp_min": 281.4,
        "temp_max": 281.4,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 917,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 72
      },
      "wind": {
        "speed": 1.47,
        "deg": 21,
        "gust": 4.22
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-07 03:00:00"
    },
    {
      "dt": 1699336800,
      "main": {
        "temp": 280.45,
        "feels_like": 280.45,
        "temp_min": 280.45,
        "temp_max": 280.45,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 918,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 50
      },
      "wind": {
        "speed": 1.22,
        "deg": 196,
        "gust": 1.22
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-07 06:00:00"
    },
    {
      "dt": 1699347600,
      "main": {
        "temp": 279.72,
        "feels_like": 278.05,
        "temp_min": 279.72,
        "temp_max": 279.72,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 919,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 33
      },
      "wind": {
        "speed": 2.33,
        "deg": 131,
        "gust": 2.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2023-11-07 09:00:00"
    }
  ],
  "city": {
    "id": 5586437,
    "name": "Boise",
    "coord": {
      "lat": 43.6135,
      "lon": -116.2035
    },
    "country": "US",
    "population": 0,
    "timezone": -21600,
    "sunrise": 1698934892,
    "sunset": 1698971707
  }
}