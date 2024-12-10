import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  return (
    <Card key={recipe.id}>
      <CardContent>
        <CardMedia
          component="img"
          height="150"
          image={recipe.image}
          sx={{
            objectFit: "contain",
          }}
        />
        <Typography
          sx={{
            color: "#32a893",
          }}
        >
          Preparation time: <b>{recipe.prepTime}</b> minutes
        </Typography>
        <Typography variant="h5">{recipe.title}</Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
