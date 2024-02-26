const express = require ("express");
const voitureRouter=require("./routes/voitureRouter");
const app =express();

app.use("/voiture",voitureRouter);
app.listen(9000 , ()=> {
    console.log("listninig on port 9000");
}
)