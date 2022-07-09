import { WebsiteCarbonCalculator, WebsiteCarbonCalculatorError } from 'website-carbon-calculator';

try {
  const websiteCarbonCalculator = new WebsiteCarbonCalculator({pagespeedApiKey: 'AIzaSyCRfDfysyLpYSYaqqf3NPZZ8jxEXdwymkE'});
  const result = websiteCarbonCalculator.calculateByURL('https://www.jasonheppler.org');
  console.log(result);
} catch (error) {
  if(error instanceof WebsiteCarbonCalculatorError){
    console.warn(error.message);
  }
  console.log("everything OK");
}
