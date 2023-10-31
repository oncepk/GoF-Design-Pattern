import { WeatherData } from "./weatherData";
import { WeatherObserver } from "./weatherObserver";

export class StatisticDisplay implements WeatherObserver {
    private data: WeatherData | undefined ;

    update(data: WeatherData): void {
        this.data =data;
    }

    display(): string {
        if (!this.data) {
            throw new Error('No data');
        }
        return `Avg/Max/Min temperature = ${this.data.temperature}/${this.data.humidity}/${this.data.pressure}`;
    }

}

export class ForecastDisplay implements WeatherObserver {
    private data: WeatherData | undefined;

    update(data: WeatherData): void {
        this.data = data;
    }

    display(): string {
        if (!this.data) {
            throw new Error('No data');
        }
        return `Forecast: More of the same`;
    }

}