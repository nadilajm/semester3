const http = require('http');

const motoGP = [
    {
        circuit: 'Losail',
        Location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy',
        }
    },
    {
        circuit: 'Autodromo', 
        Location: 'Argentine',
        winner:{
            firstName: 'Cal', 
            lastName: 'Crutchlow',
            country: 'UK',
        }
    },
    {
        circuit: 'De Jerez', 
        location: 'Spain', 
        winner: {
            firstName: 'Valentino', 
            lastName: 'Rossi', 
            country: 'Italy',
        }
    },
    {
        circuit: 'Mugello',
        Location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy',
        }
    }
];

const requestListener = (request, response) => {
    response.setHeader('Content-Type','text/html')
    const { method, url } = request;


    if (url === '/') {
        if (method === "GET"){
        response.statusCode = 200;
        response.end(JSON.stringify(motoGP, null, 2));
        }   
        
    } else if (url === '/country') {
        if (method === "GET"){
            const dataByCountry = motoGP.reduce((app, race) => {
                const { country } = race.winner;
                if (!app[country]) {
                    app[country] = [];
                }
                app[country].push(race);
                return app;
            }, {});
            response.statusCode =200;
            response.end(JSON.stringify(dataByCountry, null, 2));
        }
    } else if (url === '/name') {
        if (method === "GET") {
            const dataByName = motoGP.reduce((app, race) => {
                const { firstName, lastName } = race.winner;
                const fullName = `${firstName} ${lastName}`;
                if (!app[fullName]) {
                    app[fullName] = [];
                }
                app[fullName].push(race);
                return app;
            }, {});
            response.statusCode =200;
            response.end(JSON.stringify(dataByName, null, 2));
        }
    }else {
        response.statusCode= 400;
        response.end("Bad Request");
    }
       
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});