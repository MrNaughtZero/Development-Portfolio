import Wrapper from "@components/Wrapper/components";
import "../styles/index.scss";
import { skills } from "../data/skills";

export default function HomePage() {
	return (
		<Wrapper page="Home">
			<div className="intro">
				<p>
					Hey! I'm Neil. I'm the Lead Developer at a UK-based WordPress agency. Day to
					day, I work with WordPress, PHP and Javascript. I could probably develop you a
					WordPress website in my sleep! I'm also a big fan of React which is what this
					website is built with.
				</p>
				<p>
					Outside of work, I usually spend my time playing video games, watching TV or
					spending time with my family. I'm also a big fan of football and support
					Liverpool!
				</p>
			</div>

			<div className="skills">
				<h2>Skills & Technologies</h2>
				<ul>
					{skills.map((skill, index) => (
						<li key={index}>{skill}</li>
					))}
				</ul>
			</div>
		</Wrapper>
	);
}
