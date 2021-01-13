##Case

Create a shopping cart microservice

Your objective is to create a shopping cart microservice – using either Node.js or JVM ecosystem.

Requirements to the solution:
•Add to basket
•Remove from basket
•List basket
•Change quantity

You don’t have to add a ‘real’ database to the solution.

##Workflows

 * Create temp. cart
 * Add items to that cart
 * List all items of a cart
 * remove items from a cart
 * increase/decrease quantity of items

##API

Prefix /v1

POST /cart => Create a new cart object and response an identifier
PUT /cart/{id}/item/{itemId}/{quantity} => Add item to a cart
DELETE /cart/{id}/item/{itemId}/{quantity} => Remove item from a cart
GET /cart/{id} => Response a list of items in a cart