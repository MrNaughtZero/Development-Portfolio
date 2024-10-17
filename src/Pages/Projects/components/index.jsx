import Wrapper from "@components/Wrapper/components";
import "../styles/index.scss";
import { ProjectData } from "../data/data";
import { ReactComponent as FolderIcon } from "@assets/icons/folder.svg";
import { ReactComponent as LinkIcon } from "@assets/icons/link.svg";
import { ReactComponent as GithubIcon } from "@assets/icons/github.svg";

export default function ProjectsPage() {
	return (
		<Wrapper page="Projects">
			<div className="projects">
				<ul className="projects__blocks">
					{ProjectData.map((project) => (
						<li key={project.id}>
							<div className="title">
								<FolderIcon />
								<h3>{project.title}</h3>
							</div>

							<p>{project.description}</p>
							<ul>
								{project.tags.map((tag) => (
									<li key={tag}>{tag}</li>
								))}
							</ul>
							{project.hasDemo && (
								<a
									href={project.src}
									target="_blank"
									rel="noreferrer"
									className="link"
								>
									<LinkIcon />
								</a>
							)}

							{!project.hasDemo && (
								<a
									href={project.src}
									target="_blank"
									rel="noreferrer"
									className="link"
								>
									<GithubIcon />
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
		</Wrapper>
	);
}
