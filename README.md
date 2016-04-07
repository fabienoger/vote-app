# Vote App

[See a live demo](http://vote.fabienoger.com)

## It's simple vote app doing in MeteorJS

## Usage
* Clone this project :
```
  git clone git@github.com:fabienoger/vote-app.git
  cd vote-app
```

* For launch this app run the following command :
```
  meteor
```

* You can set a admin user with the mongo console :
```
  meteor mongo
```
* In mongo console run the following command :
```
  db.users.update({_id: "user_id"}, {$set: {"profile.admin": true}})
```


