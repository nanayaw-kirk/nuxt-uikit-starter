import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

let Vue2FiltersConfig = {
	currency : {
		symbol: 'GHS',
		spaceBetweenAmountAndSymbol: true,
	},
	pluralize: {
		includeNumber: true
	}
}
Vue.use(Vue2Filters, Vue2FiltersConfig)