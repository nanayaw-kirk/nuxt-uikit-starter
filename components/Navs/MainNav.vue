<template>
	<header class="uk-width-1-1">
		<section class="uk-width-1-1 nav" uk-sticky>
			<div class="uk-container uk-container-expand">
				<nav class="uk-navbar-container uk-margin uk-navbar-transparent uk-width-1-1 uk-padding-small uk-padding-remove-horizontal uk-flex uk-flex-middle" uk-navbar>
					<div class="uk-navbar-left uk-padding-remove-horizontal">

						<nuxt-link :to="{name : 'index'}" class="uk-navbar-item uk-logo uk-padding-remove-horizontal uk-margin-right uk-flex uk-flex-middle">
							<app-logo width="35"></app-logo>
							<span>
								{{$appName}}
							</span>
						</nuxt-link>


						
						
<!-- 
						<ul class="uk-navbar-nav uk-visible@m" id="navigation-links">
							<li>
								<nuxt-link :to="{name: 'why-us'}" exact exact-active-class="uk-background-muted uk-border-rounded">
									Why SmartSuite?
								</nuxt-link>
							</li>

						</ul> -->



					</div>

					<div class="uk-navbar-right">
						<app-themer></app-themer>

						<div class="uk-navbar-item uk-visible@m">
							<nuxt-link :to="{name: 'request-demo'}" class="uk-button uk-button-primary">
								Request A Demo
							</nuxt-link>
						</div>

						<div class="uk-navbar-item uk-hidden@m" @click.prevent="$uikit.modal($refs.dialog).show()">
							<a href="">
								|||
							</a>
						</div>
					</div>

				</nav>
			</div>
		</section>

		<div ref="dialog" class="uk-flex-top" uk-modal>
			<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-border-rounded-lg uk-animation-scale-up uk-animation-fast">

				<button class="uk-modal-close-default" type="button" uk-close></button>

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

			</div>
		</div>
	</header>
</template>

<style scoped>
.uk-navbar-item, .uk-navbar-nav>li>a {
	min-height: 40px;
}
</style>

