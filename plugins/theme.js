import {mapGetters} from 'vuex'
import Vue from 'vue'

const Theme = {
	install (Vue, options){
		Vue.mixin({
			computed : {
				...mapGetters({
					colorMode : 'theme/theme',
				})
			},
		})
	}
}

Vue.use(Theme)