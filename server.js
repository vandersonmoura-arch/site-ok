const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// Lista de projetos (memória)
let projetos = [
  {
    nome: "Dashboard Financeiro",
    tecnologia: "Power BI"
  },
  {
    nome: "Landing Page",
    tecnologia: "React"
  }
]

// Rota inicial
app.get("/", (req,res)=>{
  res.send("Backend do portfólio funcionando 🚀")
})

// Buscar projetos
app.get("/projetos",(req,res)=>{
  res.json(projetos)
})

// Adicionar projeto
app.post("/projetos",(req,res)=>{

  const novoProjeto = req.body

  projetos.push(novoProjeto)

  res.json({
    mensagem:"Projeto adicionado com sucesso",
    projeto: novoProjeto
  })

})

app.listen(3000,()=>{
  console.log("Servidor rodando em http://localhost:3000")
})