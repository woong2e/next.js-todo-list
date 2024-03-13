export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
	// {
	// 	label: "Home",
	// 	href: "/",
	// },
	{
		label: "Todos",
		href: "/todos",
	}, 
	{
		label: "Counter",
		href: "/counter",
	}, 
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/woong2e",
		velog: "https://velog.io/@woong2e/posts",
		chat_gpt: "https://chat.openai.com/",
    	sponsor: "https://www.youtube.com/@dev_jeongdaeri"
	},
};
