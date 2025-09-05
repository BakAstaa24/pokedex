import { Chip, Typography, Box } from "@mui/material";

const HomeScreen = () => {
  return (
    <Box sx={{ p: 2, textAlign: "center", color: "#4ade80" }}>
      <Chip
        label="TRAINER: Narayan Jariwala"
        size="small"
        sx={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          borderRadius: "8px",
          px: 1,
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
        sx={{ mb: 2, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5, color: "#86efac" }}
      >
        Welcome to my digital Pokédex! I'm a Full Stack Developer who catches bugs 🐛 and builds amazing web applications.
      </Typography>
      <Box sx={{ fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5 }}>
        <Typography variant="body2">STATUS: React/Next developer</Typography>
        <Typography variant="body2">LOCATION: WORLDWIDE</Typography>
        <Typography variant="body2">TYPE: FULL-STACK</Typography>
      </Box>
      <Box sx={{ mt: 2, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5, color: "#4ade80" }}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          CONTROLS:
        </Typography>
        <Typography variant="body2">A: PROJECTS | B: SKILLS</Typography>
        <Typography variant="body2">↑↓: NAVIGATE PROJECTS</Typography>
        <Typography variant="body2">POWER: HOME | ▶️: MUSIC</Typography>
      </Box>
    </Box>
  );
};

export default HomeScreen;
