import { Chip, Typography, Box } from "@mui/material";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: { name: string; type: string }[];
  liveUrl: string;
  githubUrl: string;
  id: string;
}

interface ProjectsScreenProps {
  projects: Project[];
  selectedProject: number;
}

const ProjectsScreen = ({ projects, selectedProject }: ProjectsScreenProps) => {
  const project = projects[selectedProject];
  return (
    <Box sx={{ p: 2, color: "#4ade80" }}>
      <Chip
        label={`PROJECT #${project.id}`}
        size="small"
        sx={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          borderRadius: "8px",
          px: 1,
          backgroundColor: "rgba(59,130,246,0.2)",
          color: "#3b82f6",
          borderColor: "rgba(59,130,246,0.3)",
        }}
      />
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", mb: 1, color: "#86efac" }}
      >
        {project.title.toUpperCase()}
      </Typography>
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: "80px",
          objectFit: "cover",
          borderRadius: 1,
          border: "2px solid #22c55e",
          mb: 1.5,
        }}
      />
      <Typography
        variant="body2"
        sx={{ mb: 1.5, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5, color: "#86efac" }}
      >
        {project.description}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
        {project.technologies.slice(0, 3).map((tech, i) => (
          <Chip
            key={i}
            label={tech.name}
            size="small"
            sx={{
              fontSize: "0.7rem",
              fontWeight: "bold",
              borderRadius: "8px",
              px: 1,
              backgroundColor: "rgba(234,179,8,0.2)",
              color: "#eab308",
              borderColor: "rgba(234,179,8,0.3)",
            }}
          />
        ))}
      </Box>
      <Box sx={{ fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5 }}>
        <Typography variant="body2">USE ↑↓ TO NAVIGATE</Typography>
        <Typography variant="body2">
          PROJECT {selectedProject + 1} OF {projects.length}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, color: "#4ade80" }}>
          PRESS POWER FOR HOME
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectsScreen;
