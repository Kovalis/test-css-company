import ready from "../js/utils/documentReady.js";
import { selectWrap } from "./common/select.js";
import noUiSlider from "nouislider";
// import getScrollSize from "../js/utils/getScrollSize.js";

ready(function () {
  //custom selets
  selectWrap();

  //range
  let range = document.querySelectorAll('.range');

  if(range){
      range.forEach((item) => {
        const startValue = 75;
          noUiSlider.create(item, {
              start: startValue,
              step: 1,
              range: {
                  'min': 0,
                  'max': 100
              }
          });

          const rangeText = item.closest(".order-block").querySelector(".js-range__value");
          const rangeValue = item.closest(".order-block").querySelector(".js-range__value-input");
          if(rangeText){
            rangeText.innerText = startValue;

            item.noUiSlider.on('update', function (values, handle) {
              rangeText.innerText = Math.round(values[handle]);
              rangeValue.value = Math.round(values[handle]);
            });
          }
      });
  }
});
