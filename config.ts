import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://gorillamind.com/products/hmb?variant=42940013903917",
  match: "https://www.builder.io/c/docs/**",
  selector: `//*[@id="shopify-section-template--16806935101485__main"]`,
  maxPagesToCrawl: ,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
