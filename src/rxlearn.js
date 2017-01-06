import Rx from 'rxjs/Rx';

let btn = document.getElementById('btn');

Rx.Observable.fromEvent(btn, 'click')
  .scan(count => count + 1, 0)
  .subscribe( (count) => {
    console.log(count + ',click!');
  })
