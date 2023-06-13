# Free-Messenger
Free social chat project with react, nodejs, mongoDB. 

## General
In this project, we will create social comunity chatting platform. Everyone can register, choose nickname and chat with other online or write to offline registered users. 
Its not dating site, there is no search based on gender/age/phisical details. 
Basically - user can be tottaly ananimous, the only thing that other users can know about - its 3 photos, nickname and user's motto.
There are two roles in the system:
1. User - can view users, initiate message, edit own profile, and more.
2. Admin - can ban/delete users, delete entries on users walls, create public events on home page, and more.

## Infrastructure
1. Database: MongoDB.
2. Server-side: REST API in Node.js using Express and Socket.io for message exchange/notifying. Should be built in TypeScript.
3. Client-side: React. Should be built in TypeScript.

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
- isOnline // Maybe it should be only on client side...
- Photos

2. Photos
- Photo id
- User id
- Photo filename

2. Messages:
- Message id
- messageDate
- messageBody
- SenderId
- RecipientId

## Featchers

## UI

Landing page for ungeristred visitors should be based on this mockup that i just created:
![5c63ee71-c1b8-483c-8095-377bb9d79de8](https://github.com/maxiboom1/Free-Messenger/assets/94469848/0fcd691c-4392-430b-8317-adc72823a1bb)

The home page for user should be based on this mockup:

![WhatsApp Image 2023-06-13 at 00 29 55](https://github.com/maxiboom1/Free-Messenger/assets/94469848/a8c9300c-9112-4f60-8fb6-e4fc873f003a)
