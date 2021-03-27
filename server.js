const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


let rappers = {
    '21 savage': {
    'age': 28,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper': {
    'age': 27,
    'birthName': 'Chancelor Jonathan Bennet',
    'birthLocation': 'Chicaho, Illinois'
    },
    'dylan': {
    'age': '28',
    'birthName': 'dylan',
    'birthLocation': 'dylan' 
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLowerCase()
    console.log(rapName)
    if(rappers[rapName]){
      res.json(rappers[rapName])  
    }else{
      res.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Running on ${PORT}`)
})