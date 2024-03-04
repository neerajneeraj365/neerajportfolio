import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center h-20">
      <div className="flex items-center">
        <span className="text-md md:text-lg">Let's Connect:</span>
        <ul className="flex px-2 gap-2">
          <li>
            <Link href="mailto:nikatwork365@gmail.com">
              <EmailIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/neerajneerajweb/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/neerajbharrdwaj/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/neerajneeraj365" target="_blank">
              <GitHubIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
