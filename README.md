# Vote App

[See a live demo](http://vote.fabienoger.com)

## It's simple vote app doing in MeteorJS

## Usage
1. For launch this app run the following command :
```
  meteor
```

2. You can set a admin user with the mongo console :
```
  meteor mongo
```
3. In mongo console run the followin command :
```
  db.users.update({_id: "user_id"}, {$set: {"profile.admin": true}})
```
