import { ConditionDisplay } from './conditionDisplay';
import { ForecastDisplay, StatisticDisplay } from './statisticDisplay';
import { WeatherData } from './weatherData';
import { WeatherStation } from './weatherStation';

describe('[Observer - begin] Weather station measurement changed', () => {
  it('display should be called when measurement changed', () => {
    // given
    const weatherStation = new WeatherStation();
    const data = new WeatherData(32.0, 0.8, 1.0);

    // when
    weatherStation.update(data);

    // then
    expect(weatherStation.updateCurrentConditionsDisplay()).toBe(
      'Current conditions: 32C degrees and 0.8% humidity'
    );
    expect(weatherStation.updateStatisticsDisplay()).toBe(
      'Avg/Max/Min temperature = 32/0.8/1'
    );
    expect(weatherStation.updateForecastDisplay()).toBe(
      'Forecast: More of the same'
    );
  });

  it('should display condtion when weather station data changed', () => { });

  // given
  const weatherStation = new WeatherStation();
  const data = new WeatherData(32.0, 0.8, 1.0);

  const conditionDisplay = new ConditionDisplay();
  const statisticDisplay = new StatisticDisplay();
  const forecastDisplay = new ForecastDisplay();
  weatherStation.registerObserver(conditionDisplay);
  weatherStation.registerObserver(statisticDisplay);
  weatherStation.registerObserver(forecastDisplay);


  // when 
  weatherStation.update(data);

  // then
  expect(conditionDisplay.display())
    .toBe('Current conditions: 32C degrees and 0.8% humidity');

  expect(statisticDisplay.display())
    .toBe('Avg/Max/Min temperature = 32/0.8/1');

  expect(forecastDisplay.display())
    .toBe('Forecast: More of the same');
});