# Vote App

[See a live demo](http://vote.fabienoger.com)

## It's simple vote app doing in MeteorJS

## Usage
* For launch this app run the following command :
```
  meteor
```

* You can set a admin user with the mongo console :
``
  meteor mongo
  db.users.update({_id: "user_id"}, {$set: {"profile.admin": true}})
``
