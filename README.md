# Free-Messenger
Free social chat project with react, nodejs, mongoDB. 

## General
In this project, we will create social community chatting platform. Everyone can register, choose nickname and chat with other online or write to offline registered users. 
Its not dating site, there is no search based on gender/age/physical details. 
Basically - user can be totally anonymous, the only thing that other users can know about - its 3 photos, nickname and user's motto.

There are two roles in the system:
1. User - can view users, initiate message, edit own profile, and more.
2. Admin - can ban/delete users, delete entries on users walls, create public events on home page, and more.

## Infrastructure
1. Database: MongoDB.
2. Server-side: REST API in Node.js using Express and Socket.io for message exchange/notifying. Should be built in TypeScript.
3. Client-side: React. Should be built in TypeScript.

## System design
The system will include Edge server and following microservices: Messages service, Users service, Users_config service. Each service will manage it's own database.


**Edge server:**  Api gateway for all external queries. It will mess with auth, and socket connections. From other hand, he will proxy tasks to services.


**Users service:** Will have http interface, and take care for manipulations on users (get all, get one, add user etc...). The service manage its own database.


**Messages service:** Will have rabbitMQ interface. This service will handle message events. The service manage its own database. 


**User_config service:** will have http interface. Basocally, it's just store user configuration. For now, it will store user online status, and if the user want to get emails on messages when he is offline. But it can grown in future, and store additional personal configurations.


## Project Details
System Entities:
1. Users:
- User id
- First name
- Last name
- Nickname
- Email
- Password
- Role (regular user or admin)
- Motto // Short phrase that describes users personality
- Mail delivery //boolean
- isOnline // Maybe it should be only on client side...
- Photos
- Unread messages
- Wall messages

2. Photos
- Photo id
- User id
- Photo filename

3. Wall messages
- Wall message id
- Sender id
- Recipient id
- Message date
- Message body

4. Unread messages
- Recipient id
- Message id

5. Messages:
- Message id
- messageDate
- messageBody
- SenderId
- RecipientId

## Features

 - Authentication and Authorization
 - User Profile 
 - User Search
 - User should get online notification when somebody sent him an message. If he was offline - then on next login he should get those notifications
 - Validation 
 - UI/UX Design


## UI

Landing page for unregistered visitors should be based on this mockup that i just created:

![5c63ee71-c1b8-483c-8095-377bb9d79de8](https://github.com/maxiboom1/Free-Messenger/assets/94469848/0fcd691c-4392-430b-8317-adc72823a1bb)

The home page for user should be based on this mockup:

![WhatsApp Image 2023-06-13 at 00 29 55](https://github.com/maxiboom1/Free-Messenger/assets/94469848/a8c9300c-9112-4f60-8fb6-e4fc873f003a)


## Flows

## Register and Login flow:

User sends register request with user data to edge server => 

edge route it to users service with express-http-proxy => 

Service validate and store user data, or throw error back to proxy => 

Proxy intercept the response, fetch user or err, and creates token =>

Proxy returns token or err to client.

![auth-flow image](04%20-%20Documentation/images/auth-flow.png)

There are up to 3 profile images that user can upload. 
There is an route that give those images, also using proxy, but in this case, without intercept the response.