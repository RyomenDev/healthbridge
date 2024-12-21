import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBitbucket,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
import { faServer, faKey } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faBitbucket, faGitlab, faServer, faKey);
import AzureIcon from "./azure";

// Export reusable components
export const GitHubIcon = () => <FontAwesomeIcon icon={["fab", "github"]} />;
export const BitBucketIcon = () => (
  <FontAwesomeIcon icon={["fab", "bitbucket"]} />
);
export const AzureDevOpsIcon = () => (
  // <FontAwesomeIcon icon={["fab", "azure"]} />
  //   <img src="./azure.svg" alt="Azure DevOps" />
  <AzureDevOpsIcon style={{ width: "30px", height: "30px", fill: "blue" }} />
);
export const GitLabIcon = () => <FontAwesomeIcon icon={["fab", "gitlab"]} />;
export const SelfHostedIcon = () => (
  <FontAwesomeIcon icon={["fas", "server"]} />
);
export const SSOIcon = () => <FontAwesomeIcon icon={["fas", "key"]} />;
