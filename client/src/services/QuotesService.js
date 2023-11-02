import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { bcwSandbox } from "./AxiosService.js";

class QuotesService {

  async getQuote() {
    const res = await bcwSandbox.get('api/quotes');
    AppState.widgets.quote = new Quote(res.data);
  }

}

export const quotesService = new QuotesService();