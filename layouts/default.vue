<template>
	<div>
		<template v-if="loaded">
			<main class="uk-inline uk-width-1-1" :class="colorMode">
				<div class="uk-width-1-1 background app">
					<navs-main-nav></navs-main-nav>
					<nuxt/>
				</div>
			</main>
		</template>
		<app-splash-screen v-else></app-splash-screen>
	</div>
</template>
<script>
import boot from "@/mixins/boot"
export default{
	mixins : [boot],
	head(){
		return{
			title : `${this.$appName}`
		}
	}
};
</script>
