import { useState } from "react";
import {
  Button as MuiButton,
  Chip,
  Box,
  Paper,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Power,
  Volume2,
  Monitor,
  User,
  Briefcase,
  Phone,
  Code,
  Zap,
} from "lucide-react";

import reactSvg from "@/assets/react.svg";

const PokeDexDevice = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      image: reactSvg,
      technologies: [
        { name: "React", type: "water" as const },
        { name: "Node.js", type: "grass" as const },
        { name: "MongoDB", type: "electric" as const },
        { name: "Stripe", type: "fire" as const },
      ],
      liveUrl: "https://demo-store.example.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      id: "001",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard built with React and D3.js. Provides real-time data visualization and business intelligence insights.",
      image: reactSvg,
      technologies: [
        { name: "React", type: "water" as const },
        { name: "D3.js", type: "electric" as const },
        { name: "TypeScript", type: "fire" as const },
        { name: "PostgreSQL", type: "grass" as const },
      ],
      liveUrl: "https://analytics-demo.example.com",
      githubUrl: "https://github.com/yourusername/dashboard",
      id: "002",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: reactSvg,
      technologies: [
        { name: "Vue.js", type: "grass" as const },
        { name: "Socket.io", type: "electric" as const },
        { name: "Express", type: "fire" as const },
        { name: "Redis", type: "water" as const },
      ],
      liveUrl: "https://tasks-demo.example.com",
      githubUrl: "https://github.com/yourusername/task-manager",
      id: "003",
    },
  ];

  const skills = [
    { name: "React", icon: Code, type: "water" as const, level: 95 },
    { name: "Next.js", icon: Zap, type: "dark" as const, level: 92 },
    { name: "TypeScript", icon: Code, type: "electric" as const, level: 90 },
    {
      name: "JavaScript (ES6+)",
      icon: Code,
      type: "grass" as const,
      level: 88,
    },
    { name: "Tailwind CSS", icon: Zap, type: "fire" as const, level: 85 },
    { name: "MUI", icon: Code, type: "psychic" as const, level: 70 },
    { name: "MongoDB", icon: Code, type: "ground" as const, level: 60 },
    { name: "Pandas", icon: Code, type: "psychic" as const, level: 50 },
    { name: "Numpy", icon: Code, type: "psychic" as const, level: 50 },
    { name: "matplotlib", icon: Code, type: "psychic" as const, level: 45 },
  ];

  const navigateProject = (direction: "up" | "down") => {
    if (direction === "up" && selectedProject > 0) {
      setSelectedProject(selectedProject - 1);
    } else if (direction === "down" && selectedProject < projects.length - 1) {
      setSelectedProject(selectedProject + 1);
    }
  };

  const chipBaseStyle = {
    size: "small",
    variant: "outlined",
    sx: {
      fontSize: "0.7rem",
      fontWeight: "bold",
      borderRadius: "8px",
      px: 1,
    },
  };

  const textBase = {
    fontFamily: "monospace",
    fontSize: "0.8rem",
    lineHeight: 1.5,
  };

  // const navigateProject = (dir: string) => {
  //   if (!projects) return;
  //   if (dir === "up" || dir === "right") {
  //     setSelectedProject((prev) => (prev + 1) % projects.length);
  //   } else if (dir === "down" || dir === "left") {
  //     setSelectedProject(
  //       (prev) => (prev - 1 + projects.length) % projects.length
  //     );
  //   }
  // };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <Box sx={{ p: 2, textAlign: "center", color: "#4ade80" }}>
            <Chip
              label="TRAINER: Narayan Jariwala"
              size="small"
              sx={{
                ...chipBaseStyle.sx,
                backgroundColor: "rgba(34,197,94,0.2)",
                color: "#22c55e",
                borderColor: "rgba(34,197,94,0.3)",
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, color: "#86efac" }}
            >
              POKÉDEX PORTFOLIO
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, ...textBase, color: "#86efac" }}
            >
              Welcome to my digital Pokédex! I'm a Full Stack Developer who
              catches bugs 🐛 and builds amazing web applications.
            </Typography>
            <Box sx={textBase}>
              <Typography variant="body2">
                STATUS: React/Next developer
              </Typography>
              <Typography variant="body2">LOCATION: WORLDWIDE</Typography>
              <Typography variant="body2">TYPE: FULL-STACK</Typography>
            </Box>
          </Box>
        );

      case "projects": {
        const project = projects[selectedProject];
        return (
          <Box sx={{ p: 2, color: "#4ade80" }}>
            <Chip
              label={`PROJECT #${project.id}`}
              size="small"
              sx={{
                ...chipBaseStyle.sx,
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
              sx={{ mb: 1.5, ...textBase, color: "#86efac" }}
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
                    ...chipBaseStyle.sx,
                    backgroundColor: "rgba(234,179,8,0.2)",
                    color: "#eab308",
                    borderColor: "rgba(234,179,8,0.3)",
                  }}
                />
              ))}
            </Box>
            <Box sx={textBase}>
              <Typography variant="body2">USE ↑↓ TO NAVIGATE</Typography>
              <Typography variant="body2">
                PROJECT {selectedProject + 1} OF {projects.length}
              </Typography>
            </Box>
          </Box>
        );
      }

      case "skills":
        return (
          <Box sx={{ p: 2 }}>
            <Chip
              label="SKILL ANALYSIS"
              size="small"
              sx={{
                ...chipBaseStyle.sx,
                backgroundColor: "rgba(147,51,234,0.2)",
                color: "#a855f7",
                borderColor: "rgba(147,51,234,0.3)",
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1.5, color: "#86efac" }}
            >
              TECHNICAL ABILITIES
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {skills.map((skill, i) => (
                <Paper
                  key={i}
                  sx={{
                    p: 1,
                    border: "1px solid #4ade80",
                    borderRadius: 1,
                    backgroundColor: "transparent",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ ...textBase, color: "#86efac" }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ ...textBase, color: "#4ade80" }}
                    >
                      {skill.level}%
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      backgroundColor: "#374151",
                      borderRadius: 5,
                      height: 8,
                    }}
                  >
                    <Box
                      sx={{
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: "#22c55e",
                        width: `${skill.level}%`,
                        transition: "width 1s ease-in-out",
                      }}
                    />
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        );

      case "about":
        return (
          <Box sx={{ p: 2 }}>
            <Chip
              label="TRAINER DATA"
              size="small"
              sx={{
                ...chipBaseStyle.sx,
                backgroundColor: "rgba(239,68,68,0.2)",
                color: "#ef4444",
                borderColor: "rgba(239,68,68,0.3)",
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1.5, color: "#86efac" }}
            >
              ABOUT THIS TRAINER
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                ...textBase,
                color: "#86efac",
              }}
            >
              <Typography variant="body2">
                My coding journey began like many great adventures - with
                curiosity and a desire to create amazing digital experiences.
              </Typography>
              <Typography variant="body2">
                With 7 months of real-world experience (6 months as an intern
                and 1 month as a full-time developer), they’ve been leveling up
                fast — catching bugs 🐛 and crafting scalable web applications
                along the way.
              </Typography>
              <Typography variant="body2">
                Outside the digital battlefield, they can usually be found
                watching anime, reading manhwa/manga or light novels, or
                grinding through games.
              </Typography>
            </Box>
            <Box sx={{ mt: 2, ...textBase, color: "#4ade80" }}>
              <Typography variant="body2">EXPERIENCE: 7 MONTHS</Typography>
              <Typography variant="body2">
                PROJECTS COMPLETED: 5+ (and counting)
              </Typography>
              <Typography variant="body2">FAVORITE TYPE: FULL-STACK</Typography>
            </Box>
          </Box>
        );

      default:
        return null;
    }
  };

return (
  <Box
    sx={{
      height: "100vh",
      width: "100vw",
      maxWidth: "100%",
      backgroundColor: "hsl(var(--background))",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: 0,
    }}
  >
    {/* Pokédex Device */}
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      <Paper
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: 0, // full screen
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // 🔥 responsive layout
          boxShadow: "var(--shadow-device)",
        }}
      >
        {/* Left Section (Red) */}
        <Box
          sx={{
            flex: 1,
            height: { xs: "auto", md: "100%" },
            minHeight: { xs: "60vh", md: "100%" }, // enough space on mobile
            p: { xs: 2, md: 3 },
            position: "relative",
            background: "#dc2626",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {/* Power Button */}
          <Box sx={{ position: "absolute", top: 16, right: 16 }}>
            <IconButton
              size="small"
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--gradient-button)",
                "&:hover": { boxShadow: "var(--shadow-button)" },
                p: 0,
              }}
              onClick={() => setCurrentScreen("home")}
            >
              <Power size={16} color="#1f2937" />
            </IconButton>
          </Box>

          {/* Large Circular Light */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 20,
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#60a5fa",
              boxShadow: "0 0 30px 10px rgba(96, 165, 250, 0.7)",
              border: "4px solid white",
            }}
          />

          {/* Indicator Lights */}
          <Box
            sx={{
              position: "absolute",
              top: 32,
              left: 120,
              display: "flex",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#ef4444",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#eab308",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }}
            />
          </Box>

          {/* Main Screen */}
          <Paper
            sx={{
              marginTop: "auto",
              marginBottom: "auto",
              mx: "auto",
              borderRadius: 2,
              border: "4px solid #1f2937",
              overflow: "hidden",
              width: { xs: "90%", md: "70%" },
              height: { xs: "40vh", md: "50%" },
              backgroundColor: "#000000",
              boxShadow: "var(--shadow-screen)",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(145deg, #0a1f0a, #000000)",
                border: "2px solid #22c55e",
                borderRadius: 2,
                boxShadow:
                  "0 0 12px rgba(34,197,94,0.5) inset, 0 0 20px rgba(34,197,94,0.2)",
                overflowY: "auto",
                p: { xs: 2, md: 3 },
                fontFamily: "monospace",
                color: "#86efac",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: { xs: "0.85rem", md: "1rem" }, // shrink text a bit on mobile
              }}
            >
              {renderScreen()}
            </Box>
          </Paper>
        </Box>

        {/* Right Section (Blue) */}
        <Box
          sx={{
            flex: 1,
            height: { xs: "auto", md: "100%" },
            minHeight: { xs: "40vh", md: "100%" },
            p: { xs: 2, md: 6 },
            backgroundColor: "#2563eb",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Navigation Pad + A/B Buttons */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              flexWrap: { xs: "wrap", md: "nowrap" }, // stack controls on mobile if needed
            }}
          >
            {/* D-Pad */}
            <Grid
              container
              spacing={0.5}
              sx={{
                width: { xs: 120, md: 170 },
                height: { xs: 120, md: 170 },
              }}
            >
              <Grid item xs={4} />
              <Grid item xs={4}>
                <IconButton
                  size="medium"
                  sx={{
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    borderRadius: 1,
                    color: "white",
                    backgroundColor: "#1f2937",
                    "&:hover": { backgroundColor: "#374151" },
                  }}
                  onClick={() => navigateProject("up")}
                >
                  <ArrowUp size={20} />
                </IconButton>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <IconButton
                  size="medium"
                  sx={{
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    borderRadius: 1,
                    color: "white",
                    backgroundColor: "#1f2937",
                    "&:hover": { backgroundColor: "#374151" },
                  }}
                >
                  <ArrowLeft size={20} />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: "#111827" }} />
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  size="medium"
                  sx={{
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    borderRadius: 1,
                    color: "white",
                    backgroundColor: "#1f2937",
                    "&:hover": { backgroundColor: "#374151" },
                  }}
                >
                  <ArrowRight size={20} />
                </IconButton>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs={4}>
                <IconButton
                  size="medium"
                  sx={{
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
                    borderRadius: 1,
                    color: "white",
                    backgroundColor: "#1f2937",
                    "&:hover": { backgroundColor: "#374151" },
                  }}
                  onClick={() => navigateProject("down")}
                >
                  <ArrowDown size={20} />
                </IconButton>
              </Grid>
              <Grid item xs={4} />
            </Grid>

            {/* A & B Buttons */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                mt: { xs: 2, md: 0 },
              }}
            >
              <MuiButton
                size="large"
                sx={{
                  width: { xs: 60, md: 70 },
                  height: { xs: 40, md: 50 },
                  borderRadius: "16px",
                  backgroundColor: "#dc2626",
                  "&:hover": { backgroundColor: "#b91c1c" },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: "bold",
                  minWidth: "auto",
                  color: "white",
                }}
                onClick={() => setCurrentScreen("projects")}
              >
                A
              </MuiButton>
              <MuiButton
                size="large"
                sx={{
                  width: { xs: 60, md: 70 },
                  height: { xs: 40, md: 50 },
                  borderRadius: "16px",
                  backgroundColor: "#1d4ed8",
                  "&:hover": { backgroundColor: "#1e40af" },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontWeight: "bold",
                  minWidth: "auto",
                  color: "white",
                }}
                onClick={() => setCurrentScreen("skills")}
              >
                B
              </MuiButton>
            </Box>
          </Box>

          {/* Menu Buttons */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Grid container spacing={2} sx={{ width: "100%" }}>
              <Grid item xs={6}>
                <MuiButton
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: 40,
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    borderColor: "#4b5563",
                    "&:hover": { backgroundColor: "rgba(55, 65, 81, 0.5)" },
                    color: "white",
                  }}
                  onClick={() => setCurrentScreen("about")}
                  startIcon={<User size={18} />}
                >
                  ABOUT
                </MuiButton>
              </Grid>
              <Grid item xs={6}>
                <MuiButton
                  variant="outlined"
                  fullWidth
                  sx={{
                    height: 40,
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    borderColor: "#4b5563",
                    "&:hover": { backgroundColor: "rgba(55, 65, 81, 0.5)" },
                    color: "white",
                  }}
                  onClick={() => setCurrentScreen("projects")}
                  startIcon={<Briefcase size={18} />}
                >
                  WORK
                </MuiButton>
              </Grid>
            </Grid>
          </Box>

          {/* Bottom Controls */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <MuiButton
              size="medium"
              sx={{
                color: "white",
                backgroundColor: "#16a34a",
                "&:hover": { backgroundColor: "#15803d" },
              }}
              startIcon={<Phone size={18} />}
            >
              CONTACT
            </MuiButton>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: "rgba(31, 41, 55, 0.5)",
                  "&:hover": { backgroundColor: "rgba(55, 65, 81, 0.5)" },
                  color: "white",
                  borderRadius: 1,
                  p: 0,
                }}
              >
                <Volume2 size={14} />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  color: "white",
                  backgroundColor: "rgba(31, 41, 55, 0.5)",
                  "&:hover": { backgroundColor: "rgba(55, 65, 81, 0.5)" },
                  borderRadius: 1,
                  p: 0,
                }}
              >
                <Monitor size={14} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  </Box>
);

};

export default PokeDexDevice;
