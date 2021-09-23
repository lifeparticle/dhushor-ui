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

export const ROUTING_URLS = {
	home: "/home",
	about: "/about",
	all: "*",
};

export const tags = {
	"arts and entertainment":
		["Art", "Books", "Comics", "Fiction", "Film", "Gaming", "Humor", "Music", "Nonfiction", "Photography", "Podcasts", "Poetry", "TV", "Visual Design"],
	"culture":
		["Culture", "Food", "Language", "Makers", "Outdoors", "Pets", "Philosophy", "Sports", "Style", "Travel", "True Crime"],
	"equality":
		["Accessibility", "Disability", "Equality", "Feminism", "LGBTQIA", "Race"],
	"health":
		["Addiction", "Coronavirus", "Fitness", "Health", "Mental Health"],
	"industry":
		["Business", "Design", "Economy", "Freelancing", "Leadership", "Marketing", "Media", "Product Management", "Remote Work", "Startups", "UX", "Venture Capital", "Work"],
	"personal development":
		["Creativity", "Mindfulness", "Money", "Productivity", "Writing"],
	"politics":
		["Gun Control", "Immigration", "Justice", "Politics"],
	"programming":
		["Android Dev", "Data Science", "iOS Dev", "Javascript", "Machine Learning", "Programming", "Software Engineer"],
	"science":
		["Biotech", "Climate Change", "Math", "Neuroscience", "Psychology", "Science", "Space"],
	"self":
		["Astrology", "Beauty", "Family", "Lifestyle", "Parenting", "Relationships", "Self", "Sexuality", "Spirituality"],
	"society":
		["Basic Income", "Cannabis", "Cities", "Education", "History", "Psychedelics", "Religion", "San Francisco", "Social Media", "Society", "Transportation", "World"],
	"technology":
		["Artificial Intelligence", "Blockchain", "Cryptocurrency", "Cybersecurity", "Digital Life", "Future", "Gadgets", "Privacy", "Self-Driving Car", "Technology"]
}