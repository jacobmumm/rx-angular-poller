# rx-angular-poller
RxPoller
========

RxPoller is an Observable poller built with RxJS. 

 
Goals
-----

* Pollers must have a unique name
* Interval and Action can be set or changed at any time via setConfig and setAction
* Poller can be paused and restarted
* Pollers can be retrieved by name via RxPoller.getPoller('posts')
* Poller will exponentially backoff on errors, doubling the interval until maxInterval is reached.
* Pollers do not start counting the next interval until the prior promise has been resolved.

Install & Run Demo
------------------

```sh
npm install 
npm start 
```

Express Server
--------------

Note that the server provides simple api routes which we can tweak to simulate delays or errors.


USAGE
=====

Instantiation:
--------------

```
poller = new RxPoller('posts');
poller.setConfig({
  interval: 5000,
  maxInterval: 40000
});
```

But since configuration can also be passed in the constructor, 
the above code could also be written as:

```
poller = new RxPoller('posts', {
  interval: 5000,
  maxInterval: 40000
});
```

Setting Poller Action:
----------------------

```
poller.setAction(function(){
  return $http.get('/api/posts');
});
```

Subscribing to Poller for Callback
----------------------------------

```
poller.subscribe(function(posts){
  // send array of posts to app
});
```

Starting and Stopping
---------------------

```
poller.start()
poller.stop()
```

