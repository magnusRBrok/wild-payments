# Wild payments

The first thing I do when approaching an assignment like this is to sketch out the domain. By doing this I get an initial understanding of what tables I will need and how they relate to each other.

Then I think about how I would structure the different pages of the webapp, so that I have an estimate of how many pages I need to support the requested features. After this initial planning/analyzing I then investigate how I want to structure my Tech stack, and which technologies fits the case best.

## Next.js and NextAuth

Next.js was used as the framework for my application and works as the foundation for my monolithic setup. I chose the monolithic setup because it allows me to hit the ground running, and not use too much time on setting up a dedicated backend API. I was instead able to use Next’s features for API routes and server-side components to handle my data fetching. For authentication I included the NextAuth library due to its seamless integration with Next.js as well as some easy-to-use authentication hooks for my react components.

## Prisma

To save some time on development I chose the lightweight ORM Prisma. This allowed me to simply define my Domain models in a “typescript like” look, and then have Prisma generate database migrations, and a typed Prisma-Client to use in my API endpoints.

## Alternatives for better scalability and stability

The obvious alternative to a monolithic setup is a more microservice focused one instead, and this would properly be a better solution. From this case we know that “payments” specifically will be under heavy load (100+ payments pr. second). Therefore, it would be much more advantageous to have a payment, and a customer API separated, so that we can ensure scalability and stability of the systems independently. This is because it is much easier to maintain and monitor a decentralized system rather than a huge centralized one. We can also more easily scale specific services and therefore save resources (CPU and RAM) for the entire system.

I would then have the Web app as its own independent system, and then communicate to a centralized API-gateway before reaching the microservices.

## Conclusion

My approach to the solution was based on solid frameworks which allowed me to quickly implement as many of the requested features as possible. Should this system be used at enterprise level I would have gone with a microservice setup instead due to its superior scalability and stability.
