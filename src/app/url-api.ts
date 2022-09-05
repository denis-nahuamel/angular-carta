import { environment } from "src/environments/environment";
export const url = (value: string) => {
    return environment.baseUrl + value + '?apiKey=f00157bf7721455aa324b7f04d4d8e46';
};