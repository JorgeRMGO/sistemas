<script>
import { onMounted, ref } from 'vue';
import { Link, router } from '@inertiajs/vue3';

export default {
	name: 'Aside',
	methods: {
		logout() {
			router.post(route('logout'));
		}
	},
	components: {
		Link,
	},
	props: {
		user: {
			type: Object,
			default: () => ({
				avatar: 'assets/media/avatars/300-1.jpg',
				name: 'Nombre de Usuario',
				role: 'Rol de Usuario',
				profileLink: '/user-profile'
			})
		}
	},
};
</script>

<template>
	<div id="kt_aside" class="aside pt-7 pb-4 pb-lg-7 pt-lg-17" data-kt-drawer="true" data-kt-drawer-name="aside"
		data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
		data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start"
		data-kt-drawer-toggle="#kt_aside_toggle">
		<!--begin::Brand-->
		<div class="aside-logo flex-column-auto px-9 mb-9 mb-lg-17 mx-auto" id="kt_aside_logo">
			<!--begin::Logo-->
			<a href="index.html">
				<img alt="Logo" src="assets/media/logos/default.svg" class="h-30px logo theme-light-show" />
				<img alt="Logo" src="assets/media/logos/default-dark.svg" class="h-30px logo theme-dark-show" />
			</a>
			<!--end::Logo-->
		</div>
		<!--end::Brand-->
		<!--begin::Aside user-->
		<div class="aside-user mb-5 mb-lg-10" id="kt_aside_user">
			<!--begin::User-->
			<div class="d-flex align-items-center flex-column">
				<!--begin::Symbol-->
				<div class="symbol symbol-75px mb-4">
					<img src="assets/media/avatars/300-1.jpg" alt="" />
				</div>
				<!--end::Symbol-->
				<!--begin::Info-->
				<div class="text-center">
					<!--begin::Username-->
					<a href="pages/user-profile/overview.html"
						class="text-gray-800 text-hover-primary fs-4 fw-bolder">Paul Melone</a>
					<!--end::Username-->
					<!--begin::Description-->
					<span class="text-gray-600 fw-semibold d-block fs-7 mb-1">Python Dev</span>
					<!--end::Description-->
				</div>
				<!--end::Info-->
			</div>
			<!--end::User-->
		</div>
		<!--end::Aside user-->
		<!--begin::Aside menu-->
		<div class="aside-menu flex-column-fluid ps-3 ps-lg-5 pe-1 mb-9" id="kt_aside_menu">
			<!--begin::Aside Menu-->
			<div class="w-100 hover-scroll-y pe-2 me-2" id="kt_aside_menu_wrapper" data-kt-scroll="true"
				data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto"
				data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_user, #kt_aside_footer"
				data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset="0">
				<!--begin::Menu-->
				<div class="menu menu-column menu-rounded menu-sub-indention fw-semibold" id="#kt_aside_menu"
					data-kt-menu="true">
					<!--begin:Menu item-->
					<div data-kt-menu-trigger="click" class="menu-item here show menu-accordion">
						<!--begin:Menu link-->
						<span class="menu-link">
							<span class="menu-icon">
								<i class="ki-duotone ki-home-2 fs-2">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</span>
							<span class="menu-title">Dashboards</span>
							<span class="menu-arrow"></span>
						</span>
						<!--end:Menu link-->
						<!--begin:Menu sub-->
						<div class="menu-sub menu-sub-accordion">
							<!--begin:Menu item-->
							<div class="menu-item">
								<!--begin:Menu link-->
								<a class="menu-link active" href="index.html">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">Default</span>
								</a>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->
							<!--begin:Menu item-->
							<div class="menu-item">
								<!--begin:Menu link-->
								<a class="menu-link" href="dashboards/ecommerce.html">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">eCommerce</span>
								</a>
								<!--end:Menu link-->
							</div>
							<!--end:Menu item-->


						</div>
						<!--end:Menu sub-->
					</div>
					<!--end:Menu item-->
					<!--begin:Menu item-->
					<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
						<!--begin:Menu link-->
						<span class="menu-link">
							<span class="menu-icon">
								<i class="ki-duotone ki-gift fs-2">
									<span class="path1"></span>
									<span class="path2"></span>
									<span class="path3"></span>
									<span class="path4"></span>
								</i>
							</span>
							<span class="menu-title">Pages</span>
							<span class="menu-arrow"></span>
						</span>
						<!--end:Menu link-->
						<!--begin:Menu sub-->
						<div class="menu-sub menu-sub-accordion">
							<!--begin:Menu item-->
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<!--begin:Menu link-->
								<span class="menu-link">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">User Profile</span>
									<span class="menu-arrow"></span>
								</span>
								<!--end:Menu link-->
								<!--begin:Menu sub-->
								<div class="menu-sub menu-sub-accordion">
									<!--begin:Menu item-->
									<div class="menu-item">
										<!--begin:Menu link-->
										<a class="menu-link" href="pages/user-profile/overview.html">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">Overview</span>
										</a>
										<!--end:Menu link-->
									</div>

								</div>
								<!--end:Menu sub-->
							</div>

						</div>
						<!--end:Menu sub-->
					</div>
					<!--end:Menu item-->
					<!--begin:Menu item-->
					<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
						<!--begin:Menu link-->
						<span class="menu-link">
							<span class="menu-icon">
								<i class="ki-duotone ki-abstract-26 fs-2">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</span>
							<span class="menu-title">Apps</span>
							<span class="menu-arrow"></span>
						</span>
						<!--end:Menu link-->
						<!--begin:Menu sub-->
						<div class="menu-sub menu-sub-accordion">
							<!--begin:Menu item-->
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<!--begin:Menu link-->
								<span class="menu-link">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">Projects</span>
									<span class="menu-arrow"></span>
								</span>
								<!--end:Menu link-->
								<!--begin:Menu sub-->
								<div class="menu-sub menu-sub-accordion">
									<!--begin:Menu item-->
									<div class="menu-item">
										<!--begin:Menu link-->
										<a class="menu-link" href="apps/projects/list.html">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">My Projects</span>
										</a>
										<!--end:Menu link-->
									</div>
									<!--end:Menu item-->

								</div>
								<!--end:Menu sub-->
							</div>
							<!--end:Menu item-->

						</div>
						<!--end:Menu sub-->
					</div>
					<!--end:Menu item-->
					<!--begin:Menu item-->
					<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
						<!--begin:Menu link-->
						<span class="menu-link">
							<span class="menu-icon">
								<i class="ki-duotone ki-abstract-35 fs-2">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</span>
							<span class="menu-title">Utilities</span>
							<span class="menu-arrow"></span>
						</span>
						<!--end:Menu link-->
						<!--begin:Menu sub-->
						<div class="menu-sub menu-sub-accordion">
							<!--begin:Menu item-->
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<!--begin:Menu link-->
								<span class="menu-link">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">Modals</span>
									<span class="menu-arrow"></span>
								</span>
								<!--end:Menu link-->
								<!--begin:Menu sub-->
								<div class="menu-sub menu-sub-accordion menu-active-bg">
									<!--begin:Menu item-->
									<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
										<!--begin:Menu link-->
										<span class="menu-link">
											<span class="menu-bullet">
												<span class="bullet bullet-dot"></span>
											</span>
											<span class="menu-title">General</span>
											<span class="menu-arrow"></span>
										</span>
										<!--end:Menu link-->
										<!--begin:Menu sub-->
										<div class="menu-sub menu-sub-accordion menu-active-bg">
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link"
													href="utilities/modals/general/invite-friends.html">
													<span class="menu-bullet">
														<span class="bullet bullet-dot"></span>
													</span>
													<span class="menu-title">Invite Friends</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="utilities/modals/general/view-users.html">
													<span class="menu-bullet">
														<span class="bullet bullet-dot"></span>
													</span>
													<span class="menu-title">View Users</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="utilities/modals/general/select-users.html">
													<span class="menu-bullet">
														<span class="bullet bullet-dot"></span>
													</span>
													<span class="menu-title">Select Users</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="utilities/modals/general/upgrade-plan.html">
													<span class="menu-bullet">
														<span class="bullet bullet-dot"></span>
													</span>
													<span class="menu-title">Upgrade Plan</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
											<!--begin:Menu item-->
											<div class="menu-item">
												<!--begin:Menu link-->
												<a class="menu-link" href="utilities/modals/general/share-earn.html">
													<span class="menu-bullet">
														<span class="bullet bullet-dot"></span>
													</span>
													<span class="menu-title">Share & Earn</span>
												</a>
												<!--end:Menu link-->
											</div>
											<!--end:Menu item-->
										</div>
										<!--end:Menu sub-->
									</div>
									<!--end:Menu item-->

								</div>
								<!--end:Menu sub-->
							</div>
							<!--end:Menu item-->
						</div>
						<!--end:Menu sub-->
					</div>
					<!--end:Menu item-->
					<!--begin:Menu item-->
					<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
						<!--begin:Menu link-->
						<span class="menu-link">
							<span class="menu-icon">
								<i class="ki-duotone ki-briefcase fs-2">
									<span class="path1"></span>
									<span class="path2"></span>
								</i>
							</span>
							<span class="menu-title">Administracion</span>
							<span class="menu-arrow"></span>
						</span>
						<!--end:Menu link-->
						<!--begin:Menu sub-->
						<div class="menu-sub menu-sub-accordion">
							<div data-kt-menu-trigger="click" class="menu-item menu-accordion">
								<div class="menu-item">
								<!--begin:Menu link-->
								<Link :href="route('roles.index')" class="menu-link active" href="index.html">
									<span class="menu-bullet">
										<span class="bullet bullet-dot"></span>
									</span>
									<span class="menu-title">Roles</span>
								</Link>
								<!--end:Menu link-->
							</div>
							</div>

						</div>
						<!--end:Menu sub-->
					</div>
					<!--end:Menu item-->
				</div>
				<!--end::Menu-->
			</div>
			<!--end::Aside Menu-->
		</div>
		<!--end::Aside menu-->
		<!--begin::Footer-->
		<div class="aside-footer flex-column-auto px-6 px-lg-9" id="kt_aside_footer">
			<!--begin::User panel-->
			<div class="d-flex flex-stack ms-7">
				<!--begin::Link-->
				<a @click.prevent="logout" href="#"
					class="btn btn-sm btn-icon btn-active-color-primary btn-icon-gray-600 btn-text-gray-600">
					<i class="ki-duotone ki-entrance-left fs-1 me-2">
						<span class="path1"></span>
						<span class="path2"></span>
					</i>
					<!--begin::Major-->
					<span class="d-flex flex-shrink-0 fw-bold">Log Out</span>
					<!--end::Major-->
				</a>
				<!--end::Link-->
				<!--begin::User menu-->
				<div class="ms-1">
					<div class="btn btn-sm btn-icon btn-icon-gray-600 btn-active-color-primary position-relative me-n1"
						data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="top-start">
						<i class="ki-duotone ki-setting-2 fs-1">
							<span class="path1"></span>
							<span class="path2"></span>
						</i>
					</div>
					<!--begin::User account menu-->
					<div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
						data-kt-menu="true">
						<!--begin::Menu item-->
						<div class="menu-item px-3">
							<div class="menu-content d-flex align-items-center px-3">
								<!--begin::Avatar-->
								<div class="symbol symbol-50px me-5">
									<img alt="Logo" src="assets/media/avatars/300-1.jpg" />
								</div>
								<!--end::Avatar-->
								<!--begin::Username-->
								<div class="d-flex flex-column">
									<div class="fw-bold d-flex align-items-center fs-5">Max Smith
										<span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
									</div>
									<a href="#" class="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
								</div>
								<!--end::Username-->
							</div>
						</div>
						<!--end::Menu item-->
						<!--begin::Menu separator-->
						<div class="separator my-2"></div>
						<!--end::Menu separator-->
						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<a href="account/overview.html" class="menu-link px-5">My Profile</a>
						</div>
						<!--end::Menu item-->
						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<a href="apps/projects/list.html" class="menu-link px-5">
								<span class="menu-text">My Projects</span>
								<span class="menu-badge">
									<span class="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
								</span>
							</a>
						</div>
						<!--end::Menu item-->
						<!--begin::Menu item-->
						<div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
							data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
							<a href="#" class="menu-link px-5">
								<span class="menu-title">My Subscription</span>
								<span class="menu-arrow"></span>
							</a>
							<!--begin::Menu sub-->
							<div class="menu-sub menu-sub-dropdown w-175px py-4">
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/referrals.html" class="menu-link px-5">Referrals</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/billing.html" class="menu-link px-5">Billing</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/statements.html" class="menu-link px-5">Payments</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/statements.html"
										class="menu-link d-flex flex-stack px-5">Statements
										<span class="ms-2 lh-0" data-bs-toggle="tooltip" title="View your statements">
											<i class="ki-duotone ki-information-5 fs-5">
												<span class="path1"></span>
												<span class="path2"></span>
												<span class="path3"></span>
											</i>
										</span></a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu separator-->
								<div class="separator my-2"></div>
								<!--end::Menu separator-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<div class="menu-content px-3">
										<label class="form-check form-switch form-check-custom form-check-solid">
											<input class="form-check-input w-30px h-20px" type="checkbox" value="1"
												checked="checked" name="notifications" />
											<span class="form-check-label text-muted fs-7">Notifications</span>
										</label>
									</div>
								</div>
								<!--end::Menu item-->
							</div>
							<!--end::Menu sub-->
						</div>
						<!--end::Menu item-->
						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<a href="account/statements.html" class="menu-link px-5">My Statements</a>
						</div>
						<!--end::Menu item-->
						<!--begin::Menu separator-->
						<div class="separator my-2"></div>
						<!--end::Menu separator-->
						<!--begin::Menu item-->
						<div class="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
							data-kt-menu-placement="right-start" data-kt-menu-offset="-15px, 0">
							<a href="#" class="menu-link px-5">
								<span class="menu-title position-relative">Language
									<span
										class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
										<img class="w-15px h-15px rounded-1 ms-2"
											src="assets/media/flags/united-states.svg" alt="" /></span></span>
							</a>
							<!--begin::Menu sub-->
							<div class="menu-sub menu-sub-dropdown w-175px py-4">
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/settings.html" class="menu-link d-flex px-5 active">
										<span class="symbol symbol-20px me-4">
											<img class="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
										</span>English</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/settings.html" class="menu-link d-flex px-5">
										<span class="symbol symbol-20px me-4">
											<img class="rounded-1" src="assets/media/flags/spain.svg" alt="" />
										</span>Spanish</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/settings.html" class="menu-link d-flex px-5">
										<span class="symbol symbol-20px me-4">
											<img class="rounded-1" src="assets/media/flags/germany.svg" alt="" />
										</span>German</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/settings.html" class="menu-link d-flex px-5">
										<span class="symbol symbol-20px me-4">
											<img class="rounded-1" src="assets/media/flags/japan.svg" alt="" />
										</span>Japanese</a>
								</div>
								<!--end::Menu item-->
								<!--begin::Menu item-->
								<div class="menu-item px-3">
									<a href="account/settings.html" class="menu-link d-flex px-5">
										<span class="symbol symbol-20px me-4">
											<img class="rounded-1" src="assets/media/flags/france.svg" alt="" />
										</span>French</a>
								</div>
								<!--end::Menu item-->
							</div>
							<!--end::Menu sub-->
						</div>
						<!--end::Menu item-->
						<!--begin::Menu item-->
						<div class="menu-item px-5 my-1">
							<a href="account/settings.html" class="menu-link px-5">Account Settings</a>
						</div>
						<!--end::Menu item-->
						<!--begin::Menu item-->
						<div class="menu-item px-5">
							<a href="authentication/layouts/corporate/sign-in.html" class="menu-link px-5">Sign Out</a>
						</div>
						<!--end::Menu item-->
					</div>
					<!--end::User account menu-->
				</div>
				<!--end::User menu-->
			</div>
			<!--end::User panel-->
		</div>
		<!--end::Footer-->
	</div>

</template>
