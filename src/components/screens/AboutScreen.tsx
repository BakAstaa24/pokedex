import { Chip, Typography, Box } from "@mui/material";

const AboutScreen = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Chip
        label="TRAINER DATA"
        size="small"
        sx={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          borderRadius: "8px",
          px: 1,
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
          fontFamily: "monospace",
          fontSize: "0.8rem",
          lineHeight: 1.5,
          color: "#86efac",
        }}
      >
        <Typography variant="body2">
          My coding journey began like many great adventures - with
          curiosity and a desire to create amazing digital experiences.
        </Typography>
        <Typography variant="body2">
          With 7 months of real-world experience (6 months as an intern
          and 1 month as a full-time developer), they've been leveling up
          fast — catching bugs 🐛 and crafting scalable web applications
          along the way.
        </Typography>
        <Typography variant="body2">
          Outside the digital battlefield, they can usually be found
          watching anime, reading manhwa/manga or light novels, or
          grinding through games.
        </Typography>
      </Box>
      <Box sx={{ mt: 2, fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5, color: "#4ade80" }}>
        <Typography variant="body2">EXPERIENCE: 7 MONTHS</Typography>
        <Typography variant="body2">
          PROJECTS COMPLETED: 5+ (and counting)
        </Typography>
        <Typography variant="body2">FAVORITE TYPE: FULL-STACK</Typography>
      </Box>
    </Box>
  );
};

export default AboutScreen;
