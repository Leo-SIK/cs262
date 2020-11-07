# CS 262 Monopoly Webservice

This is the data service application for the 
[CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project),
 which is deployed here:
          
- <https://sheltered-beach-99139.herokuapp.com/>

It is based on the standard Heroku with Node.js tutorial.

- <https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory
and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database server,
user and password are stored as Heroku configuration variables rather than in this 
(public) repo.

We implement this sample service as a separate repo to simplify Heroku integration;
it&rsquo;s easier to auto-deploy a separate repo to Heroku. For your team project&rsquo;s 
data service, configure your Heroku app to auto-deploy from the master/main branch 
of your service repo. See the instructions for how to do this under the 
&ldquo;Deploy&rdquo; tab in your Heroku application&rsquo;s dashboard.
 
 
    https://sheltered-beach-99139.herokuapp.com/
    https://sheltered-beach-99139.herokuapp.com/players
    https://sheltered-beach-99139.herokuapp.com/players/1
    https://sheltered-beach-99139.herokuapp.com/players/-1 (not found)
    https://sheltered-beach-99139.herokuapp.com/players/blob (undefined endpoint)

# Questions:

    1. What are the (active) URLs for your data service?
    
        https://monopoly-service-2.herokuapp.com/
        https://monopoly-service-2.herokuapp.com/players
        https://monopoly-service-2.herokuapp.com/players/:id
        https://monopoly-service-2.herokuapp.com/players/:id/scores
        https://monopoly-service-2.herokuapp.com/players/:id
    
    2. Which of these endpoints implement actions that are idempotent? nullipotent?
        Apart from delete and update which are idempoten, the rest are all nullipotent since they are read only.

    3. Is the service RESTful? If not, why not? If so, what key features make it RESTful.
        It is Restfull because it uses stateless Https and the database is separated from the UI.

    4. Is there any evidence in your implementation of an impedance mismatch? 
        Yes because one Id needs to be obatained before before it gets used to fetch data.
