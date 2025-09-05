import { useState, useRef } from "react";
import {
  Button as MuiButton,
  Box,
  Paper,
  IconButton,
  Grid,
} from "@mui/material";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Power,
  Monitor,
  User,
  Briefcase,
  Phone,
  Play,
  Pause,
} from "lucide-react";

import pokemonTheme from "@/assets/pokemon_opening_theme.mp3";
import clickSound from "@/assets/click_sound.wav";

import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import SkillsScreen from "./screens/SkillsScreen";
import AboutScreen from "./screens/AboutScreen";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const PokeDexDevice = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedProject, setSelectedProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };





  const navigateProject = (direction: "up" | "down") => {
    if (direction === "up" && selectedProject > 0) {
      setSelectedProject(selectedProject - 1);
    } else if (direction === "down" && selectedProject < projects.length - 1) {
      setSelectedProject(selectedProject + 1);
    }
  };

  const handleVolumeClick = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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
        return <HomeScreen />;
      case "projects":
        return <ProjectsScreen projects={projects} selectedProject={selectedProject} />;
      case "skills":
        return <SkillsScreen skills={skills} />;
      case "about":
        return <AboutScreen />;
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
              height: "100%",
              minHeight: { xs: "50vh", md: "100%" },
              p: { xs: 2, md: 3 },
              position: "relative",
              background: "#dc2626",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {/* Power Button (top-right corner) */}
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
                onClick={() => { playClickSound(); setCurrentScreen("home"); }}
              >
                <Power size={16} color="#1f2937" />
              </IconButton>
            </Box>

            {/* ===== HEADER (Orb + Lights) ===== */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 3,
                mb: { xs: 4, md: 6 }, // spacing below header
              }}
            >
              {/* Large Orb */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  backgroundColor: "#60a5fa",
                  boxShadow: "0 0 30px 10px rgba(96, 165, 250, 0.7)",
                  border: "4px solid white",
                }}
              />

              {/* Indicator Lights */}
              <Box sx={{ display: "flex", gap: 1 }}>
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
            </Box>

            {/* ===== MAIN SCREEN ===== */}
            <Paper
              sx={{
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
                  fontSize: { xs: "0.85rem", md: "1rem" },
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
              height: "100%",
              minHeight: { xs: "50vh", md: "100%" },
              p: { xs: 2, md: 6 },
              backgroundColor: "#2563eb",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Navigation Pad + A/B Buttons */}
            <Box
              sx={{
                flex: 2,
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
                    onClick={() => { playClickSound(); navigateProject("up"); }}
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
                    onClick={() => playClickSound()}
                  >
                    <ArrowLeft size={20} />
                  </IconButton>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#111827",
                    }}
                  />
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
                    onClick={() => playClickSound()}
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
                    onClick={() => { playClickSound(); navigateProject("down"); }}
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
                  onClick={() => { playClickSound(); setCurrentScreen("projects"); }}
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
                  onClick={() => { playClickSound(); setCurrentScreen("skills"); }}
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
                flexWrap: { xs: "wrap", md: "nowrap" },
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
                    onClick={() => { playClickSound(); setCurrentScreen("about"); }}
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
                    onClick={() => { playClickSound(); setCurrentScreen("projects"); }}
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
                  onClick={() => { playClickSound(); handleVolumeClick(); }}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
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
        <audio
          ref={audioRef}
          src={pokemonTheme}
          loop
          style={{ display: "none" }}
        />
      </Box>
    </Box>
  );
};

export default PokeDexDevice;
