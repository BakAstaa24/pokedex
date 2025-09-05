import { Chip, Typography, Box, Paper } from "@mui/material";

interface Skill {
  name: string;
  icon: string;
  type: string;
  level: number;
}

interface SkillsScreenProps {
  skills: Skill[];
}

const SkillsScreen = ({ skills }: SkillsScreenProps) => {
  return (
    <Box sx={{ p: 2 }}>
      <Chip
        label="SKILL ANALYSIS"
        size="small"
        sx={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          borderRadius: "8px",
          px: 1,
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
                sx={{ fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5, color: "#86efac" }}
              >
                {skill.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: "monospace", fontSize: "0.8rem", lineHeight: 1.5, color: "#4ade80" }}
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
};

export default SkillsScreen;
