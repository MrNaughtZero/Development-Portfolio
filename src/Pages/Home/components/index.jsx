import Wrapper from "@components/Wrapper/components";
import "../styles/index.scss";
import { skills } from "../data/skills";

export default function HomePage() {
	return (
		<Wrapper page="Home">
			<div className="intro">
				<p>
					Hey! I'm Neil. I'm a UK-based Freelance Software Developer, specialising in Web
					Development. Day to day, I work with WordPress, PHP and Javascript. I could
					probably develop you a WordPress website in my sleep! I'm also a big fan of
					React which is what this website is built with.
				</p>
				<p>
					Outside of work, you will still probably find me at my Mac tinkering with some
					code. Right now I'm learning SwiftUI and I'm also working on a few personal
					projects ~ watch this space!
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
