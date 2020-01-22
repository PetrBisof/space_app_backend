const { GraphQLServer } = require('graphql-yoga')
const  uuidv4  = require('uuid/v4')

/* import db from './db' */

// 1

const resolvers = {
    Query: {
        kosmonauti(parent, args, ctx, info) {
                if (!args.query)
                 {return ctx.prisma.kosmonauti}
                 
                 return ctx.prisma.kosmonauti.filter((kosmonaut) => {
                    return kosmonaut.name.toLowerCase().includes(args.query.toLowerCase())
                })
    },
        lety(parent, args, ctx, info){
                return ctx.prisma.lety
        }
    },

    Mutation: {
        createKosmonaut(parent, args, ctx, info) {

/*         const tooManyAstronauts = lety.filter((let) => {
           return let.id === args.data.flight
        })
        console.log(tooManyAstronauts.astronaut); */
        const turnus = ctx.prisma.lety.find((let) => let.id === ctx.prisma.flight)
        if (!turnus) {
            throw new Error('Flight not found')
        }  
        const kosmonaut = {
                id: uuidv4(),
                
                ...args.data
            }

            ctx.prisma.kosmonauti.push(kosmonaut)

/*             const flight = lety.find((let) => let.id === flight)

            if (!flight) {
                throw new Error('Flight not found')
            }
 */
            return kosmonaut
        },

        deleteKosmonaut(parent, args, ctx, info) {
            const kosmonautIndex = ctx.prisma.kosmonauti.findIndex((kosmonaut) => kosmonaut.id === args.id)

             if (kosmonautIndex === -1) {
                throw new Error('Kosmonaut not found')
            } 
            const deletedKosmonaut = ctx.prisma.kosmonauti.splice(kosmonautIndex, 1)

            return deletedKosmonaut[0]
        },

        updateKosmonaut(parent, args, ctx, info) {
            const { id, data } = args
            const kosmonaut = ctx.prisma.kosmonauti.find((kosmonaut) => kosmonaut.id === id)
    
            if (!kosmonaut) {
                throw new Error('Kosmonaut not found')
            }
    
            if (typeof data.name === 'string') {
   
                kosmonaut.name = data.name
            }
    
            if (typeof data.surname === 'string') {
                kosmonaut.surname = data.surname
            }
    
            if (typeof data.experience === 'string') {
                kosmonaut.experience = data.experience
            }

            if (typeof data.age !== 'undefined') {
                kosmonaut.age = data.age
            }

            if (typeof data.flight === 'string') {
                const flight = ctx.prisma.lety.find((let) => let.id === data.flight)

                if (!flight) {
                    throw new Error('Flight not found')
                }
                kosmonaut.flight = data.flight
            }


    
            return kosmonaut
        },

        deleteLet(parent, args, ctx, info) {
            const letIndex = ctx.prisma.lety.findIndex((let) => let.id === args.id)

             if (letIndex === -1) {
                throw new Error('Let not found')
            } 
            const deletedLet = ctx.prisma.lety.splice(letIndex, 1)

            ctx.prisma.kosmonauti.forEach(kosmonaut => {
                if(kosmonaut.flight === deletedLet.id){
                    kosmonaut.fligt = []
                }
            });

            return deletedLet[0]
        },

        createLet(parent, args, ctx, info) {

            /*         const tooManyAstronauts = lety.filter((let) => {
                       return let.id === args.data.flight
                    })
                    console.log(tooManyAstronauts.astronaut); */
                        
                    const cesta = {
                        id: uuidv4(), 
                        ...args.data
                        }
            
                        ctx.prisma.lety.push(cesta)
            
                        return cesta
                    },

        updateLet(parent, args, ctx, info) {
            const { id, data } = args
            const turnus = ctx.prisma.lety.find((let) => let.id === id)
    
            if (!turnus) {
                throw new Error('Let not found')
            }
    
            if (typeof data.date === 'string') {
    
                turnus.date = data.date
            }
    
        
    
            return turnus
        },
    },
    Let: {
        astronaut(parent, args, ctx, info){
            return ctx.prisma.kosmonauti.filter((kosmonaut) => {
                return kosmonaut.flight === parent.id
            })
        }
    },

    Kosmonaut: {
        flight(parent, args, ctx, info) /* {
            return lety.find((let) => {
                return let.id === parent.flight
            }) */
            {
                const flight = ctx.prisma.lety.find((let) => {
                    return let.id === parent.flight
                })

/*                 flight.astronaut.push(parent.flight)
                console.log(flight.astronaut) */
                return flight
        }
    }
}


// 2
/* const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`
  }
} */

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))