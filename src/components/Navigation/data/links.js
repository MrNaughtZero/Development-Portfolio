import { ReactComponent as HomeIcon } from "@assets/icons/square.svg";
import { ReactComponent as ProjectsIcon } from "@assets/icons/folder.svg";
import { ReactComponent as LinksIcon } from "@assets/icons/link.svg";

export const links = [
	{
		id: 1,
		path: "/",
		label: "Home",
		icon: HomeIcon,
	},
	{
		id: 2,
		path: "/projects",
		label: "Projects",
		icon: ProjectsIcon,
	},
	{
		id: 5,
		path: "mailto:hello@neilmcnaught.dev",
		label: "Contact",
		icon: LinksIcon,
	},
];
