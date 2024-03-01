import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Coming soon",
    tags: ["NextJS,", " ", "Shadcn UI,", " ", "MUI"],
    description: "This is my portfolio made with NextJS",
    image: "/comingsoon.jpg",
    url: "/",
  },
  {
    id: 2,
    title: "Coming soon",
    tags: ["project", " ", "design"],
    description: "Project 2 description",
    image: "/comingsoon.jpg",
    url: "/",
  },
  {
    id: 3,
    title: "Coming soon",
    tags: ["project", " ", "design"],
    description: "Project 3 description",
    image: "/comingsoon.jpg",
    url: "/",
  },
  {
    id: 4,
    title: "Coming soon",
    tags: ["project", " ", "design"],
    description: "Project 4 description",
    image: "/comingsoon.jpg",
    url: "/",
  },
];

const Project = () => {
  return (
    <section className="">
      <div className="">
        <p className="text-lg md:text-2xl font-semibold md:tracking-wide">
          My Projects
        </p>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 my-4 md:my-6 lg:my-8 justify-between items-center">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardActionArea href={project.url}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent className="p-2 md:p-4 lg:p-6">
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="text-sm font-normal md:text-lg lg:text-xl"
                >
                  {project.title}
                </Typography>
                {/* <Typography
                  variant="body2"
                  className="text-xs text-gray-400 font-normal md:text-sm lg:text-md"
                >
                  {project.tags}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="text-xs font-normal md:text-md lg:text-lg"
                >
                  {project.description}
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Project;
