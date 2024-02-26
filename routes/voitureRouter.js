const express =require ("express");

const voitureRouter=express.Router();

const Voiures =[
    {id:1,name:"clio"},
    {id:2,name:"megane"},
    {id:3,name:"range"}
]

voitureRouter.post("/add", (req, res) => {
    const newVoiture = req.body ;
    newVoiture.push(newVoiture);
        res.send("Successfully added.")
    })


voitureRouter.get("/all",(req,res)=>{
    res.send(Voiures);
})

voitureRouter.get("/:id", (req,res)=>{
    const idVoiture =parseInt( req.params.id);
    const voiture =voitures.find(v=>v.id == parseInt(idVoiture));
    if (voiture){
        res.send(voiture);
    }else{
        res.status(404).json({message: "does not exist"})
    }
})

voitureRouter.put("/update/:id",(req,res)=>{
    const idVoiture=parseInt(req.params.id);
    const index=Voiures.find(v => v.id === idVoiture);
    if (index!=null){
        voitures[index]=res.body;
        res.send("Well modified");
    }else{
        res.status(404).json({message:"does not exist"})
    }
    })

voitureRouter.delete("/delete/:id",(req,res)=>{
    const idVoiture=parseInt(req.params.id);
    const index =voitures.findIndex(v => v.id === idVoiture);
    if (index !== -1){
        voitures.splive(index,1)
        res.send("Deleted successfully");
        res.status(404).json({ message: "does not exist" });
    }else{

    }
    })


module.exports= voitureRouter ;