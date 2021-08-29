import { FaPen, FaEtsy, FaBook, FaCuttlefish } from "react-icons/fa";
import { GoLogoGist } from "react-icons/go";

export const NOOPENER_NOREFERRER = "noopener,noreferrer";
export let links = [
	{
		key: "1",
		title: "Gist Github",
		description: "this description",
		cover: GoLogoGist,
		link: "https://gist.github.com/",
		enable: true,
	},
	{
		key: "2",
		title: "ProWritingAid",
		description: "this description",
		cover: FaPen,
		link: "https://prowritingaid.com/Free",
		enable: true,
	},
	{
		key: "3",
		title: "Grammarly",
		description: "this description",
		cover: FaBook,
		link: "https://app.grammarly.com/docs/new",
		enable: true,
	},
	{
		key: "4",
		title: "Hemingway Editor",
		description: "this description",
		cover: FaEtsy,
		link: "http://www.hemingwayapp.com/",
		enable: true,
	},
	{
		key: "5",
		title: "Carbon Now Sh",
		description: "this description",
		cover: FaCuttlefish,
		link: "https://carbon.now.sh/",
		enable: true,
	},
];
