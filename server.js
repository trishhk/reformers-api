const express = require('express') //has access to express methods
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 8000

app.use(cors())

const reformers = {
    "Jan Hus": {
        'name': 'Jan Hus',
        'born': '1369',
        'died': '1415',
        'country': 'Czechia',
        'interesting fact': 'Burned at the stake for criticizing the Catholic Church and following Wycliffe',
        'quote': 'It is better to die well than to live badly.',
    },
    "Martin Luther": {
        'name': 'Martin Luther',
        'born': '1483',
        'died': '1546',
        'country': 'Germany',
        'interesting fact': 'Known for nailing 95 theses to door of Wittenburg Church.',
        'quote': 'Peace if possible; truth at all costs. And, I cannot and will not recant anything, for to go against conscience is neither right nor age. Here I stand, I can do no other. So help me God. Amen'
    },
    "William Tyndale": {
        'name': 'William Tyndale',
        'born': '1494',
        'died':'1536',
        'country': 'England',
        'interesting fact': 'Marytred for heresy after translating the New Testament into English.',
        'quote': 'Lord, open the King of Englands eyes.',
    },
    "Heinrich Bullinger": {
        'name': 'Heinrich Bullinger',
        'born': '1504',
        'died': '1575',
        'country': 'Switzerland',
        'interesting fact': 'Successor to Zwingli',
        'quote': 'The deprivation of our nature is nothing else but the blotting out of Gods image in us.',
    },
    "John Calvin": {
        'name': 'John Calvin',
        'born': '1509',
        'died': '1564',
        'country': 'France, Switzerland',
        'interesting fact': 'Known for, "Institutes of the Christian Religion"',
        'quote': 'We should ask God to increase our hope when it is small, awaken it when it is dormant, confirm it when it is wavering , strengthen it when it is weak and raise it up when it is overthrown.',
    },
    "John Knox": {
        'name': 'John Knox',
        'born': '1514',
        'died': '1572',
        'country': 'Scotland',
        'interesting fact': 'He didn\'t get along with Mary, Queen of Scots. His austere moral tone shaped the democratic form of gov\'t Scotland adopted.',
        'quote': 'You can not antagonize and influence at the same time.'
    }
}
app.get('/', (request,response)=> {  
    response.sendFile(__dirname + '/index.html') 
})

app.get('/api/:reformerName', (request, response) => {
    const reformersName = request.params.reformerName
    if(reformers[reformersName]){  
        response.json(reformers[reformersName])
    }else{
        response.json(reformers['Jan Hus'])
    }
    
})
app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running.')
})