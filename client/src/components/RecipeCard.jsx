import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";
import { useNavigate } from "react-router";

const RecipeCard = ({ recipe, setRecipeToEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (e) => {
     e.stopPropagation();
     setRecipeToEdit(recipe);
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete();
  }

  return (
    <Card key={recipe.id}>
      <CardContent onClick={() => navigate(`/details/${recipe.id}`)}>
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
      <CardActions>
        <Button variant="contained" onClick={handleEdit}>Edit</Button>
        <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
