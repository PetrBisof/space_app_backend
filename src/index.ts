const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const resolvers = {
       Query: {
        astronauts: (root, args, context, info) => {
            const opArgs = {
                first: args.first,
                skip: args.skip,
                after: args.after,
                orderBy: args.orderBy
            }
/*              if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }]
            }
        } */
            return context.prisma.astronauts(opArgs, info)
          },
        flights(parent, args, ctx, info){
            const opArgs = {
                first: args.first,
                skip: args.skip,
                after: args.after,
                orderBy: args.orderBy
            }
/*             if (args.query) {
            opArgs.where = {
                OR: [{
                    name_contains: args.query
                }]
            }
        } */
        return ctx.prisma.flights(opArgs, info) 
      }    
    },

    Mutation: {
       async createAstronaut(parent, args, ctx, info) {
        let pocet : Array<object>  /* astronautsForFlight */ = await ctx.prisma.flight({ id: args.data.flight }).astronaut()/* .then(function(data){console.log(data.length)}) */
        if (pocet != null && pocet.length >= 5){
            throw new Error('Unable to connect astronaut with this flight. Too many astronauts.')
        }
            return ctx.prisma.createAstronaut({
                    ...args.data,
                    flight: {
                        connect: {
                            id: args.data.flight
                        }
                    }
           })
       },
        deleteAstronaut(parent, args, ctx, info) {
            return ctx.prisma.deleteAstronaut(
                {
                   id: args.id
                }
            ,
            info
            );
        },

        

    async updateAstronaut(parent, args, ctx, info) {
        let pocet : Array<object>  /* astronautsForFlight */ = await ctx.prisma.flight({ id: args.data.flight }).astronaut()/* .then(function(data){console.log(data.length)}) */
            if(pocet != null && pocet.length >= 5) {
            throw new Error('Unable to connect astronaut with this flight. Too many astronauts.')
        }      

        return ctx.prisma.updateAstronaut({
                where: {
                id: args.id,
              },
            data:{
            name: args.data.name,
            surname: args.data.surname,
            experience: args.data.experience,
            age: args.data.age,
            flight: {
                connect:{
                    id: args.data.flight
                }
           } },
        },)
},
        deleteFlight(parent, args, ctx, info) {
            return ctx.prisma.deleteFlight(
                {
                   id: args.id
                }
            ,
            info
            );
        },
        createFlight(parent, args, ctx, info) {
            return ctx.prisma.createFlight({
                ...args.data
                    })
                },

        updateFlight(parent, args, ctx, info) {
            return ctx.prisma.updateFlight({
                where: {
                    id: args.id,
                  },
                data:{
                date: args.data.date,
                name: args.data.date
                },
            }, info)
        },
    },
    

    Flight: {
/*          astronaut(parent, args, ctx, info){
            const astronaut = ctx.prisma.flights.filter((kosmonaut) => {
                return kosmonaut.flight === parent.id
            })

            return astronaut
        }  */
        astronaut(parent, args){
          return prisma.flight({ id: parent.id }).astronaut()
        }
      } 
    ,

    Astronaut: {
        flight(parent, args){
            return prisma.astronaut({ id: parent.id }).flight()
        }

    }
}


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))